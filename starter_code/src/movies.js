/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes
function turnHoursToMinutes(string) {
  var arr = string.split("h");
  if (arr.length < 2) {
    arr.unshift("0");
  var hours = Number(arr[0]);
  var minutes = Number(arr[1].split("min")[0]);

  return hours * 60 + minutes;
};

  var result = array.map(function(movie) {
    
      title: movie.title,
      year: movie.year,
      director: movie.director,
      duration: turnHoursToMinutes(movie.duration),
      genre: movie.genre,
      rate: movie.rate
  });
  return result;
}

// Get the average of all rates with 2 decimals
function ratesAverage(arr) {
  var avgSum = arr.reduce(function(sum, movie) {
    return sum + movie.rate;
  }, 0);
  return avgSum / arr.length;
}
// Get the average of Drama Movies
function dramaMoviesRate(arr) {
  var dramaFilter = arr.filter(function(movie) {
    return movie.genre.includes("Drama");
  });
  var avgDrama = dramaFilter.reduce(function(sum, movie) {
    return sum + movie.rate;
  }, 0);
  if (dramaFilter.length === 0) {
    return undefined;
  }
  return avgDrama / dramaFilter.length;
}

// Order by time duration, in growing order

// How many movies did STEVEN SPIELBERG

// Order by title and print the first 20 titles

// Best yearly rate average
