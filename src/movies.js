// The `movies` array from the file `src/data.js`.
// console.log('movies:', movies);

// const movies = require('./data');

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
// const arrayDirector = [];
function getAllDirectors(arrOfMovies) {
  return (arrayDirector = arrOfMovies.map(function (element, value) {
    // console.log(element);
    return element.director;
    // console.log(element);
  }));
  // return arrayDirector;
}
// getAllDirectors(movies);
// console.log(arrayDirector);

// const directorArray = getAllDirectors(movies);
// console.log(directorArray);
// console.log(arrayDirector);

// console.log(arrayDirector);
// console.log(arrayDirector);

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(array) {
  if (array.length === 0) {
    return 0;
  }
  return (spielbergMovies = array.filter(function (element, value) {
    if (
      element.genre.includes('Drama') &&
      element.director.includes('Steven Spielberg')
    ) {
      return true;
    } else {
      return false;
    }
  }).length);
}

// howManyMovies(movies);
// console.log(spielbergMovies);
// console.log(spielbergMovies);

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(array) {
  if (array.length === 0) {
    return 0;
  }
  const totalScore = array.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue.score;
  }, 0);
  const averageScore = totalScore / array.length;
  // console.log(scoreTotal / movies.length);
  return Math.round(averageScore * 100) / 100;
}

// scoresAverage(movies);

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(array) {
  const dramaMovies = array.filter(function (element, value) {
    if (element.genre.includes('Drama')) {
      return true;
    }
  });
  return scoresAverage(dramaMovies);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)534t
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
