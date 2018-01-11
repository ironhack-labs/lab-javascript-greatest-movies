/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 


// Get the average of all rates with 2 decimals 


function ratesAverage (array) {

    var reduceFunction = function(rateSum, movie) {
        return rateSum + Number(movie.rate);
    };

    var ratesTotal = array.reduce(reduceFunction, 0);

    var average = ratesTotal / array.length;

    return Math.round(100 * average) / 100;
};

// Get the average of Drama Movies

function dramaMoviesRate(movies) {

    function isDrama (movie) {
        return movie.genre.indexOf("Drama") >= 0;
    }

    var dramaMovies = movies.filter(isDrama);

    if (dramaMovies.length === 0) {
        return;
    }

    return ratesAverage(dramaMovies);
}

// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average

