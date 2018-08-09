/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}
// Get the average of all rates with 2 decimals

function ratesAverage(myArray) {
  var sum = myArray.reduce(function(acc, curr) {
    return acc + parseFloat(curr.rate);
  }, 0);
  //return sum;

  var average = sum / myArray.length;
  return average;
}

// Get the average of Drama Movies
function dramaMoviesRate(myArray) {
  var genderFilter = myArray.filter(function(movieGenre) {
    if (myArray.genre === "Drama") {
      return genderFilter;
    }
  });
}

// Order by time duration, in growing order

function orderByDuration() {}
// How many movies did STEVEN SPIELBERG

function howManyMovies() {}
// Order by title and print the first 20 titles
function orderAlphabetically() {}
// Best yearly rate average
