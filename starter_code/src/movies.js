/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
function turnHoursToMinutes(moviesArray) {
    return moviesArray.map(function (elem) {
      var hours = 0;
      var minutes = 0;
      if (elem.duration.indexOf('h') !== -1) {
        hours = parseInt(elem.duration[0], 10) * 60;
      }
      if (elem.duration.indexOf('min') !== -1) {
        minutes = parseInt(elem.duration.substring(elem.duration.length - 5, elem.duration.length - 3), 10);
      }
      return Object.assign({}, elem, { duration: hours + minutes });
    });
  }
  turnHoursToMinutes(movies);

// Get the average of all rates with 2 decimals 
  
function ratesAverage (moviesArray){
  var rate = moviesArray.reduce(function(accum, current){
   if(current.rate.length == " " || current.rate.lengtn !== " ")
    return accum + parseInt(current.rate);
  }, 0);
    return rate/moviesArray.length;
}
// Get the average of Drama Movies
function dramaMoviesRate (moviesArray){
 var dramas = moviesArray.filter(function(elem){
 return elem.genre.indexOf("Drama") != -1;
  });
  return ratesAverage(dramas);
}


// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
