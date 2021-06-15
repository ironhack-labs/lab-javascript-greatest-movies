// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.

//const movies = require("./data");

// How could you "clean" a bit this array and make it unified (without duplicates)?
// function getAllDirectors() {
//   let copyAllDirectors = movies.map(movie => movie.director)
//   return copyAllDirectors;
// }

//console.log(getAllDirectors);
function getAllDirectors(array) {
  let directorNames = array.map((eachMovie) => {
    return eachMovie.director;
  });
  return directorNames;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
// function howManyMovies() {
//   return movies.filter((movie) => {
//     return (
//       movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')
//     );
//   });
//   //return spielberg.length;
// }
function howManyMovies(array) {
  let stevenMovies = array.filter((eachMovie) => {
    return (
      eachMovie.director === 'Steven Spielberg' &&
      eachMovie.genre.includes('Drama')
    );
  });
  return stevenMovies;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage() {}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore() {}

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
