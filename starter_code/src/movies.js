/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 


// Get the average of all rates with 2 decimals 

function ratesAverage(moviesArray) {

    moviesRate = moviesArray.map(function (oneMovie) {
        return parseFloat(oneMovie.rate);
    });

    rateTotal = moviesRate.reduce(function (sum, oneRate) {
        return sum + oneRate;
    }, 0);

    return Number(rateTotal / moviesArray.length).toFixed(2);

};

// Get the average of Drama Movies
function dramaMoviesRate(movies) {
   
    if (drama.length === 0) {
        return undefined;
    };
 };

// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
