/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
function turnHoursToMinutes(array) {
    var minutes;
    var time = array.map(function (film) {
       minutes = film.duration.split(" ");
    if (minutes[0].includes("h")) {
      minutes[0] = parseInt(minutes[0]) * 60 ;
      return minutes;
    }})
  return time + minutes[1];
  }
  
  console.log(turnHoursToMinutes(movies));


// Get the average of all rates with 2 decimals 


// Get the average of Drama Movies


// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
