const movies = require('./data.js');

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  return movies.map((movie) => {
    return movie.director;
  });
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  const dramaStevenSpielberg = movies.filter(
    (movie) =>
      movie.genre.includes('Drama') && movie.director === 'Steven Spielberg'
  );
  return dramaStevenSpielberg.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  if (movies.length === 0) {
    return 0;
  }
  const scores = movies.map((movie) => {
    if (typeof movie.score != 'number') {
      return 0;
    }
    return movie.score;
  });
  const totalScore = scores.reduce((previousValue, currentValue) => {
    return previousValue + currentValue;
  });
  const averageScore = totalScore / scores.length;
  return parseFloat(averageScore.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  let dramaMovies = movies.filter((movie) => {
    return movie.genre.includes('Drama');
  });
  if (dramaMovies.length === 0) {
    return 0;
  }
  const dramaScores = dramaMovies.reduce((a, movie) => {
    return a + movie.score;
  }, 0);
  return parseFloat((dramaScores / dramaMovies.length).toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  if (movies.length === 0) {
    return [];
  }
  const newMovies1 = movies.sort((a, b) => a.year - b.year);
  const newMovies2 = newMovies1.sort((a, b) => {
    if (a.year === b.year) {
      if (a.title < b.title) {
        return -1;
      }
      if (a.title > b.title) {
        return 1;
      }
    }
  });
  return newMovies2;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  let moviesCopy = movies;
  const movieTitles = moviesCopy.map((movie) => {
    return movie.title;
  });
  const movieTitlesAlphabetically = movieTitles.sort();
  if (movieTitlesAlphabetically.length < 20) {
    return movieTitlesAlphabetically;
  } else {
    return movieTitlesAlphabetically.slice(0, 20);
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
