// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  const directors = movies.map((movie) => movie.director);
  return directors.filter((director, i) => !directors.includes(director, i + 1))
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  return movies.filter(movie => movie.director === "Steven Spielberg" && movie.genre.includes('Drama')).length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  if (movies.length <= 0) return 0;

  const sumScores = movies.reduce((acc, movie) => {
    if (movie.score) return acc + movie.score;
    else return acc + 0;
  }, 0);

  return Number((sumScores / movies.length).toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  if (movies.length <= 0) return 0;

  const dramaMovies = movies.filter((eachMovie) =>
    eachMovie.genre.includes('Drama')
  );

  if (dramaMovies.length <= 0) return 0;

  const totalScore = dramaMovies.reduce((acc, movie) => {
    if (movie.score) return acc + movie.score;
    else {
      return acc + 0;
    }
  }, 0);

  return Number((totalScore / dramaMovies.length).toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
    const moviesCopy = [...movies];
    
    return moviesCopy.reverse();
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  const moviesNewList = [...movies];
  const moviesNewListOrder = moviesNewList.filter((movie, i, moviesNewList) => {
    return i < 20;
  });

  return moviesNewListOrder.map((movie) => movie.title);
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
    bestYearAvg,
  };
}
