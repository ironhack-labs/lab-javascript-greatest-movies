// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(arr) {
  const pickDirector = arr.map((x) => x.director);
  return pickDirector;
}
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(arr) {
  const sortedMovie = arr.filter((movie) => {
    if (
      movie.director === 'Steven Spielberg' &&
      movie.genre.indexOf('Drama') > -1
    ) {
      return true;
    }
  });
  return sortedMovie.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(arr) {
  const sumScore = arr.reduce((prevVal, curVal) => {
    return prevVal + curVal.score;
  }, 0);

  if (arr.length === 0) {
    return 0;
  }

  let averageScore = sumScore / arr.length;
  let totalScore = Math.round(averageScore * 100) / 100;
  return totalScore;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(arr) {
  const sortedMovie = arr.filter((movie) => {
    if (movie.genre.indexOf('Drama') > -1) {
      return true;
    }
  });

  const sumScore = sortedMovie.reduce((prevVal, curVal) => {
    return prevVal + curVal.score;
  }, 0);
  let averageScore = sumScore / sortedMovie.length;
  let totalScore = Math.round(averageScore * 100) / 100;

  if (sortedMovie.length === 0) {
    return 0;
  }

  return totalScore;
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
    bestYearAvg,
  };
}
