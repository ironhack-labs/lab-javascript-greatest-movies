/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
function turnHoursToMinutes(movies) {
  return movies.map(function(film) {
    var newEl = Object.assign({}, film)
    var splitTime = newEl.duration.split(' ');

    if (splitTime.length === 2) {
      var timeTotal = parseFloat(splitTime[0]) * 60 + parseFloat(splitTime[1]);
      newEl.duration = timeTotal
    } else if (splitTime.length === 1 && splitTime[0].indexOf('h') > -1) {
      var timeHours = newEl.duration.replace('h', '');
      var timeHoursTotal = parseFloat(timeHours *60);
      newEl.duration = timeHoursTotal
    } else if (splitTime.length === 1 && splitTime[0].indexOf('min') > -1) {
      var timeMinutes = newEl.duration.replace('min', '');
      var timeMinutesTotal = parseFloat(timeMinutes);
      newEl.duration = timeMinutesTotal
    }
  
    return newEl;
  });
}

turnHoursToMinutes(movies)

// Get the average of all rates with 2 decimals 

function ratesAverage(arr) {
  var sum = arr.reduce(function (acc,currentValue) {
    return acc + parseFloat(currentValue.rate);
  },0)
  return sum / arr.length;
}

ratesAverage(movies)

// Get the average of Drama Movies


// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
