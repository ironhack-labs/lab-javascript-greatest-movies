// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(array) {
  let listOfDirectors = array.map((movie) => {
    return movie.director;
  });
  return listOfDirectors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(array) {
  let SpielbergDramas = array.filter(
    (movie) =>
      movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')
  );
  return SpielbergDramas.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(array) {
  let averageScore = array.reduce((sum, movie) => {
    if (movie.hasOwnProperty('score')) {
      return sum + Math.round((movie.score / array.length) * 100) / 100;
    }
    return sum;
  }, 0);

  return averageScore;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(array) {
  let listOfDramas = array.filter((movie) => movie.genre.includes('Drama'));

  let averageDramaScore = listOfDramas.reduce(
    (acumulator, currentValue) =>
      acumulator + Math.round((currentValue.score / array.length) * 100) / 100,
    0
  );

  return averageDramaScore;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(array) {
  let orderMoviesByYear = Object.assign([], array);

  orderMoviesByYear.sort((a, b) => {
    if (a.year === b.year) {
      return a.title.toLowerCase().localeCompare(b.title.toLowerCase());
    } else {
      return a.year - b.year;
    }
  });
  return orderMoviesByYear;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(array) {
  let getTitles = array.map((movie) => movie.title);

  getTitles.sort((a, b) => {
    return a.toLowerCase().localeCompare(b.toLowerCase());
  });

  if (getTitles.length > 20) {
    return getTitles.slice(0, 20);
  } else return getTitles;
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
