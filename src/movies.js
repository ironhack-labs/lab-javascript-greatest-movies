// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArr) {
  let directors = moviesArr.map((movie) => {
    return movie.director;
  });
  return directors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(arr) {
  let drama = arr.filter((movie) => {
    if (
      movie.genre.includes('Drama') &&
      movie.director === 'Steven Spielberg'
    ) {
      return movie;
    }
  });
  return drama.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(arr) {
  if (arr.length === 0) {
    return 0;
  }
  let total =
    arr.reduce((acc, curr) => {
      if (curr.score !== '' && curr.score) {
        return (acc += curr.score);
      }
      return acc;
    }, 0) / arr.length;
  return parseFloat(total.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(arr) {
  let dramaMovies = arr.filter((movie) => {
    if (movie.genre.includes('Drama')) {
      return movie;
    }
  });
  return scoresAverage(dramaMovies);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arr) {
  let orderYear = arr
    .map((item) => item)
    .sort((year1, year2) => {
      if (year1.year === year2.year) {
        if (year1.title.toLowerCase() > year2.title.toLowerCase()) {
          return 1;
        } else {
          return -1;
        }
      }
      return year1.year - year2.year;
    });

  return orderYear;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arr) {
  let alphabet = arr
    .map((movie) => {
      return movie.title;
    })
    .sort((title1, title2) => {
      if (title1.toLowerCase() > title2.toLowerCase()) {
        return 1;
      } else {
        return -1;
      }
    })
    .slice(0, 20);
  return alphabet;
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
