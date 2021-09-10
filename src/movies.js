// Iteration 1: All directors? - Get the array of all directors.

const movies = require('./data');

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
<<<<<<< HEAD
// Iteration 1: All directors? - Get the array of all directors.

const movies = require('./data');

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
=======
>>>>>>> bdfeffa9cce77c1b6c9a7bd9e50300d27c783e8e
function getAllDirectors(movies) {
  return movies.map((movie) => {
    return movie.director;
  });
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
<<<<<<< HEAD
function howManyMovies(movies) {
  return movies.filter((movie) => {
=======
function howManyMovies(array) {
  return array.filter((movie) => {
>>>>>>> bdfeffa9cce77c1b6c9a7bd9e50300d27c783e8e
    if (
      movie.director === 'Steven Spielberg' &&
      movie.genre.includes('Drama')
    ) {
      return true;
    }
  }).length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
// function scoresAverage(movies) {
//   const moviesScored =
//     movies.reduce((acc, el) => {
//       return acc + el.score
//     }, 0) / movies.length;
//   return moviesScored;
// }
// function roundto2Decimals(num) {
//   return Math.round(scoresAverage() * 100) / 100;
// }
function scoresAverage(movie) {
  if (movie.length === 0) {
    return 0;
  }

<<<<<<< HEAD
  const moviesScored = movie.reduce((acc, movie) => {
    if (movie.score) {
      return acc + movie.score;
=======
  const moviesScored = movie.reduce((acc, elem) => {
    if (elem.score) {
      return acc + elem.score;
>>>>>>> bdfeffa9cce77c1b6c9a7bd9e50300d27c783e8e
    } else {
      return acc;
    }
  }, 0);
  return roundto2Decimals(moviesScored / movie.length);
}
function roundto2Decimals(twoDec) {
  return Math.round(twoDec * 100) / 100;
}

// Iteration 4: Drama movies - Get the average of Drama Movies

<<<<<<< HEAD
function dramaMoviesScore(movies) {
  const dramaScores = movies.filter((movie) => {
=======
function dramaMoviesScore(array) {
  const dramaScores = array.filter((movie) => {
>>>>>>> bdfeffa9cce77c1b6c9a7bd9e50300d27c783e8e
    if (movie.genre.includes('Drama')) {
      return true;
    }
  });
  if (!dramaScores.length) {
    return 0;
  }
<<<<<<< HEAD
  const avrDramaScore = dramaScores.reduce((acc, drama) => {
    if (drama.score) {
      return acc + drama.score;
=======
  const avrDramaScore = dramaScores.reduce((acc, elem) => {
    if (elem.score) {
      return acc + elem.score;
>>>>>>> bdfeffa9cce77c1b6c9a7bd9e50300d27c783e8e
    } else {
      return acc;
    }
  }, 0);
  return roundto2Decimals(avrDramaScore / dramaScores.length);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
<<<<<<< HEAD
function orderByYear(movies) {
  const orderedYear = movies.slice().sort((a, b) => {
=======
function orderByYear(ordered) {
  const orderedYear = ordered.slice().sort((a, b) => {
>>>>>>> bdfeffa9cce77c1b6c9a7bd9e50300d27c783e8e
    if (a.year === b.year) {
      return a.title.localeCompare(b.title);
    }
    return a.year - b.year;
  });
  return orderedYear;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

<<<<<<< HEAD
function orderAlphabetically(movies) {
  const sortedAlphabetically = movies
=======
function orderAlphabetically(movieAlpha) {
  const sortedAlphabetically = movieAlpha
>>>>>>> bdfeffa9cce77c1b6c9a7bd9e50300d27c783e8e
    .slice()
    .sort((title1, title2) => {
      return title1.title.localeCompare(title2.title); //compare strings
    })
    .slice(0, 20);
<<<<<<< HEAD
  const eachMovie20 = sortedAlphabetically.map((movie) => {
    return movie.title;
=======
  const eachMovie20 = sortedAlphabetically.map((element) => {
    return element.title;
>>>>>>> bdfeffa9cce77c1b6c9a7bd9e50300d27c783e8e
  });
  return eachMovie20;
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
