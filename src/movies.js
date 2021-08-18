// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  const moviesDirectors = movies.map((movie) => movie.director);

  return moviesDirectors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(drama) {
  const dramaMovies = drama.filter((movie) => {
    return (
      movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')
    );
  });
  const qytDramaMovies = dramaMovies.length;
  return qytDramaMovies;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(scores) {
  if (!scores.length) return 0;

  const totalScores = scores.reduce(function (acc, current) {
    if (!current.score) {
      return acc;
    } else {
      return acc + current.score;
    }
  }, 0);

  const averageScore = totalScores / scores.length;

  return Math.round(averageScore * 100) / 100;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(drama) {
  const dramaMovies = drama.filter((movie) => {
    return movie.genre.includes('Drama');
  });

  if (!dramaMovies.length) return 0;

  const totalScores = dramaMovies.reduce(function (acc, current) {
    if (!current.score) {
      return acc;
    } else {
      return acc + current.score;
    }
  }, 0);

  const averageScore = totalScores / dramaMovies.length;

  return Math.round(averageScore * 100) / 100;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear() {}

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
