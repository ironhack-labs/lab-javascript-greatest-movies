/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes
function turnHoursToMinutes(arr) {
  var newMovieDurationArray = arr.map(function(movie) {
    var newMovie = Object.assign({}, movie);
    var durationArray = newMovie.duration.split(" ");
    if (durationArray.length === 2) {
      var hours = durationArray[0].replace("h", "");
      hours = parseInt(hours) * 60;
      var minutes = durationArray[1].replace("min", "");
      minutes = parseInt(minutes);
      newMovie.duration = hours + minutes;
    } else if (durationArray[0].includes("h")) {
      var hours = durationArray[0].replace("h", "");
      hours = parseInt(hours) * 60;
      newMovie.duration = hours;
    } else {
      var minutes = durationArray[0].replace("min", "");
      minutes = parseInt(minutes);
      newMovie.duration = minutes;
    }
    return newMovie;
  });
  return newMovieDurationArray;
}

// Get the average of all rates with 2 decimals
function ratesAverage(arr) {
  var allRates = arr.reduce(function(acc, elem) {
    return (acc += Number(elem.rate));
  }, 0);
  return parseFloat((allRates / arr.length).toFixed(2));
}

// Get the average of Drama Movies
function dramaMoviesRate(arr) {
  var dramaMovies = arr.filter(function(movie) {
    return movie.genre.indexOf("Drama") !== -1; //checking if a specific string exists within another string
  });

  if (dramaMovies.length !== 0) {
    return ratesAverage(dramaMovies);
  } else {
    return undefined;
  }
}

// Order by time duration, in growing order
function orderByDuration(arr) {
    return arr.sort(function(a, b) {
        if (a.duration > b.duration) {
            return 1;
        } else if (a.duration < b.duration) {
            return -1;
        } else {
            return a.title.localeCompare(b.title);
        }
    });
}
// How many movies id STEVEN SPIELBERG

// Order by title and print the first 20 titles

// Best yearly rate average
