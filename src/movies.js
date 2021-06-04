// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.

const movies = require('./data');

// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  let directors = movies.map((i) => i.director);
  return directors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(array) {
  if (array.length === 0) return 0;

  let spielbergOnly = array.filter((i) => i.director === 'Steven Spielberg');

  let final = spielbergOnly.filter((i) => i.genre.includes('Drama'));
  return final.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(array) {
  if (array.length === 0) return 0;
  let num = array
    .map((i) => {
      if (!i.score) return 0;
      return i.score;
    })
    .reduce((a, b) => a + b);
  let averageScore = num / array.length;
  return parseFloat(averageScore.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(array) {
  let dramaOnly = array.filter((i) => i.genre.includes('Drama'));
  return scoresAverage(dramaOnly);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arr) {
  let year = arr
    .map(function (i) {
      return {
        title: i.title,
        year: i.year
      };
    })
    .sort((a, b) => a.year - b.year || a.title.localeCompare(b.title));
  return year;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(array) {
  let titles = array.map((i) => i.title).sort();
  let sliced = titles.slice(0, 20);
  return sliced;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg
  };
}
