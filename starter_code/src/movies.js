/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 



// Get the average of all rates with 2 decimals 

/*var total = movies.reduce(sum, item), {
    return sum + item.rate;
};*/


function ratesAverage(movies) {
    var average = movies.reduce(function (sum, item) {
      return sum + +item;
    }) / movies.length;
    return average;
  }
  
  ratesAverage(movies);
// Get the average of Drama Movies


// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
