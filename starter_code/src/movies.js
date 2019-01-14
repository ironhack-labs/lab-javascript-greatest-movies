/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
function turnHoursToMinutes(movies) {
  return movies.map(function (movie) {
      var totalMinutes;
      var hours = 0;
      var minutes = 0;
      var durationSplit = movie.duration.split(" ");
      if (durationSplit.length > 1) {
          hours = durationSplit[0].split("h")[0];
          minutes = durationSplit[1].split("min")[0];
      } else if (durationSplit.length === 1 && durationSplit[0].indexOf("h") > 0) {
          hours = durationSplit[0].split("h")[0];
      } else if (durationSplit.length === 1 && durationSplit[0].indexOf("h") < 0) {
          minutes = durationSplit[0].split("min")[0];
      }

      minutes = parseInt(minutes, 10);
      hours = parseInt(hours, 10);
      totalMinutes = hours * 60 + minutes;

      var movieClone = Object.assign({}, movie); // make a clone of the `movie` object
      movieClone.duration = totalMinutes;

      return movieClone;
  });
}

// Get the average of all rates with 2 decimals 
var ratesAverage = movies.map(function(movie) {
  var sum = movie.rate.reduce(function(acc, rt) {
    return acc + rt;
  };

  return (sum / movies.length);
})

// Get the average of Drama Movies
var dramaMoviesRate = movies.map(function(movie) {
  var auxArr = [];
  if (movie.genre.indexOf("Drama") !== -1) {
    var sum = movie.rate.reduce(function(acc, rate) {
      auxArr.push(rate);

      return acc + rate;
    })
  }

  return (acc + rate) / auxArr.length;
})

// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG

var spielbergFilms = movies.filter(function(movie) {
  return movie.director === "Steven Spielberg";
});

function(howManyMovies) {
  return spielbergFilms.length;
}

// Order by title and print the first 20 titles


// Best yearly rate average
