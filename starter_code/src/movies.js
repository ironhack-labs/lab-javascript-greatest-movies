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

  function ratesAverage(movies) {
    
    var numMov = movies.length;

    var output = [];
    for (var i = 0; i < numMov; ++i) {
      output.push(movies[i].rate);
    }
    var totalAvgString = output.reduce(function(acc, elt) {
      return (acc + elt) / numMov;
    });
    totalAvg = parseFloat(totalAvgString);

    // var factor = Math.pow(10, 2);
    // totalAvg = Math.round(totalAvg * factor) / factor;
    // console.log(totalAvg);
    return totalAvg;
  }
  ratesAverage(movies);


// Get the average of Drama Movies

function dramaMoviesRate(movies) {

}
dramaMoviesRate(movies);

// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
