/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes

// Get the average of all rates with 2 decimals

function ratesAverage(array) {
  var averageRate = array.reduce(function(sum, oneMovie) {
    var totalRate = sum + parseInt(oneMovie.rate);

    return totalRate;
  }, 0);

  var stringResult = (averageRate / array.length).toFixed(2);
  return parseFloat(stringResult);
}

console.log(ratesAverage(movies));

// Get the average of Drama Movies

var dramaMovies = movies.filter(function(oneMovie) {
  if (oneMovie.genre.indexOf("Drama") >= 0) {
    return oneMovie;
  }
});

function dramaMoviesRate(array) {
  var dramaMovies = array.filter(function(oneMovie) {
    return oneMovie.genre.indexOf("Drama") >= 0;
  });
  return ratesAverage(dramaMovies);
}

// Order by time duration, in growing order

function orderByDuration(array) {
  array.sort(function(film1, film2) {
    if (film1.duration < film2.duration) {
      return -1;
    } else if (film1.duration > film2.duration) {
      return 1;
    } else
      array.sort(function(film1, film2) {
        if (film1.title < film2.title) {
          return -1;
        } else if (film1.title > film2.title) {
          return 1;
        }
      });
  });
  return array;
}

// How many movies did STEVEN SPIELBERG

function howManyMovies(array) {
  var dramaMovies = array.filter(function(oneMovie) {
    if (oneMovie.genre.indexOf("Drama") >= 0) {
      return oneMovie;
    }
  });
  var spielbergMovies = dramaMovies.filter(function(oneMovie) {
    return oneMovie.director === "Steven Spielberg";
  });
  return (
    "Steven Spielberg directed " + spielbergMovies.length + " drama movies!"
  );
}
// Order by title and print the first 20 titles

// Best yearly rate average
