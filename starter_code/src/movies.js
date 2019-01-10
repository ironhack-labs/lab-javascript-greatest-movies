/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes

// Get the average of all rates with 2 decimals

function ratesAverage(movies) {
  var average = movies.reduce(function(sum, oneMovie) {
    return sum + Number(oneMovie.rate);
  }, 0);
  return Number((average / movies.length).toFixed(2));
}

console.log(ratesAverage(movies));

// Get the average of Drama Movies

function dramaMoviesRate(movies) {
  var dramaMovies = movies.filter(function(oneMovie) {
    return oneMovie.genre.indexOf("Drama") > -1;
  });
  console.log(dramaMovies);

  console.log(ratesAverage(dramaMovies));
  if (dramaMovies.length === 0) {
    return undefined;
  }
  return ratesAverage(dramaMovies);
}

console.log(dramaMoviesRate(movies));

// Order by time duration, in growing order

// How many movies did STEVEN SPIELBERG

// Order by title and print the first 20 titles

// Best yearly rate average
