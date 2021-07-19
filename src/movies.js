const movies = require('./data');

function round2Decimals(num) {
  return Math.round(num * 100) / 100;
}

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(movies) {
  const mapped = movies.map((element) => {
    return element.director;
  });
  return mapped;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  const numberOfMovies = movies.filter((element, index, arr) => {
    if (
      element.director === 'Steven Spielberg' &&
      element.genre.includes('Drama')
    ) {
      return true;
    }
  });
  return numberOfMovies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  if (movies.length === 0) {
    return 0;
  }
  const scoreOfMovies =
    movies.reduce((accumulator, element, index, arr) => {
      if (element.score) {
        return accumulator + element.score;
      } else {
        return accumulator;
      }
    }, 0) / movies.length;

  return round2Decimals(scoreOfMovies);
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  const averageDramaMovies = movies.reduce(
    (accumulator, element, index, arr) => {
      if (element.genre.includes('Drama')) {
        return accumulator + element.score;
      } else {
        return accumulator;
      }
    },
    0
  );

  const dramaMovies = movies.filter((element, index, arr) => {
    if (element.genre.includes('Drama')) {
      return element.genre;
    }
  });

  if (dramaMovies.length <= 0) {
    return 0;
  }

  return round2Decimals(averageDramaMovies / dramaMovies.length);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  const order = movies.slice().sort((a, b) => {
    if (a.year !== b.year) {
      return a.year - b.year;
    } else if (a.year === b.year) {
      return a.title.localeCompare(b.title);
    }
  });
  return order;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  if (movies.length < 20) {
    const order = movies.filter((element, index, arr) => {
      return element.title;
    });

    return order.toString();
  }
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
