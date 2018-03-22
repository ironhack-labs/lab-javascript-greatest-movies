/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 


// Get the average of all rates with 2 decimals 

var totalRates = movies.reduce(function (sum, movie){
    return sum + Number(movie.rate);
}, 0);

console.log(totalRates);

function ratesAverage (movies) {
    return (totalRates/movies.length).toFixed(2);
}

//console.log(ratesAverage(movies));



// Get the average of Drama Movies

var dramaMovies = movies.filter(function(movie){
    return movie.genre.includes('Drama');

}); 

var totalDramaRates = dramaMovies.reduce(function (sum, movie){
    return sum + Number(movie.rate);
}, 0);

console.log(totalDramaRates);

var dramaMoviesRate = (totalDramaRates/dramaMovies.length).toFixed(2);

console.log(dramaMoviesRate);


// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
