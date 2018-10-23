/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 



// Get the average of all rates with 2 decimals 

function ratesAverage (array) {

  var total = array.reduce(function(sum, element) {
    return (sum + Number(element.rate)); 
  }, 0);

  return (total / array.length);
};

// Get the average of Drama Movies

function dramaMoviesRate (array) {
  var dramaMovies = 
  array.filter (function (element) {
    return element.genre.includes("Drama");
  })
  if (dramaMovies.length === 0) {
    return undefined;
  }
  var dramaAverage = ratesAverage(dramaMovies);
  return Number(dramaAverage.toFixed(2));
};




// Order by time duration, in growing order
function orderByYear (array) {
    var yearByYear = 
    array.year.sort (function (filmA, filmB) {
      if (filmA < filmB) {
        return -1;
      }
      else {
        return 1;
      }
    })
    return yearByYear;
};




// How many movies did STEVEN SPIELBERG
function howManyMovies (array) {
    
    var spielbergMovies = 
    array.filter (function (element) {
      return element.director.includes("Steven Spielberg") && element.genre.includes("Drama");
    })
    
    if (spielbergMovies.length === 0 ) {
      return undefined;
    }
  
  return spielbergMovies.toString();
};


// Order by title and print the first 20 titles


// Best yearly rate average
