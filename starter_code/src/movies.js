/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 

var moviesArray = [
  {
    "title":"The Shawshank Redemption",
    "year":"1994",
    "director":"Frank Darabont",
    "duration":"2h 22min",
    "genre":["Crime","Drama"],
    "rate":"9.3"
  }
]

function turnHoursToMinutes(moviesArray) {
  
  return moviesArray.map(function (elem) {
    var hours = 0;
    var minutes = 0;
    if (elem.duration.indexOf('h') !== -1) {
      hours = parseInt(elem.duration[0], 10) * 60;
    }
    if (elem.duration.indexOf('min') !== -1) {
      minutes = parseInt(elem.duration.substring(elem.duration.length - 5, elem.duration.length - 3), 10);
    }
    return Object.assign({}, elem, { duration: hours + minutes });
  });
}
turnHoursToMinutes(moviesArray);


// Get the average of all rates with 2 decimals 

function ratesAverage(moviesArray) {
  
  var numMov = moviesArray.length;

  var totalAvg = moviesArray.reduce(function (acc, elem) { 
    return (acc + elem.rate) / numMov ;
  }, 0);
  
}
ratesAverage(moviesArray);

// Get the average of Drama Movies


// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
