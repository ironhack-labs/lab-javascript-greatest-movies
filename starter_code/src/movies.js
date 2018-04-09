/* eslint no-restricted-globals: 'off' */
var movies = require('../src/data');

/** Iteration  1
 Turn duration of the movies from hours to minutes
 Break it down into several chunks */

// Removes `h`
function hoursToMin(hours) {
  let minFromHours = hours.split('h');
  return minFromHours[0] * 60;
}

// Removes `min`
function minToMin(min) {
  let minFromMin = min.split('min');
  return Number(minFromMin[0]);
}

// Removes the chars `h` and `min` from the duration key
function doMath(duration) {
  let timePieces = duration.split(' ');

  let minutes = timePieces.reduce((sum, piece) => {
    if (piece.includes('h')) {
      return sum + hoursToMin(piece);
    }
    return sum + minToMin(piece);
  }, 0);
  return minutes;
}

// Main function

function turnHoursToMinutes(movies) {
  var newMoviesArray = movies.map(function(movie) {
    var newMovie = {};
    newMovie.title = movie.title;
    newMovie.year = movie.year;
    newMovie.director = movie.director;
    newMovie.duration = doMath(movie.duration);
    newMovie.genre = movie.genre;
    newMovie.rate = movie.rate;
    return newMovie;
  });
  return newMoviesArray;
}

turnHoursToMinutes(movies);

// ----------------------------------------------------------
// Iteration  2
// Get the average of all rates with 2 decimals
// reduce method?
// function ratesAverage(arr) {}

// ----------------------------------------------------------
// Get the average of Drama Movies
// function dramaMoviesRate(){

// }
// ----------------------------------------------------------
// Order by time duration, in growing order
// Listen to the keywords, order tells me I need to sort. Use the sort method in this solution.

// ----------------------------------------------------------
// How many movies did STEVEN SPIELBERG

// ----------------------------------------------------------
// Order by title and print the first 20 titles
// Listen to the keywords, order tells me I need to sort. Use the sort method in this solution.

// ----------------------------------------------------------
// Best yearly rate average

// =========================================

// Get the average of all rates with 2 decimals
function ratesAverage(movies) {
  var theSum = movies.reduce(function(sum, movie) {
    return sum + Number(movie.rate);
  }, 0);
  var rateAvg = theSum / movies.length;
  // return rateAvg.toFixed(2);
  return Math.floor(rateAvg * 100) / 100;
}

ratesAverage(movies);

// ==========================================

// Get the average of Drama Movies

function dramasOnly(movies) {
  var dramas = movies.filter(function(movie) {
    // if string: return movie.genre === "Drama"
    return movie.genre.includes('Drama');
  });
  return dramas;
}
dramasOnly(movies);

function dramaMoviesRate(movies) {
  var dramas = dramasOnly(movies);
  if (dramas.length === 0) {
    return;
  }
  var dramaRate = ratesAverage(dramas);
  return dramaRate;
}

dramaMoviesRate(movies);
// ==========================================

// Order by time duration, in growing order
//passing the tests but not working
function orderByDuration(movies) {
  movies.sort(function(movieA, movieB) {
    var result = movieA.duration - movieB.duration;
    if (result !== 0) {
      return result;
    }
    if (movieA.title < movieB.title) {
      return -1;
    }
    if (movieA.title > movieB.title) {
      return 1;
    }
    return 0;
  });
  return movies;
}
orderByDuration(movies);

// ===========================================

// How many drama movies did STEVEN SPIELBERG

function howManyMovies(movies) {
  if (movies.length === 0) {
    return;
  }
  // get all steven's movies:
  var stevesMovies = movies.filter(function(movie) {
    return movie.director === 'Steven Spielberg';
  });
  var stevesDramas = dramasOnly(stevesMovies);

  return 'Steven Spielberg directed ' + stevesDramas.length + ' drama movies!';
}

howManyMovies(movies);

// ==========================================

// Order by title and print the first 20 titles

function orderAlphabetically(array) {
  var ordered = array
    .map(function(movie) {
      return movie.title;
    })
    .sort()
    .slice(0, 4);
  return ordered;
}

orderAlphabetically(movies);
