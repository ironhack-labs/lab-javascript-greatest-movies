/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

// console.log(movies[0]); // it works in the SpecRunner.html with right click and "inspect"

/*
// TEST
const sorted = movies.sort(function (a, b) {
    //console.log(a.year);
    //console.log(b.year);
    return a.year - b.year;
});
console.log(sorted);
*/

/*
// TEST with any array
function orderByYear(anyArray, criteria1, criteria2) {
    const sorted = anyArray.slice().sort(function (a, b) { // .slice() is the correct way to copy an array
        if (a[criteria1] !== b[criteria1]) {
            return a[criteria1] - b[criteria1]; // works for numbers like [1,2,3]
        } 
        else if (a[criteria2] < b[criteria2]) { // works for strings like ['apple', 'orange', 'banana']
            return -1;
        } 
        else if (a[criteria2] > b[criteria2]) {
            return 1;
        }
        else {
            return 0; // names must be equal
        }
    });
    return sorted;
}
console.log(orderByYear(movies, "year", "title")); // have to use the quotation marks --> const criteria2 = "year";
*/

function orderByYear(moviesArray) {
    const orderedMovies = movies.slice().sort(function (a, b) {
        if (a.year < b.year) return -1;
        else if (a.year > b.year) return 1;
        else { // a.year === b.year
            if (a.title < b.title) return -1;
            else if (a.title > b.title) return 1;
            else return 0;
        }
    });
    return orderedMovies;
}
//console.log(orderByYear(movies));




// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

function howManyMovies(anyArray) {
    const spilbergMovies = anyArray.slice().filter(function(movie) {
        return movie.director === "Steven Spielberg" && movie.genre.includes('Drama');
    });
    return spilbergMovies.length;
}
//console.log(howManyMovies(movies)); // 4




// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(moviesArray) {
    const orderedMovies = moviesArray.slice().sort(function (a, b) {
        if (a.title < b.title) return -1;
        else if (a.title > b.title) return 1;
        else return 0;
    });
    const movieTitles = orderedMovies.slice().map(function (movieTitle) {
        return movieTitle.title;
    });
    if (movieTitles.length < 20) {
        return movieTitles;
    }
    else {
        return movieTitles.slice(0, 20);
    }
}
//console.log(orderAlphabetically(movies));




// Iteration 4: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(moviesArray) {
    const rates = moviesArray.slice().reduce(function (acc, val) {
        return acc + val.rate;
    }, 0); // 0 is the initial value, without that it won't work properly
    //return rates; // sum of the rates // 2078.399
    //return moviesArray.length; // 250
    const average = rates / moviesArray.length; // average of the rates
    if (moviesArray.length === 0) return 0;
    else return Math.round(average * 100) / 100; // average rounded to the decimals
}
//console.log(ratesAverage(movies)); // 8.31




// Iteration 5: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(moviesArray) {
    const dramaMovies = moviesArray.slice().filter(function (dramaMovie) {
        return dramaMovie.genre.includes('Drama');
    });
    // return dramaMovies.length; // 185
    const ratesDrama = dramaMovies.slice().reduce(function (acc, val) {
        return acc + val.rate;
    }, 0);
    //return ratesDrama; // 1538.699
    //return dramaMovies.length; // 185
    const averageDrama = ratesDrama / dramaMovies.length;
    if (dramaMovies.length === 0) return 0;
    else return Math.round(averageDrama * 100) / 100;
}
//console.log(dramaMoviesRate(movies)); // 8.32




// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// TEST
//const hourMin = movies[0].duration.split(' ');
//console.log(hourMin)

// 1.
// const splitH = movies[0].duration.split('h');
// //console.log(splitH);
// const splitHClearNumber = Number(splitH[0]);
// console.log(splitHClearNumber);

// 2.
// const splitMin = splitH[1].trim().split('min');
// //console.log(splitMin);
// const splitMinClearNumber = Number(splitMin[0]);
// console.log(splitMinClearNumber);

// 3.
// const durationMin = splitHClearNumber * 60 + splitMinClearNumber;
// console.log(durationMin);

// 4.
function turnHoursToMinutes(moviesArray) {
    const minutes = moviesArray.slice().map(function (minute) {
        const splitH = minute.duration.split('h');
        const splitHClearNumber = Number(splitH[0]);
        const splitMin = splitH[1].trim().split('min');
        const splitMinClearNumber = Number(splitMin[0]);
        const durationMin = splitHClearNumber * 60 + splitMinClearNumber;
        if (minute.duration.includes('h') === false) {
            minute.duration = minute.duration;
        }
        else {
            minute.duration = durationMin;
        }
        return minute;
    });
    return minutes;
}
//console.log(turnHoursToMinutes(movies));




// BONUS Iteration: Best yearly rate average - Best yearly rate average

// ???