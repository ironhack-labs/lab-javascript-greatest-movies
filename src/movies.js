// The `movies` array from the file `src/data.js`.
// console.log('movies: ', movies);

const movies = require('./data');

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(arr) {
  let allDirectors = arr.map((movies) => {
    return movies.director;
  });
  return allDirectors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(arr) {
  let howMany = arr.filter((movies) => {
    return (
      movies.genre.includes('Drama') && movies.director === 'Steven Spielberg'
    );
  });
  return howMany.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(arr) {
  if (arr.length === 0) return 0;
  let averageScores = arr.reduce((acc, value) => {
    if (!value.score) {
      return acc;
    }
    return acc + value.score;
  }, 0);
  return Number((averageScores / arr.length).toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(arr) {
  if (arr.length === 0) return 0;
  let averageDrama = arr.filter((movies) => {
    return movies.genre.includes('Drama');
  });

  return scoresAverage(averageDrama);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arr) {
  let byYear = arr.map((movie) => {
    return movie;
  });
  byYear.sort((a, b) => {
    if (a.year < b.year) return -1;
    if (a.year > b.year) return 1;
    if (a.year === b.year) return a.title.localeCompare(b.title);
  });
  return byYear;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arr) {
  const alphabeticOrder = arr.map((movie) => {
    return movie.title;
  });
  alphabeticOrder.sort((a, b) => {
    return a.localeCompare(b);
  });
  const top20 = alphabeticOrder.splice(0, 20);
  return top20;
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
