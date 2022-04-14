// The `movies` array from the file `src/data.js`.

const movies = require('./data.js');

//console.log('movies: ', movies);

//

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(array) {
  let directors = array.map((element) => element.director);
  return directors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(arr) {
  let drama = arr.filter(
    (element) =>
      element.genre.includes('Drama') && element.director === 'Steven Spielberg'
  );

  return drama.length;
}

console.log(howManyMovies(movies));

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(arr) {
  if (arr.length === 0) {
    return 0;
  }

  let avg = arr.reduce(function (acc, value) {
    if (!value.score) {
      return acc;
    }

    return acc + value.score;
  }, 0);

  return Number((avg / arr.length).toFixed(2));
}

console.log(scoresAverage(movies));

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesList) {
  let dramaMovies = moviesList.filter((movie) => movie.genre.includes('Drama'));

  return scoresAverage(dramaMovies);
}

console.log(dramaMoviesScore(movies));

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  let orderYears = movies.sort(function (movieA, movieB) {
    if (movieA.year > movieB.year) return 1;
    if (movieA.year < movieB.year) return -1;
    if (movieA.year === movieB.year) {
      return movieA.title.localeCompare(movieB.title);
    }
  });
  // return orderYears.map(movie => {
  //   return {
  //     year: movie.year
  //   }
  // })

  return orderYears;
}

console.log(orderByYear(movies));

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  let orderAlph = movies.sort(function (movieA, movieB) {
    return movieA.title.localeCompare(movieB.title);
  });

  return orderAlph.map((movie) => movie.title).slice(0, 20);
}

console.log(orderAlphabetically(movies));

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
