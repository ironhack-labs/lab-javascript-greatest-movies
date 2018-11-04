/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
function turnHoursToMinutes(arr) {
  var newArray = arr.map(function(element) {
    var newEl = Object.assign({}, element);
    var minutes = newEl.duration.replace('h','').replace(' ', ':').replace('min','');
    var totalHour = minutes.split(':');
    console.log(totalHour);
    if (totalHour.length === 2) {
    var definitiveHour = (60*Number(totalHour[0]) + Number(totalHour[1]));
    } else if (totalHour[0]<10) {
      var definitiveHour = 60 * Number(totalHour[0]);
    } else {
      var definitiveHour = Number(totalHour[0]);
    }
    newEl.duration = definitiveHour;
    return newEl;
  })
  return newArray;
}

// Get the average of all rates with 2 decimals 


// Get the average of Drama Movies


// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
