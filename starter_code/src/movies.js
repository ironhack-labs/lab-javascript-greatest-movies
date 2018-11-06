/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
function turnHoursToMinutes(movies) {
  return movies.map(function(film) {
    var newEl = Object.assign({}, film)
    var splitTime = newEl.duration.split(' ');
    console.log(splitTime);

    if (newEl.duration.includes('h')) {
      var timeHours = newEl.duration.replace("h", "");
      console.log(timeHours);
      var timeHoursTotal = parseFloat(timeHours *60);
      console.log(timeHoursTotal)
    }
    
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
