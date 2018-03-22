/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes



// Get the average of all rates with 2 decimals 
function ratesAverage(array) {
  var totalRates = array.reduce(function(accumulator, item) {
    return accumulator + item.rate;
  }, 0);

  return parseFloat(totalRates / array.length);
}


// Get the average of Drama Movies

function dramaMoviesRate(array) {
  var dramaMovies = array.filter(function(movie) {
    return movie.genre.includes("Drama");
  }, 0);

  var averageDrama = ratesAverage(dramaMovies);

  return averageDrama;
}
// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
