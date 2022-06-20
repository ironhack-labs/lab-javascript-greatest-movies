// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

const movies = require('./data');

function getAllDirectors(moviesArray) {
  let result = moviesArray.map((element) => element.director);
  return result;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  let spielbergOnly = moviesArray.filter(
    (movies) => movies.director === 'Steven Spielberg'
  );
  let dramasOnly = spielbergOnly.filter(
    (spielbergMovies) => spielbergMovies.genre.includes('Drama') === true
  );
  return dramasOnly.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals

function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  }
  let totalScore = moviesArray.reduce((accumulator, currentValue) => {
    if (currentValue.score === '' || currentValue.score === undefined) {
      currentValue.score = 0;
    }
    return accumulator + currentValue.score;
  }, 0);
  let averageScore = totalScore / moviesArray.length;
  return Number(averageScore.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesScore(moviesArray) {
  let onlyDramas = moviesArray.filter((dramaMovies) =>
    dramaMovies.genre.includes('Drama')
  );
  let totalDramaScore = onlyDramas.reduce((accum, curr) => {
    if (curr.score === '' || curr.score === undefined) {
      currentValue.score = 0;
    }
    return accum + curr.score;
  }, 0);
  let avgDramaScore = totalDramaScore / onlyDramas.length;
  if (onlyDramas.length === 0) {
    return 0;
  }
  return Number(avgDramaScore.toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}

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
