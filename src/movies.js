// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  const mappedArray = movies.map((movie) => movie.director);
  return mappedArray;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  if (movies.length === 0) return 0;
  const moviesSteven = movies.filter(
    (movie) =>
      movie.director == 'Steven Spielberg' && movie.genre.includes('Drama')
  );

  if (moviesSteven.length === 0) return 0;
  return moviesSteven.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  if (movies.length === 0) return 0;

  const totalSum = movies.reduce((sum, movie) => {
    if (typeof movie.score == 'number') {
      return sum + movie.score;
    } else {
      return sum;
    }
  }, 0);

  let average = Math.round((totalSum / movies.length) * 100) / 100;
  return average;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  if (movies.length === 0) return 0;

  const moviesDrama = movies.filter((movie) => movie.genre.includes('Drama'));

  if (moviesDrama.length === 0) return 0;
  const calcSum = moviesDrama.reduce((sum, movie) => sum + movie.score, 0);

  let average = Math.round((calcSum / moviesDrama.length) * 100) / 100;
  return average;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  let sortedMovies = movies.sort((a, b) => {
    return a.year - b.year;
  });

  return sortedMovies;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically() {}

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
