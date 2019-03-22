/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes

// Get the average of all rates with 2 decimals
function ratesAverage(array) {
  var sumRate = null;

  array.forEach(movie => {
    var ratenumber = Number(movie.rate);
    sumRate += ratenumber;
  });

  // if (isNaN(sumRate) === false){
  //     return;
  // }
  return Math.round((sumRate / array.length) * 100) / 100;
}

// Get the average of Drama Movies

function isDrama(string) {
  if (string === "Drama") {
    return true;
  } else {
    return false;
  }
}

function containsDrama(array) {
  var yesContainsDrama = null;
  array.forEach(element => {
    if (isDrama(element) === true) {
      yesContainsDrama = true;
    }
  });
  return yesContainsDrama;
}

function dramaMoviesRate(array) {
  var dramaMovies = array.filter(movie => {
    return containsDrama(movie.genre) === true;
  });

  if (!dramaMovies.length) return;
  return ratesAverage(dramaMovies);
}

// Order by time duration, in growing order
// Approach:
// 1. create a new array = sorted array
// 2. use .sort() to sort the array
// 3. create a callback function that compares the duration value between two objects (shortest duration first)

function orderByDuration(array) {
  const moviesByDuration = array.sort((a, b) => {
    if (a.duration !== b.duration) return a.duration - b.duration;
    else {
      if (a.title > b.title) return 1;
      if (a.title == b.title) return 0;
      if (a.title < b.title) return -1;
    }
  });
  return moviesByDuration;
}

// How many movies did STEVEN SPIELBERG
function isStevenPielberg(director) {
  if (director === "Steven Spielberg") return true;
  else return false;
}
function filterSP(movielist) {
  var onlySPDrama = movielist.filter(movie => {
    return isStevenPielberg(movie.director) && containsDrama(movie.genre);
  });
  return onlySPDrama;
}

function howManyMovies(movieSP) {
  var filtermovieSP = filterSP(movieSP);
  if (!movieSP.length) return;
  else if (!filtermovieSP.length)
    return "Steven Spielberg directed 0 drama movies!";
  else
    return (
      "Steven Spielberg directed " + filtermovieSP.length + " drama movies!"
    );
}

// Order by title and print the first 20 titles
// Approach
// 1.

// Best yearly rate average
