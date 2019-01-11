/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes

function changeToMinutes(movie) {
  var minutes = 0;
  var hours = 0;

  var partition = movie.duration.split(" ");
  if (movie.duration.includes("h") && movie.duration.includes("min")) {
    hours = parseInt(partition[0]);
    minutes = parseInt(partition[1]);
  } else if (movie.duration.includes("min")) {
    minutes = parseInt(partition[0]);
  } else {
    hours = parseInt(partition[0]);
  }

  return hours * 60 + minutes;
}

function turnHoursToMinutes(array) {
  var arrayToReturn = array.map(function(movie) {
    var durationInMinutes = changeToMinutes(movie);
    return Object.assign({}, movie, { duration: durationInMinutes });
  });
  return arrayToReturn;
}

// Get the average of all rates with 2 decimals

function ratesAverage(movies) {
  totalRate = movies.reduce(function(sumlRate, rateMovie) {
    return sumlRate + parseFloat(rateMovie.rate);
  }, 0);
  averageRate = totalRate / movies.length;
  return parseFloat(averageRate.toFixed(2));
}
// Get the average of Drama Movies

function dramaMoviesRate(movies) {
  var dramaMovies = movies.filter(function(movie) {
    return movie.genre.includes("Drama");
  });
  return ratesAverage(dramaMovies);
}

// Order by time duration, in growing order

// How many movies did STEVEN SPIELBERG

// Order by title and print the first 20 titles

// Best yearly rate average
