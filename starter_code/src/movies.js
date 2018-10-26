/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 


// Get the average of all rates with 2 decimals 
function ratesAverage(movies) {

    var promedio = movies.reduce(function(valor, movie) {
        return valor + parseFloat(movie.rate);
    }, 0);

    let sumaPromedio = (promedio / movies.length);
    return sumaPromedio
}

// Get the average of Drama Movies


// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average