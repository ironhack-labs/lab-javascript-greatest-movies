/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arr) {
    return arr.concat().sort((a, b) => {
        if (a.year > b.year) {
            return 1;
        }
        else {
            return -1;
        }
    })
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct
function howManyMovies(arr) {
    const manyMovie = arr.filter((element) => {
        return (element.director === "Steven Spielberg" && element.genre.includes("Drama"))
    })
    return manyMovie.length
}

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arr) {
    return arr.concat().sort((a, b) => {
        if (a.title > b.title) {
            return 1;
        }
        else {
            return -1
        }
    }).slice(0, 20).map(e => e.title)

}


// Iteration 4: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(arr) {
    if (arr.length === 0) {
        return 0;
    }
    const ratings = arr.map(e => (e.rate || 0));
    sum = ratings.reduce((acc, curr) => {
        acc += curr;
        return acc;
    }, 0
    );
    return parseFloat(((sum / ratings.length).toFixed(2)));
}

// Iteration 5: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(arr) {
    dramaMovies = arr.filter(e => {
        return e.genre.includes("Drama")
    })
    return ratesAverage(dramaMovies)
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(arr) {
    const newArr = arr.map(movie => durationToMinutes(movie))
    function durationToMinutes(movie) {
        if(typeof(movie.duration) === "number"){
            return movie;
        }
        movieDuration = movie.duration;
        let hours = 0;
        let minutes = 0;
        if (movieDuration.indexOf("h") > 0) {
            hours = movieDuration.slice(0, (movieDuration.indexOf("h")))
        }
        if (movieDuration.indexOf("m") > 0) {
            minutes = movieDuration.slice(movieDuration.indexOf("h") + 1, movieDuration.indexOf("m"))
        }
        movie.duration = Number(60 * parseInt(hours) + parseInt(minutes))
        return movie;
    }
    return newArr;
}
// BONUS Iteration: Best yearly rate average - Best yearly rate average


