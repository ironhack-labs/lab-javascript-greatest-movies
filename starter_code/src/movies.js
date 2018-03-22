/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 


// Get the average of all rates with 2 decimals 



function ratesAverage(array) {
  var totalRate = array.reduce(function (acc, movie) { 
    console.log(movie);
    return acc + Number(movie.rate)
  }, 0);
  return totalRate / array.length;
};


// Get the average of Drama Movies

function dramaMoviesRate(array) {
  var dramaMovies = movies.filter(function(elem) {
    if (elem.genre.includes("Drama")) {
      return true;
    } 
    });
  return parseInt(ratesAverage(array));
};

dramaMoviesRate(dramaMovies)
/*
function dramaMoviesRate(array) {
  var totalRate = array.reduce(function (acc, movie) { 
    return acc + movie.rate
  }, 0);
  return totalRate / array.length;
};
*/

// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
