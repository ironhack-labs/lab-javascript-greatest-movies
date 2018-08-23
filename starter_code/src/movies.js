/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes

function turnHoursToMinutes(movies) {
  var array = movies.map(function(e) {
    var hours = e.duration.split("h");
    var min = hours[1].split("min")[0];
    return Object.assign({},e,{duration:parseInt(hours[0]) * 60 + parseInt(min)}) ;
  });
  //console.log(timeHours);
  return array;
}

turnHoursToMinutes(movies);

function ratesAverage(array) {
  var ratesArray = array.map(function(eachMovie) {
    return eachMovie.rate;
  });
  var ratesArrayFloat = ratesArray.map(function(eachRate) {
    return parseFloat(eachRate);
  });
  var ratesSum = ratesArrayFloat.reduce(function(sum, eachRate) {
    return sum + eachRate;
  }, 0);
  var ratesAvg = ratesSum / ratesArrayFloat.length;
  var ratesAvgRounded = Math.round(ratesAvg * 100) / 100;
  return ratesAvgRounded;
}

// Get the average of all rates with 2 decimals

// Get the average of Drama Movies

// Order by time duration, in growing order

// How many movies did STEVEN SPIELBERG

// Order by title and print the first 20 titles

// Best yearly rate average
