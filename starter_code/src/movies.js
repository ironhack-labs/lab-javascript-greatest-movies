/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 



// Get the average of all rates with 2 decimals 

function ratesAverage(arr) {

  var total = arr.reduce(function (sum, item) {
    return sum + Number(item.rate);

  }, 0);

  return total / arr.length;
}

ratesAverage(movies);


// Get the average of Drama Movies

function dramaMoviesRate(arr) {

  var movies = arr.reduce(function (sum, item) {
    if (item.genre.includes("Drama")) {
      return sum = sum + Number(item.rate);
    }
  }, 0);

  return parseFloat((movies / arr.length).toFixed(2));

}

dramaMoviesRate(movies);
// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average