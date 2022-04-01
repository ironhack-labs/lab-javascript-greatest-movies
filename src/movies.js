// The `movies` array from the file `src/data.js`.
//console.log('movies: ', movies);

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

let directors = [];
function getAllDirectors(moviesArr) {
  let directors = moviesArr.map((movie) => {
    return movie.director;
  });
  return directors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
let spielbergDramaFilms = [];
function howManyMovies(moviesArr) {
  let spielbergDramaFilms = moviesArr.filter(function (movie) {
    if (
      movie.director === 'Steven Spielberg' &&
      movie.genre.includes('Drama')
    ) {
      return true;
    } else {
      return false;
    }
  });

  return spielbergDramaFilms.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals

function scoresAverage(moviesArr) {
  let averageOfTwoDecimals = moviesArr.reduce(function (
    accumulator,
    currentValue
  ) {
    return accumulator + currentValue.score;
  });
  let averageResult = averageOfTwoDecimals / moviesArr.length;
  let result = averageResult;
  return result;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArr) {
  let dramaFilms = moviesArr.filter(function (movie) {
    if (movie.genre.includes('Drama')) {
      return true;
    } else {
      return false;
    }
  });
  let dramaAverage = dramaFilms.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue.score;
  });
  let average = dramaAverage / dramaFilms
  return average
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(moviesArr) {
  let orderedByYear = []
  orderedByYear = moviesArr.sort();
  return orderedByYear;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArr) {
  let orderedByYearFirst20 = []
  orderedByYearFirst20 = moviesArr.sort();
  return orderedByYearFirst20;
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
