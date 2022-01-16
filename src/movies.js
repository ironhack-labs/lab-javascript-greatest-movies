// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.

const movies = require('./data');

// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  const directors = movies.map(function (movie) {
    return movie.director;
  });
  return directors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  let count = 0;
  const movieNum = movies.filter(function (movie) {
    if (
      movie.genre.includes('Drama') &&
      movie.director === 'Steven Spielberg'
    ) {
      count++;
    }
  });
  return count;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  if (movies.length === 0) {
    return 0;
  }
  const avg = movies.reduce(function (movie, avg) {
    return movie + avg.score;
  }, 0);

  return +(avg / movies.length).toFixed(2);
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  const movieScore = movies.filter(function (movie) {
    if (movie.genre.includes('Drama')) {
      return true;
    }
  });

  return scoresAverage(movieScore);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  const movieYear = movies.sort(function (a, b) {
    if (a.year === b.year) {
      if (a.title < b.title) return -1;
    } else {
      return a.year - b.year;
    }
  });
  const newArray = movieYear.map(function (movie) {
    return movie;
  });
  return newArray;
}

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
