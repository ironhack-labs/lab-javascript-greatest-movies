// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

const movies = require('./data');

function getAllDirectors(arr) {
  const directors = arr.map((item) => {
    return item.director;
  });
  return directors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(arr) {
  const dramaSpielbergMovies = arr.reduce((acc, movie) => {
    if (
      movie.director === 'Steven Spielberg' &&
      movie.genre.includes('Drama')
    ) {
      return acc + 1;
    } else {
      return acc;
    }
  }, 0);
  return dramaSpielbergMovies;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(arr) {
  if (arr.length === 0) {
    return 0;
  }
  const averageScore = arr.reduce((acc, movie) => {
    if (!movie.score) {
      return acc;
    }
    return acc + movie.score;
  }, 0);
  return Number.parseFloat((averageScore / arr.length).toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(arr) {
  const dramaMovies = arr.filter((movie) => {
    return movie.genre.includes('Drama');
  });
  if (!dramaMovies.length) {
    return 0;
  }
  const averageDramaScore = dramaMovies.reduce((acc, movie) => {
    return acc + movie.score;
  }, 0);
  return Number.parseFloat((averageDramaScore / dramaMovies.length).toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear() {}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically() {}

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
