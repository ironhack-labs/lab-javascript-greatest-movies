/* eslint no-restricted-globals: 'off' */

// Turn duration of the movies from hours to minutes

function turnHoursToMinutes(object) {
  var newArray = object.map(function(movie) {
    if (movie.duration.includes(" ")) {
      var splitTime = movie.duration.split(" ");
      var horas = parseInt(splitTime[0].replace("h", "")) * 60;
      var minutos = parseInt(splitTime[1].replace("min", ""));

      movie.duration = horas + minutos;
    } else {
      if (movie.duration.includes("h")) {
        movie.duration = parseInt(movie.duration.replace("h", "")) * 60;
      } else {
        movie.duration = parseInt(movie.duration.replace("min", ""));
      }
    }
    return movie;
  });

  return newArray;
}

// Get the average of all rates with 2 decimals

function ratesAverage(object) {
  var newArray = object.map(function(movie) {
    //console.log(movie.rate);
    return parseFloat(movie.rate);
  });

  var rate = newArray
    .reduce(function(acum, n) {
      return acum + n;
    })
    .toFixed(2);

  return rate / newArray.length;
}

// Get the average of Drama Movies

function dramaMoviesRate(object) {
  var arrayDrama = [];
  var newArray = object.map(function(movie) {
    if (movie.genre.indexOf("Drama") >= 0) {
      arrayDrama.push(movie.rate);
    }
  });

  if (arrayDrama.length <= 0 || arrayDrama === undefined) {
    return undefined;
  }

  var rate = arrayDrama.reduce(function(acum, n) {
    return acum + n;
  });

  rate = rate / arrayDrama.length;

  console.log(rate);
  return rate;
}

// Order by time duration, in growing order

// How many movies did STEVEN SPIELBERG

// Order by title and print the first 20 titles

// Best yearly rate average
