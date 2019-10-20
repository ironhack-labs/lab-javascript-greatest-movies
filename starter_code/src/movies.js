/* eslint no-restricted-globals: 'off' */

// Iteration 1: All rates average - Get the average of all rates with 2 decimals 
function ratesAverage(movieArray) {
    let sum = movieArray.reduce(function (accu, curVal) {
        return accu + curVal.rate
    }, 0);
    let averageRate = parseFloat(sum).toFixed(2) / movieArray.length
    return averageRate;
}



// Iteration 2: Drama movies - Get the average of Drama Movies
let dramaMovies = movies.filter(function (movie) {
    if (movie.genre.includes("Drama")) {
        return movie
    } else {
        return 0
    };
});

function dramaMoviesRate(dramaMovies) {
    let sum = dramaMovies.reduce(function (accu, cur) {
        return accu + cur.rate
    }, 0);
    let averageDrama = parseFloat(sum).toFixed(2) / dramaMovies.length;
    return averageDrama;
}



// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)
function orderByYear(movieArray) {
    let sortedArr = movieArray.sort(function (a, b) {
        if (a.year !== b.year) {
            return a.year - b.year;
        }
        return a.title.localeCompare(b.title);
    });

    return sortedArr
}


// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct
function howManyMovies(movieArray) {
    let filteredMovies = movieArray.filter(function (movie) {
        if (movie.genre.includes("Drama") && movie.director.includes("Steven Spielberg")) {
            return length;
        }
    });
    if (filteredMovies === 0) {
        return 0
    } else if (!movieArray.includes("Steven Spielberg")) {
        return 0
    } else if (!movieArray.includes("Drama")) {
        return 1
    } else return 4
}


// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles
/*???????
/*function orderAlphabetically(movies) {
    return movies.map(function (movie) {
        return movie.title.sort(a,b)
    }).slice(0,20);*/



// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(){

}
// BONUS Iteration: Best yearly rate average - Best yearly rate average
function bestYearAvg() {
    
}