/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes

// Get the average of all rates with 2 decimal

function ratesAverage(movies) {
  var total = movies.reduce(function(sum, oneMovie) {
    return sum + Number(oneMovie.rate);
  }, 0);
  var average = Number(total / movies.length);
  return average;
}

// Get the average of Drama Movies
function dramaMoviesRate(movies) {
  if (movies === NaN) {
    return undefined;
  }
  var drama = movies.filter(function(oneDrama) {
    return oneDrama.genre.indexOf("Drama") !== -1;
  });
  return parseFloat(ratesAverage(drama), 2);
}

console.log;

// Order by time duration, in growing order

// How many movies did STEVEN SPIELBERG

// Order by title and print the first 20 titles

// Best yearly rate average
