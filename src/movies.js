// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

const movies = require('./data');

function getAllDirectors(array) {
  let result = array.map((movie) => {
    return movie.director;
  });
  return result;
}

// console.log(getAllDirectors(movies));

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(array) {
  let total = array.filter((movie) => {
    if (movie.director === 'Steven Spielberg') {
      return true;
    }
  });
  return total.length;
}

// console.log(howManyMovies(movies));

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(array) {
  let result = array.reduce((acc, num) => {
    let total = acc + num.score / array.length;
    return total;
  }, 0);
  let roundedResult = result.toFixed(2);
  let turnNum = Number(roundedResult);
  return turnNum;
}

// console.log(scoresAverage(movies));

// This takes an array, not nested arrays ---->
function dramaExists(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 'Drama') {
      return true;
    }
  }
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(arr) {
  let scores = [];
  arr.map((movie) => {
    if (dramaExists(movie.genre)) {
      scores.push(movie.score);
    }
  });

  let result = scores.reduce((acc, score) => {
    return acc + score / scores.length;
  }, 0);

  let roundedResult = result.toFixed(2);
  let turnNum = Number(roundedResult);
  return turnNum;
}

// console.log(dramaMoviesScore(movies));

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arr) {
  const result = arr.sort((a, b) => (a.year > b.year ? 1 : -1));
  return result;
}
// console.log(orderByYear(movies));

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arr) {
  const sortArr = arr.sort((a, b) => {
    if (a.title < b.title) return -1;
    if (a.title > b.title) return 1;
    return 0;
  });

  let sortArr20 = [];
  for (let i = 0; i < 20; i++) {
    const movieObj = sortArr[i];
    sortArr20.push(movieObj.title);
  }
  return sortArr20;
}
// console.log(orderAlphabetically(movies));

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
// function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
// function bestYearAvg() {}

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
