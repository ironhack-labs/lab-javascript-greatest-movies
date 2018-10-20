/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes
function stringToMinutes(string) {
  var arr = string.split("h");
  if (arr.length < 2) {
    arr.unshift("0");
  }
  var hours = Number(arr[0]);
  var minutes = Number(arr[1].split("min")[0]);

  return hours * 60 + minutes;
}

function turnHoursToMinutes(array) {
  var newArray = [];
  var result = array.map(function(movie) {
    var obj = {
      title: movie.title,
      year: movie.year,
      director: movie.director,
      duration: stringToMinutes(movie.duration),
      genre: movie.genre,
      rate: movie.rate
    };
    newArray.push(obj);
  });
  return newArray;
}

// Get the average of all rates with 2 decimals
function ratesAverage(arr) {
  var avgSum = arr.reduce(function(sum, movie) {
    return sum + movie.rate;
  }, 0);
  var avg = avgSum / arr.length;
  return Math.round(avg * 100) / 100;
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
  var avg = avgDrama / dramaFilter.length;
  return Math.round(avg * 100) / 100;
}

// Order by time duration, in growing order

// How many movies did STEVEN SPIELBERG

// Order by title and print the first 20 titles

// Best yearly rate average
