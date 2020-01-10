/* eslint no-restricted-globals: 'off' */
/* jshint esversion: 6 */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(movies) {
    const sortedMovies = movies.slice();       // shallow copy
    sortedMovies.sort(function(a, b) {
        if (a.year === b.year) {
            return a.title.localeCompare(b.title);
        } else {
            return a.year - b.year;
        } 
    });
    return sortedMovies;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

function howManyMovies(movies) {
    return movies.filter(movie => 
        movie.director === "Steven Spielberg" && movie.genre.includes("Drama"))
        .length;
}

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movies) {
    const orderedMovies = movies.slice();       // shallow copy
    orderedMovies.sort(function(a, b) {
        return a.title.localeCompare(b.title);
    });
    return orderedMovies.map(movie => movie.title).slice(0, 20);
}

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movies) {
    if (movies.length === 0) {
        return 0;
    } else {
        const averageRate = movies.reduce((accumulator, currentMovie) => {
            if ("rate" in currentMovie) {
                return accumulator + currentMovie.rate;
            } else {
                return accumulator;
            }
        }, 0) / movies.length;
        return Math.round(averageRate * 100, 2) / 100;
    }
}

// Iteration 5: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movies) {
    const dramaMovies = movies.filter(movie => movie.genre.includes("Drama"));
    return ratesAverage(dramaMovies);
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

function hoursToMinutes(duration) {
    let hours = 0;
    if (duration.includes("h")) {
        hours = parseInt(duration.substring(0, duration.indexOf('h')));
    } 
    let minutes = 0;
    if (duration.includes("m")) {
        minutes = parseInt(duration.substring(duration.indexOf(' ') + 1, duration.indexOf('m')));
    }
    return hours * 60 + minutes;
}

function turnHoursToMinutes(movies) {
    const moviesWithMinutes = JSON.parse(JSON.stringify(movies));       // deep copy
    moviesWithMinutes.forEach(movie => {
        movie.duration = hoursToMinutes(movie.duration);
    });
    return moviesWithMinutes;
}

// BONUS Iteration: Best yearly rate average - Best yearly rate average
