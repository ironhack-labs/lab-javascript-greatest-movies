/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 

function getTheMinutes(duration) {
    if (duration.indexOf("h") === -1) {
        return parseInt(duration.slice(0, duration.indexOf("min")))
    } else if (duration.indexOf("min") === -1) {
        return parseInt(duration.slice(0, duration.indexOf("h"))) * 60
    } else {
        let minutes = parseInt(duration.slice(0, duration.indexOf("h"))) * 60 + parseInt(duration.slice(duration.indexOf(" "), duration.indexOf("min")))
        return minutes
    }
}

function turnHoursToMinutes(movieCollection) {
    return movieCollection.map(function (movie) {
        return {
            title: movie.title, year: movie.year,
            director: movie.director,
            duration: getTheMinutes(movie.duration),
            genre: movie.genre, rate: movie.rate
        };
    })
}

// Get the average of all rates with 2 decimals 

function ratesAverage(moviesCollection) {
    let rates = moviesCollection.map(function (movie) {
        return parseFloat(movie.rate)
    });
    let ratesSum = rates.reduce(function (ac, cu) {
        if (isNaN(cu)){
            return ac
            }
        return ac + cu
    });
    return Math.round(100 * ratesSum / rates.length, 2) / 100

}

// Get the average of Drama Movies

function dramaMoviesRate(moviesCollection) {
    let dramaMovies = moviesCollection.filter(function (movie) {
        return movie.genre.indexOf("Drama") !== -1
    });

    if (dramaMovies.length===0) {return};

    return ratesAverage(dramaMovies)
}

// Order by time duration, in growing order

function orderByDuration(moviesCollection){
    internalMoviesCol = turnHoursToMinutes(moviesCollection);
    return internalMoviesCol.sort(function(a,b){
        if (a.duration > b.duration){
            return 1
        };
        if (a.duration < b.duration){
            return -1
        };
        return 0
    })
}

// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
