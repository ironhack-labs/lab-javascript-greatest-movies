// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.

const movies = require("./data");

// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  const directors = moviesArray.map(function (element) {
    return element.director;
  })
  return directors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  const spielbiergMovies = moviesArray.filter(function (element) {
    return element.director === 'Steven Spielberg';
  })

  const dramaMovies = spielbiergMovies.filter(function (element) {
    return element.genre.includes("Drama");
  })
  return dramaMovies.length;
}


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  }
  const sum = moviesArray.filter((current) => current.score >= 0).reduce(function (accumulator, current) {
    return accumulator + current.score;
  }, 0)
  const average = (Math.round((sum / moviesArray.length) * 100) / 100);
  return average;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  }
  const drama = moviesArray.filter(function (element) {
    return element.genre.includes("Drama");
  })
  if (drama.length === 0) {
    return 0;
  }
  const total = drama.filter((current) => current.score >= 0).reduce(function (accumulator, current) {
    return accumulator + current.score;
  }, 0)
  const average = (Math.round((total / drama.length) * 100) / 100);
  return average;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) { }

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) { }

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) { }

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) { }



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
