// The `movies` array from the file `src/data.js`.
//console.log('movies: ', movies);
const movies = require('./data.js');

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(allMovies) {
  return allMovies.map((movie) => movie.director);
}
getAllDirectors(movies);

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(allMovies) {
  const spielbergMovies = allMovies.filter(
    (movie) =>
      movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')
  );
  return spielbergMovies.length;
}

howManyMovies(movies);

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(allMovies) {
  if (allMovies.length === 0) {
    return 0;
  }
  const allScores = allMovies.reduce((previousDrama, nextDrama) => {
    if (typeof nextDrama.score !== 'number') {
      return previousDrama;
    } else {
      return previousDrama + nextDrama.score;
    }
  }, 0);

  return Number((allScores / allMovies.length).toFixed(2));
}
scoresAverage(movies);

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(allMovies) {
  const scoresDrama = allMovies.filter((movie) =>
    movie.genre.includes('Drama')
  );
  if (scoresDrama.length === 0) {
    return 0;
  }
  const avgDramas = scoresDrama.reduce((previousDrama, nextDrama) => {
      return previousDrama + nextDrama.score;
    }, 0);

  return Number.parseFloat((avgDramas / scoresDrama.length).toFixed(2));
}
dramaMoviesScore(movies);

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(allMovies) {
  const moviesSorted = allMovies.slice(0).sort((initialMovie, nextMovie) => {
    if (initialMovie.year > nextMovie.year) {
      return 1;
    } else if (initialMovie.year < nextMovie.year) {
      return -1;
    } else if (initialMovie.title > nextMovie.title) {
      return 1;
    } else {
      return -1;
    }
  });
  return moviesSorted;
}

orderByYear(movies);

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(allMovies) {
  const moviesAlphabetically = allMovies.map((movie) => movie.title);
  
  moviesAlphabetically.sort();
  
  const twentyMoviesAlphabetically = moviesAlphabetically.slice(0, 20);

  return twentyMoviesAlphabetically;
}

orderAlphabetically(movies);

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
