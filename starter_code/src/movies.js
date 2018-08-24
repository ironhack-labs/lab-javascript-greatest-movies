/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 


// Get the average of all rates with 2 decimals 
function ratesAverage(array) {
    var sumRates = array.reduce(function (acc, item) {
        return acc + item.rate
    }, 0);

    var sumNumber = parseFloat(sumRates);
    
    return Math.round((sumNumber/array.length) * 100) / 100

};

// Get the average of Drama Movies

function dramaMoviesRate(array) {
    var dramaMovies = array.filter(function (movie) {
        if (movie.genre.indexOf('Drama') !== -1) {
            return true;
        }
    });

    if (dramaMovies.length) {
        return ratesAverage(dramaMovies)
    }    
}

console.log(dramaMoviesRate);


// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
