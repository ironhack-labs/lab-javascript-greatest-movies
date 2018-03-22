/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  return moviesArray.map(function(elem) {
    var hours = 0;
    var minutes = 0;
    if (elem.duration.indexOf("h") !== -1) {
      hours = parseInt(elem.duration[0], 10) * 60;
    }
    if (elem.duration.indexOf("min") !== -1) {
      minutes = parseInt(
        elem.duration.substring(
          elem.duration.length - 5,
          elem.duration.length - 3
        ),
        10
      );
    }
    return Object.assign({}, elem, { duration: hours + minutes });
  });
}
// Get the average of all rates with 2 decimals

function ratesAverage(moviesArray) {
  var sum = moviesArray.reduce(function(sum, movie) {
    return sum + parseFloat(movie.rate);
  }, 0);
  var average = (sum / moviesArray.length).toFixed(2);
  return parseFloat(average);
}

// Get the average of Drama Movies

function dramaMoviesRate(moviesArray) {
  dramaMovies = moviesArray.filter(function(movie) {
    return movie.genre.includes("Drama");
  });

  if (dramaMovies.length === 0 || dramaMovies.rate === "") {
    return undefined;
  } else {
    console.log(ratesAverage(dramaMovies));
    return ratesAverage(dramaMovies);
  }
}

var rates = movies.map(function(movie) {
  return movie.rate;
});

// Order by time duration, in growing order
function orderByDuration(moviesArray) {
  moviesArray.sort(function(a, b) {
    if (a.duration === b.duration) {
      if (a.title > b.title) {
        return 1;
      }
    }
    return a.duration - b.duration;
  });
  return moviesArray;
}

orderByDuration(movies);

// How many movies did STEVEN SPIELBERG
function howManyMovies(moviesArray) {
  moviesArray = moviesArray.filter(function(movie) {
    return movie.genre.includes("Drama");
  });
  moviesArray = moviesArray.filter(function(movie) {
    return movie.director.includes("Spielberg");
  });
  if (moviesArray.length === 0) {
    return;
  } else {
    return "Steven Spielberg directed " + moviesArray.length + " drama movies!";
  }
}
// Order by title and print the first 20 titles

// Best yearly rate average
