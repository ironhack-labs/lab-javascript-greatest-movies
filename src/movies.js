// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(moviesArray) {
  return moviesArray.map((movies) => movies.director);
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  if (!movies.length) return 0;
  return movies
    .filter((movie) => movie.director === 'Steven Spielberg')
    .filter((movie) => movie.genre.includes('Drama')).length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (!moviesArray.length) return 0;

  const sumatorio = moviesArray.reduce((suma, movie) => {
    return suma + (movie.score || 0);
  }, 0);
  return parseFloat((sumatorio / moviesArray.length).toFixed(2));
}
// 2 + 5 * 3
// (2 + 5)*3
// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  if (!moviesArray.length) return 0;

  const dramaMovies = moviesArray.filter(movie => movie.genre.includes('Drama'));

  if (!dramaMovies.length) return 0;

  const sumatorioDramaScore = dramaMovies.reduce((suma, movie) => {
    return suma + movie.score || 0;
  }, 0);
  const averageScore = parseFloat((sumatorioDramaScore / dramaMovies.length).toFixed(2));

  return averageScore;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const moviesCopy = structuredClone(moviesArray);

  const moviesOrderYear = moviesCopy.sort((a, b) => {
    if (a.year !== b.year) {
      return a.year - b.year;
    } else {
      return a.title.localeCompare(b.title);
    }
  });
  return moviesCopy;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const moviesOrderAlphabetic = moviesArray
    .map((movie) => movie.title)
    .toSorted((a, b) => a.localeCompare(b))
    .slice(0, 20);

  return moviesOrderAlphabetic;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
