/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes

// Get the average of all rates with 2 decimals

var ratesAverage = function(array) {
  var sum = array.reduce(function(acc, movie) {
    return acc + Number(movie.rate);
  }, 0);

  return sum / array.length;
};

// Get only Drama Movies

var dramaMovies = function(array) {
  return array.filter(function(movie) {
    return movie.genre.indexOf("Drama") > -1;
  });
};

// Get the average of Drama Movies

var dramaMoviesRate = function(array) {
  var dramaArray = dramaMovies(array);

  if (dramaArray.length) {
    var average = ratesAverage(dramaArray);
    var result = Math.round(average * 100) / 100;

    return result;
  } else {
    return undefined;
  }
};

// Order by time duration, in growing order

// How many movies did STEVEN SPIELBERG

var howManyMovies = function(array) {
  if (array.length === 0) {
    return undefined;
  }

  var dramaMoviesArray = dramaMovies(array);
  var spielbergDramas = dramaMoviesArray.filter(function(item) {
    return item.director === "Steven Spielberg";
  });

  return (
    "Steven Spielberg directed " + spielbergDramas.length + " drama movies!"
  );
};

// Order by title and print the first 20 titles

// Best yearly rate average
