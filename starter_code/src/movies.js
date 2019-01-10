/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes
function modifyDuration(str) {
  var hourInMinutes = 0;
  var minutes = 0;
  if (str.indexOf("h") !== -1) {
    hourInMinutes = str[0] * 60;
  }
  if (str.indexOf("min") !== -1) {
    minutes = parseInt(str.substr(-5));
  }
  return hourInMinutes + minutes;
}

function turnHoursToMinutes(arr) {
  return arr.map(function(movie) {
    return {
      ...movie,
      duration: modifyDuration(movie.duration)
    };
  });
}

// Get the average of all rates with 2 decimals
function ratesAverage(arr) {
  var exact = arr.reduce(
    (acc, movie, index, array) => acc + Number(movie.rate) / array.length,
    0
  );
  return Number(exact.toFixed(2));
}

// Get the average of Drama Movies
function dramaMoviesRate(arr) {
  var arrFiltered = arr.filter(function(movie) {
    return movie.genre.indexOf("Drama") !== -1;
  });
  if (ratesAverage(arrFiltered) === 0) {
    return undefined;
  }
  return ratesAverage(arrFiltered);
}

// Order by time duration, in growing order
function orderByDuration(arr) {
  // var arrNew = turnHoursToMinutes(arr);
  arr.sort(function(a, b) {
    if (a.duration > b.duration) return 1;
    if (a.duration < b.duration) return -1;
    if (a.title > b.title) return 1;
    return -1;
  });
  return arr;
}

// How many movies did STEVEN SPIELBERG
function howManyMovies(arr) {
  // var arrFiltered = arr.filter(function(movie) {
  //   return movie.genre.indexOf("Drama") !== -1;
  // });
  // var count = 0;
  // for (var i = 0; i < arrFiltered.length; i++) {
  //   if (arrFiltered[i].director === "Steven Spielberg") count += 1;
  // }
  // return count.toString();
  if (arr.length === 0) return undefined;
  var spielbergMovies = arr.filter(function(movie) {
    return (
      movie.director === "Steven Spielberg" &&
      movie.genre.indexOf("Drama") !== -1
    );
  });
  return (
    "Steven Spielberg directed " + spielbergMovies.length + " drama movies!"
  );
}

// Order by title and print the first 20 titles

// Best yearly rate average
