/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 


// Get the average of all rates with 2 decimals 
var ratesSum = movies.reduce(function (sum, avg) {
  avg = parseFloat(avg.rate);
  return sum + avg;
}, 0);

console.log(ratesSum);

var ratesAverage = ratesSum / movies.length;

console.log(ratesAverage.toFixed(2));

// Get the average of Drama Movies
var dramaFilter = movies.filter(function (oneDrama) {
  return oneDrama.genre.includes('Drama');
});

var sumMoviesRate = dramaFilter.reduce(function (sum, numFilm) {
  return sum + parseFloat(numFilm.rate);
}, 0);

var dramaMoviesRate = sumMoviesRate / dramaFilter.length;

console.log(parseFloat(dramaMoviesRate).toFixed(2));

// Order by time duration, in growing order
var titleSort = movies.sort(function (titleOne, titleTwo) {
  if (titleOne.title > titleTwo.title) {
    return +1;
  }
  else {
    return -1;
  }
});

console.log(titleSort);

// How many movies did STEVEN SPIELBERG
var howManyMovies = movies.filter(function(spielDramaFilter) {
  return spielDramaFilter.director === 'Steven Spielbierg' && spielDramaFilter.genre.includes('Drama');
});

console.log(howManyMovies);

// Order by title and print the first 20 titles
var titleSort = movies.sort(function (titleOne, titleTwo) {
  if (titleOne.title > titleTwo.title) {
    return +1;
  }
  else {
    return -1;
  }
});

console.log(titleSort.slice(0, 19));

// Best yearly rate average
