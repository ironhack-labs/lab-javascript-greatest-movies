// The `movies` array from the file `src/data.js`.
//console.log('movies: ', movies);

const movies = require('./data');

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

//******OK*****
/* function getAllDirectors(directorsNames) {
  const directors = []
  for (let i = 0; i < directorsNames.length; i++) {
    directors.push(directorsNames[i].director)
  }
  console.log(directors);
  return directors;
}
getAllDirectors(movies) */

//*********OK********
/* function getAllDirectors(allMovies) {
  const directors = [];
  for (let movie of allMovies) {
    directors.push(movie.director)
  }
  return directors;
}
getAllDirectors(movies) */

function getAllDirectors(allMovies) {
  return allMovies.map(function (movie) {
    return movie.director;
  });
}
getAllDirectors(movies);

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
/* function howManyMovies(allMovies) {
  if (allMovies.length === 0) {
    return 0;
  }
} */
function howManyMovies(allMovies) {
  let spielbergsCounter = 0;

  for (let movie of allMovies) {
    if (
      movie.director === 'Steven Spielberg' &&
      movie.genre.includes('Drama')
    ) {
      spielbergsCounter++;
    }
  }
  return spielbergsCounter;
}
howManyMovies(movies);
// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(allScores) {
  if (allScores.length === 0) {
    return 0
  };
  const averageOfScores = allScores.reduce((scoresAccumulator, actualScore) => {
    if (typeof actualScore.score !== "number") {
      return scoresAccumulator
    }
    return scoresAccumulator + actualScore.score;
  }, 0);
  return parseFloat((averageOfScores / allScores.length).toFixed(2));
}
scoresAverage(movies);
// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(dramaAverages) {
   const filteredMovies = dramaAverages.filter(dramaMovies => dramaAverages.genre.includes('Drama'))
}

dramaMoviesScore(movies)
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
