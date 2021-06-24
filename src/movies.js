// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.

//const movies = require("./data");

// How could you "clean" a bit this array and make it unified (without duplicates)?
// function getAllDirectors() {
//   let copyAllDirectors = movies.map(movie => movie.director)
//   return copyAllDirectors;
// } #solution1

//console.log(getAllDirectors);#solution2 below
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
function scoresAverage(array) {
  let sum = array.reduce((acc, val) => {
    return acc + val.score;
  }, 0);
  let avg = sum / array.length;
  return Number(avg.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(array) {
  let dramaMovies = array.filter((eachMovie) => {
    return eachMovie.genre.includes('Drama');
  });
  return scoresAverage(dramaMovies);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(array) {
  return array.sort((a, b) => {
    return a.year - b.year;
  });
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
// function orderAlphabetically(array) {
//   let variable = array.sort((a, b) => {
//     if (a.title < b.title) {
//       return -1
//     } else if (a.title > b.title) {
//       return 1
//     } else {
//       return 0
//     }
//   })
// return variable.slice(0,20)
// }
const orderAlphabetically = (array) =>
  array.sort((a, b) => a.title.localeCompare(b.title).slice(0, 20));
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
