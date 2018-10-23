/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes
function stringToMinutes(str) {
  var arr = str.split(" ");
  if (arr.length === 2) {
    var hours = parseInt(arr[0]);
    var minutes = parseInt(arr[1]);
  } else if (str.includes("m")) {
    var minutes = parseInt(arr[0]);
    var hours = 0;
  } else {
    var hours = parseInt(arr[0]);
    var minutes = 0;
  }
  return hours * 60 + minutes;
}

function turnHoursToMinutes(array) {
  var newMovie = [];
  var resultDuration = array.map(function(oneMovie) {
    var newArr = {
      title: oneMovie.title,
      year: oneMovie.year,
      director: oneMovie.director,
      duration: stringToMinutes(oneMovie.duration),
      genre: oneMovie.genre,
      rate: oneMovie.rate
    };

    newMovie.push(newArr);
  });
  return newMovie;
}

turnHoursToMinutes(movies);

// Get the average of all rates with 2 decimals
function ratesAverage(array) {
  if (array.length === 0) {
    return undefined;
  }
  return Number(
    (
      array.reduce(function(sum, rating) {
        return (sum += Number(rating.rate));
      }, 0) / array.length
    ).toFixed(2)
  );
}

ratesAverage(movies);

// Get the average of Drama Movies

function dramaMoviesRate(array) {
  var drama = array.filter(function(movie) {
    return movie.genre.includes("Drama");
  });
  if (drama.length > 0) {
    return ratesAverage(drama);
  }
}

dramaMoviesRate(movies);

// Order by time duration, in growing order

function orderByDuration(array) {
  return array.sort(function(a, b) {
    if (Number(a.year) < Number(b.year)) {
      return -1;
    } else {
      return 1;
    }
  });
}

orderByDuration(newMovie);

// How many movies did STEVEN SPIELBERG
function howManyMovies(array) {
  if (array.length === 0) {
    return undefined;
  }
  var stevenSpielberg = array.filter(function(item) {
    return item.director === "Steven Spielberg" && item.genre.includes("Drama");
  });
  return (
    "Steven Spielberg directed " + stevenSpielberg.length + " drama movies!"
  );
}

howManyMovies(movies);

// Order by title and print the first 20 titles

function orderAlphabetically(array) {
  var titleOnly = array.map(function(oneTitle) {
    return oneTitle.title;
  });
  titleOnly.sort(function(a, b) {
    if (a.toLowerCase() < b.toLowerCase()) {
      return -1;
    } else {
      return 1;
    }
  });
  return titleOnly.splice(0, 20);
}
orderAlphabetically(movies);

// Best yearly rate average
