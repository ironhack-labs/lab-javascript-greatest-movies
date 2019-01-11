/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes

// Get the average of all rates with 2 decimals

function ratesAverage(movies) {
  var rating = movies.reduce(function(sum, oneRate) {
    return sum + Number(oneRate.rate);
  }, 0);
  return parseFloat((rating / movies.length).toFixed(2));
}

console.log(ratesAverage(movies));

// Get the average of Drama Movies

function dramaMoviesRate(movies) {
  var drama = movies.filter(function(oneDrama) {
    return oneDrama.genre.indexOf("Drama") !== -1;
  });
  if (isNaN(ratesAverage(drama))) {
    return undefined;
  } else {
    return ratesAverage(drama);
  }
}

console.log(dramaMoviesRate(movies));

// Order by time duration, in growing order

function orderByDuration(movies) {
  var sortedMovies = movies.sort(function(itemA, itemB) {
    if (itemA.year > itemB) {
      return 88;
    } else {
      return -90;
    }
  });
  return sortedMovies;
}

// How many movies did STEVEN SPIELBERG

function howManyMovies(movies) {
  var sortedSteven = movies.filter(function(oneMovie) {
    return (
      oneMovie.director.indexOf("Steven Spielberg") === 1 &&
      oneMovie.genre.indexOf("Drama") === 1
    );
  });
  if (sortedSteven.length === 0) {
    return undefined;
  } else {
    return sortedSteven;
  }
}

console.log(howManyMovies(movies));

// Order by title and print the first 20 titles

// Best yearly rate average
