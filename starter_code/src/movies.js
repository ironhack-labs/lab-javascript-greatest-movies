/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 

function ratesAverage(array) {

    // Get the average of all rates with 2 decimals 
    var accumulatedRates = 
    array.reduce(function (acc, oneMovie) {
        return acc + Number(oneMovie.rate);
    }, 0);
    
    var averageRateNotRounded = accumulatedRates / array.length;
    var averageRateRounded = Math.round(averageRateNotRounded *100)/100;
    
    return averageRateRounded;
}

// Get the average of Drama Movies
function dramaMoviesRate (array) {
    if (array.length === 1) {
        var averageRateRounded = array[0].rate
        return averageRateRounded;
    }
    else {
        var dramaArray = 
        array.filter(function (oneMovie){
        return oneMovie.genre.indexOf('Drama') >= 0;
        });
        var accumulatedRates = 
            dramaArray.reduce(function (acc, oneMovie) {
                if (oneMovie.rate === undefined) { 
                    return acc;
                }
                else {
                return acc + Number(oneMovie.rate);}
            }, 0);
        
        var averageRateNotRounded = accumulatedRates / dramaArray.length;
        var averageRateRounded = Math.round(averageRateNotRounded *100)/100;
        
        return averageRateRounded;
      }
    }
    
    dramaMoviesRate(movies);

// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
