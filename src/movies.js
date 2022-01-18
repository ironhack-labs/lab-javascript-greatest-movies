// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.

const movies = require('./data');

// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  const allDirector = movies.map((movie) => movie.director);
  return allDirector;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  const director = movies.filter(
    (movie) => movie.director === 'Steven Spielberg'
  );
  const moviesDrama = director.filter((movie) => movie.genre.includes('Drama'));
  return moviesDrama.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  const score = movies.map((movie) => movie.score || 0);
  // console.log(score);
  const sumScore = score.reduce((acc, score) => acc + score, 0);
  const totalSum = movies.length ? (sumScore / movies.length).toFixed(2) : 0;
  // console.log(totalSum);
  return Number(totalSum);
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  const arrDrama = movies.filter((movie) => movie.genre.includes('Drama'));
  return scoresAverage(arrDrama);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  const newArray = [...movies];
  const orderArray = newArray.sort((a, b) => {
    if (a.year > b.year) {
      return 1;
    } else if (a.year < b.year) {
      return -1;
    } else {
      if (a.title && b.title) {
        return a.title.toUpperCase().localeCompare(b.title.toUpperCase());
      } else {
        return 0;
      }
    }
  });
  return orderArray;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  const copyArr = [...movies];
  const orderArr = copyArr.sort((a, b) => {
    if (a.title < b.title) {
      return -1;
    }
    if (a.title > b.title) {
      return 1;
    }
    return 0;
  });

  const moviesTitle = orderArr.map((movies) => movies.title).slice(0, 20);
  return moviesTitle;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {
  const moviesDuration = movies.map((movie) => movie.duration);
  const arrNumberMovies = moviesDuration;

  return arrNumberMovies;
}

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
