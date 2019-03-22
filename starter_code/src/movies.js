/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes

// Get the average of all rates with 2 decimals
function ratesAverage(array) {
  var sumRate = null;

  array.forEach(movie => {
    var ratenumber = Number(movie.rate);
    sumRate += ratenumber;
  });
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
    } else return false;
  });
  return yesContainsDrama;
}

function dramaMoviesRate(array) {
  var dramaMovies = array.filter(movie => {
    return containsDrama(movie.genre) === true;
  });
  if (!dramaMovies.length) return;
  else return ratesAverage(dramaMovies);
}

// Order by time duration, in growing order

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
  if (!movieSP.length) return;
  var filtermovieSP = filterSP(movieSP);
  if (filtermovieSP.length === 0)
    return "Steven Spielberg directed 0 drama movies!";
  else if (filtermovieSP)
    return (
      "Steven Spielberg directed " + filtermovieSP.length + " drama movies!"
    );
}
/*function howManyMovies(array) {
  var stevenPielberg = array.filter(movie => {});
  if (isStevenPielberg === true && containsStevenPielberg == true)
    return containsStevenPielberg.length;
  else return;
}*/

// Order by title and print the first 20 titles

// Best yearly rate average
