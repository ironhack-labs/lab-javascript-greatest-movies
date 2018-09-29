/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 

function turnHoursToMinutes(duration) {
    var splitDuration = duration.split("h ");
    var hours = 60 * parseInt(splitDuration[0]);
    var splitMinutes = parseInt(splitDuration[1].slice(0,2));
    var totalInMinutes = hours + splitMinutes;
   return String(totalInMinutes);
}
  
var newDuration = movies.map(function(object){
    object.duration = turnHoursToMinutes(object.duration);
    return object;
  })


// Get the average of all rates with 2 decimals 


// Get the average of Drama Movies


// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
