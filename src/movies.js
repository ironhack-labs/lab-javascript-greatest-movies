const movies = require('./data');

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  return movies.map((m) => m.director);
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  return movies.filter(
    (m) => m.director === 'Steven Spielberg' && m.genre.includes('Drama')
  ).length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  if (movies.length === 0) {
    return 0;
  }
  return +(
    movies
      .filter((m) => m.score)
      .map((m) => m.score)
      .reduce((a, c) => a + c) / movies.length
  ).toFixed(2);
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  return scoresAverage(movies.filter((m) => m.genre.includes('Drama')));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  const arr = [...movies];
  return arr.sort((a, b) =>
    a.year === b.year ? a.title.localeCompare(b.title) : a.year - b.year
  );
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  const arr = [...movies];
  return arr
    .map((m) => m.title)
    .sort()
    .slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {
  const arr = JSON.parse(JSON.stringify(movies));
  for (let i = 0; i < arr.length; i++) {
    arr[i].duration = timeStringToMinutes(arr[i].duration);
  }
  return arr;
}

function timeStringToMinutes(str) {
  str = str.toString();
  let hrs = str.match(/(\d+)(?=h)/g);
  let mins = str.match(/(\d+)(?=min)/g);

  hrs = hrs ? +hrs[0] : 0;
  mins = mins ? +mins[0] : 0;

  return hrs * 60 + mins;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(movies) {
  if (movies.length === 0) {
    return null;
  }
  const moviesGroupByYear = {};
  for (let movie of movies) {
    if (moviesGroupByYear[movie.year] === undefined) {
      moviesGroupByYear[movie.year] = [movie];
    } else {
      moviesGroupByYear[movie.year].push(movie);
    }
  }

  const bestYear = Object.entries(moviesGroupByYear)
    .map((year) => {
      return { year: year[0], rating: scoresAverage(year[1]) };
    })
    .sort((a, b) =>
      a.rating === b.rating ? b.year - a.year : a.rating - b.rating
    )
    .pop();
  return `The best year was ${bestYear.year} with an average score of ${bestYear.rating}`;
}

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
