/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
function  turnHoursToMinutes(array){
    array.forEach(function(element) {
      var hour = parseInt(element.duration.substring(0,1));
      var minutes = parseInt(element.duration.split("min")[0].substring(2));
      element.duration = hour *60 + minutes;
    });
    return array
  }


// Get the average of all rates with 2 decimals 
function promedio(array){
    var total = 0;
    array.forEach(function(elementos){
      var totalRating = parseFloat(elementos.rate);
      total+=totalRating;
   });
    console.log(total);
    return total/array.length;
  }
  promedio(movies);

// Get the average of Drama Movies


// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
