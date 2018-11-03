/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
function turnHoursToMinutes(movies) {
  return movies.map(function(film) {
    var newEl = Object.assign({}, film)
    
    var splitTime = newEl.duration.split(' ');
    var timeTotal = parseFloat(splitTime[0]) * 60 + parseFloat(splitTime[1]);
    newEl.duration = timeTotal
    
    return newEl;
  });
}

// Get the average of all rates with 2 decimals 


// Get the average of Drama Movies


// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
