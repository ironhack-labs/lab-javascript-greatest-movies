/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 


function turnHoursToMinutes(array) {
  return array.map(function(movie){
    var newMovie = Object.assign({},movie);
    var split = newMovie.duration.split(' ');
    var hours;
    var minutes;
    if (split.length > 1){
      hours = Number(split[0].replace('h', ''));
      minutes = Number(split[1].replace('min', ''));
    } else {
      if (split[0].indexOf('h') > -1) {
        hours = Number(split[0].replace('h', ''));
        minutes = 0;
      } else {
        hours = 0;
        minutes = Number(split[0].replace('min', ''));
      }
    }
  newMovie.duration = hours*60 + minutes;
  return newMovie;
  });
}

// Get the average of all rates with 2 decimals 


// Get the average of Drama Movies


// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
