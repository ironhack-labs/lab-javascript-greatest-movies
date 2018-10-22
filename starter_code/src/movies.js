/* eslint no-restricted-globals: 'off' */

// Turn duration of the movies from hours to minutes 



function stringToMinutes(string) {
    var arr = string.split('h')
    if (arr.length < 2) {
        arr.unshift("0")
    }
    var hours = Number(arr[0])
    var minutes = Number(arr[1].split("min")[0])
    return hours * 60 + minutes
};

function turnHoursToMinutes(movies) {
    var moviesDuration = movies;
    moviesDuration.duration = stringToMinutes();
    moviesDuration.sort(function (a, b) {
        return a - b
    });
    return moviesDuration;
};

// Get the average of all rates with 2 decimals 
function ratesAverage(movies) {
    var totalRate = movies.reduce(function (sum, movie) {
        return sum + parseFloat(movie.rate);
    }, 0);
    return totalRate / movies.length.toFixed(2);
}

// Get the average of Drama Movies
function dramaMoviesRate(movies) {
    var dramaMovies = movies.filter(function (movie) {
        return movie.genre.includes('Drama');
    });
    var totalRate = dramaMovies.reduce(function (sum, movie) {
        return sum + parseFloat(movie.rate);
    }, 0);
    return totalRate / dramaMovies.length.toFixed(2);
};
console.log(dramaMoviesRate(movies));

// Order by time duration, in growing order
function orderByDuration(movies) {
    return movies.duration.sort
}

// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
