/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 


// Get the average of all rates with 2 decimals 

function ratesAverage(movies) {
    var totalRates = movies.reduce (function(accumulator,movie) {
      return accumulator + Number(movie.rate);
    },0);
    var avg =  (totalRates/movies.length).toFixed(2);
    // console.log(avg);
    return avg;
}



// Get the average of Drama Movies
function dramaMoviesRate(movies) {

    var arrayDramaMovies = movies.filter (function(genredrama){
        return genredrama.genre.includes("drama")
    }); 

    var totalDramaRates = arrayDramaMovies.reduce (function(accumulator,dramaMovies) {
      return accumulator + Number(dramaMovies.rate);
    },0);
    console.log ("The average of dramam movies is " + dramaMoviesRate(movies));
    return (totalDramaRates/arrayDraMaMovies.length)
}



// Order by time duration, in growing order

function orderByDuration(movies) { 
    var arrayOrderDuration = movies.sort(function(orderDurantion){
        return orderDuration.duration.length;
    });
    console.log ("arrayOrderDuration: ", arrayOrderDuration);

} 


// How many movies did STEVEN SPIELBERG

function howManyMovies(arrayDramaMovies) {
var ssDramaMovies = arrayDramaMovies.fliter (function(directorname){
    return directorname.director.includes("Steven Spielberg");
});
}

// Order by title and print the first 20 titles

function orderAlphabetically(movies) {
var arrayTitleMovies = movies.sort(function(movie){
    return movie.title.sort();
});
var i = 0; 
while (i<arrayTitleMovies.length) {
    if (i == 20) {
        break;
    }
    i += 1;
}
}

// Best yearly rate average
