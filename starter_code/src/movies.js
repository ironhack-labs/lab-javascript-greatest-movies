/* eslint no-restricted-globals: 'off' */

//let movies = require('./data.js');
//let movies = [];
// Iteration 1: All rates average - Get the average of all rates with 2 decimals 

function ratesAverage(movies) {
    let sumMoviesRates = movies.reduce((totalRates, individualRate) => {
        return totalRates + parseFloat(individualRate.rate)
    }, 0);
    let averageMoviesRate = sumMoviesRates / movies.length;
    return parseFloat(averageMoviesRate.toFixed(2));
}

// Iteration 2: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movies) {
    let dramaRates = movies.filter(movie => {
        return movie.genre.indexOf('Drama') !== -1;
    })
    console.log(dramaRates);
    if (dramaRates.length === 0) {
        return 0;
    } else {
        let sumDramaRates = dramaRates.reduce((totalRates, individualRate) => {
            return totalRates + parseFloat(individualRate.rate);
        }, 0);
        let averageDramaRates = sumDramaRates / dramaRates.length;
        console.log(averageDramaRates);
        return parseFloat(averageDramaRates.toFixed(2));
    }
}

dramaMoviesRate(movies);

// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)



// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct



// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles



// Iteration 6: Time Format - Turn duration of the movies from hours to minutes



// BONUS Iteration: Best yearly rate average - Best yearly rate average