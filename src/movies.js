const db = require('./data.js');

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(moviesArr) {
  return moviesArr.map(movie => movie.director);
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArr) {  
  return (moviesArr.filter(movie => movie.genre.includes('Drama') && movie.director === 'Steven Spielberg')).length;  
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArr) {
  // should return 0 if an empty array is passed
  if (!moviesArr.length) return 0;

  // should return average even if one of the movies does not have score

  const total = moviesArr.reduce (function (sum, movie) {
    if (!movie.score) {
      movie.score = 0;
    }
    return sum + movie.score;
  }, 0);
  const avg = Math.round((total/moviesArr.length) * 100) / 100;
  return avg;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArr) {
  const dramas = moviesArr.filter(movie => movie.genre.includes('Drama'));
  if (!dramas.length) {
    return 0;
  }
  const dramasScore = dramas.reduce((sum, movie) => {
    return sum + movie.score;
  }, 0);
  const avg = Math.round((dramasScore / dramas.length) * 100) / 100;
  return avg;  
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArr) {
  // should return a new array
  if (!moviesArr.length) return [];
  
  // every other case
  return moviesArr.sort((a, b) => a.year > b.year ? 1 : -1);  
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArr) {
  return (moviesArr.map(movie => movie.title)).sort().slice(0, 20);
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
    bestYearAvg,
  };
}
