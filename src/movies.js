// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.

const movies = require('./data');

// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  const directors = [...movies.map((director) => director.director)]; // [... xxxx ] - will select only unique values
  return directors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(arr) {
  const stevenSpielbergCount = arr.filter(
    (steven) =>
      steven.director === 'Steven Spielberg' && steven.genre.includes('Drama')
  );
  return stevenSpielbergCount.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(arr) {
  const avgScore = arr.reduce((accumulator, current) => {
    if (typeof current.score !== 'number' || current.score.length === 0) {
      return accumulator++;
    } else {
      return accumulator + current.score;
    }
  }, 0);
  if (arr.length === 0) {
    return 0;
  }
  return Math.round((avgScore / arr.length) * 1e2) / 1e2;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(arr) {
  let arrLength = arr.length;
  const avgScore = arr.reduce((accumulator, current) => {
    if (current.genre.includes('Drama')) {
      return accumulator + current.score;
    } else {
      arrLength--;
      return accumulator;
    }
  }, 0);
  if (arrLength !== 0) {
    return Math.round((avgScore / arrLength) * 1e2) / 1e2;
  } else {
    return 0;
  }
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(array) {
  const sorted = [...array].sort((a, b) => {
    if (a.year < b.year) return -1;
    if (a.year > b.year) return 1;
    if (a.title < b.title) return -1;
    if (a.title > b.title) return 1;
    if (a.year === b.year) return 0;
  });
  return sorted;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arr) {
  const titles = [...arr.map((title) => title.title)];
  const sorted = [...titles].sort();
  return sorted.slice(0, 20);
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
