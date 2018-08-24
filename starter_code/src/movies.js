/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 


// Get the average of all rates with 2 decimals 

function ratesAverage (arrayMovies) {
    var sum = arrayMovies.reduce(function(acc, item){
        return acc + Number(item.rate);
    },0);

    var movieRateAv = sum/arrayMovies.length
    return Math.round(movieRateAv*100)/100;
}



// Get the average of Drama Movies
function dramaMoviesRate (arrayMovies){
    var dramaMovies = arrayMovies.filter(function(movie){
        return movie.genre ='Drama';
    })

    return ratesAverage(dramaMovies);
}

// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
