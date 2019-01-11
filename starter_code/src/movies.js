/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes

// Get the average of all rates with 2 decimal

function ratesAverage(movies) {
  var total = movies.reduce(function(sum, oneMovie) {
    return sum + Number(oneMovie.rate);
  }, 0);
  return Number((total / movies.length).toFixed(2));
}

// Get the average of Drama Movies
function dramaMoviesRate(movies) {
  var drama = movies.filter(function(oneDrama) {
    return oneDrama.genre.indexOf("Drama") > -1;
  });
  if (drama.length === 0) {
    return undefined;
  }
  return parseFloat(ratesAverage(drama), 2);
}

console.log(dramaMoviesRate(movies));

// Order by time duration, in growing order
function orderByDuration(movies) {
  // var integer = Number(movies.year);

  var sorted = movies.sort(function(itemA, itemB) {
    console.log(itemA.year);

    var firstItem = Number(itemA.year);
    var secondItem = Number(itemB.year);

    if (firstItem < secondItem) {
      return -1;
    } else {
      return 1;
    }
  });
  return sorted;
}

console.log(orderByDuration(movies));

// How many movies did STEVEN SPIELBERG
function Howmanymovies() {}

// Order by title and print the first 20 titles
function orderAlphabetically() {}

// Best yearly rate average
function bestYearAvg() {}
