/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 


// Get the average of all rates with 2 decimals 

function ratesAverage (moviesArray){
  var sum = moviesArray.reduce (function (acu, item){
    return acu + item.rate;
  }, 0);
  return sum/moviesArray.length;
};

// Get the average of Drama Movies

function dramaMoviesRate (moviesArray) {
  var dramaMovies = moviesArray.filter(function (item) {
    if (item.genre.indexOf('Drama') !== -1) {
      return item
    } else{
      return undefined;
    } 

    // return item.genre === ['Drama'];
  });
  var ratesDrama = ratesAverage(dramaMovies);
  return ratesDrama;
}

// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
