/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes
 

function turnHoursToMinutes(moviesArray) {
    return moviesArray.map(function (e) {
    var hours = 0;
    var minutes = 0;
    if (e.duration.indexOf ( 'h' ) !== -1) {
      hours = parseInt(e.duration[0], 10) * 60;
    }
    if (e.duration.indexOf( 'm' ) !== -1) {
        minutes = parseInt(e.duration.substring(e.duration.length -5, e.duration.length - 3), 10);
    }
    return Object.assign({}, e, { duration: hours + minutes });
    });
}
turnHoursToMinutes(movies);


// Get the average of all rates with 2 decimals 

function ratesAverage(moviesArray) {
    var tl = moviesArray.reduce(function(sum, movie){
    return sum + movie.rate;
    },0);
    return tl/moviesArray.length;
}

function dramaMoviesRate(moviesArray) {

}

// Get the average of Drama Movies



// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
