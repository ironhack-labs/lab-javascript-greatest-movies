/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 


function turnHoursToMinutes (arr) {
    var newArr=arr.map(function(element) {
      if (element.duration.includes("h") && element.duration.includes("min")) {
        var hoursToMinutes = element.duration.split(" ");
        var hours = parseInt(hoursToMinutes[0].slice(0,1));
        var minutes = parseInt(hoursToMinutes[1].slice(0,-3));
        element = ((hours * 60) + minutes);
      } else if (element.duration.includes("h")) {
        var hours = parseInt(element.duration.slice(0,1));
        element = (hours * 60);
      } else {
        var minutes = parseInt(element.duration.slice(0,-3));
        element =  minutes;
      }
      return {duration: element};
    }); 
    return newArr; 
}   

// Get the average of all rates with 2 decimals 


// Get the average of Drama Movies


// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
