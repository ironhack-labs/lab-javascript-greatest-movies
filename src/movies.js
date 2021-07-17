// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(moviesArr) {
  return moviesArr.map((movie) => movie.director);
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArr) {
  return moviesArr.filter((movie) => {
    if (
      movie.director === 'Steven Spielberg' &&
      movie.genre.includes('Drama')
    ) {
      return true;
    }
  }).length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(avg) {
  if (!avg.length) {
    return 0;
  }
  const averageScore = avg.reduce((acc, el) => {
    if (el.score) {
      return acc + el.score;
    } else {
      return acc;
    }
  }, 0);
  return roundto2Decimals(averageScore / avg.length);
}

function roundto2Decimals(num) {
  return Math.round(num * 100) / 100;
}

// problem: take all scores, add together. The get average.

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(arr) {
  const dramaOnly = arr.filter((movie) => {
    if (movie.genre.includes('Drama')) {
      return true;
    }
  });

  if (!dramaOnly.length) {
    return 0;
  }
  const averageDramaScore = dramaOnly.reduce((acc, el) => {
    if (el.score) {
      return acc + el.score;
    } else {
      return acc;
    }
  }, 0);

  return roundto2Decimals(averageDramaScore / dramaOnly.length);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arr) {
  const sortedByYear = arr.slice().sort((movie1, movie2) => {
    if (movie1.year === movie2.year) {
      return movie1.title.localeCompare(movie2.title);
    }
    return movie1.year - movie2.year;
  });
  return sortedByYear;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arr) {
  const firstTwentyMovies = arr
    .slice()
    .sort((movie1, movie2) => {
      return movie1.title.localeCompare(movie2.title);
    })
    .slice(0, 20);
  const titles = firstTwentyMovies.map((el) => {
    return el.title;
  });
  return titles;
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
