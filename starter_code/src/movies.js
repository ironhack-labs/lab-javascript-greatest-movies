/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes

// Get the average of all rates with 2 decimals

function ratesAverage(array) {
  var arrayOfRatings = array.reduce(function(sum, currentValue) {
    return sum + currentValue.rate;
  }, 0);
  console.log(arrayOfRatings);
  return arrayOfRatings / array.length;
}

// Get the average of Drama Movies

function dramaMoviesRate(movies) {
  var justDramas = movies.filter(function(oneMovie) {
    return oneMovie.genre.indexOf("Drama") > -1;
  });
  console.log(justDramas);

  if (justDramas.length === 0) {
    return undefined;
  }
  return ratesAverage(justDramas);
}

// Order by time duration, in growing order

// How many movies did STEVEN SPIELBERG

// Order by title and print the first 20 titles

// Best yearly rate average
