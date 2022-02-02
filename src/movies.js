// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors() {
  let new_arr = arr.map((element) => element.director);
  return new_arr;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies() {
  const total = arr.filter(function (element) {
    return (
      element.director.includes('Steven Spielberg') &&
      element.genre.includes('Drama')
    );
  });
  return total.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(arr) {
  if (arr.length === 0) {
    return 0;
  }
  const score = arr.reduce((acc, movies) => {
    if (movies.score === undefined || movies.score === '') {
      return acc;
    } else {
      return acc + movies.score;
    }
  }, 0);

  return Math.round((score / arr.length) * 100) / 100;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(arr) {
  let new_arr = [];
  arr.map((element) => {
    if (element.genre.includes('Drama')) {
      return new_arr.push(element);
    }
    return new_arr;
  });
  if (new_arr.length === 0) {
    return 0;
  }

  const scoreDrama = new_arr.reduce((acc, movies) => {
    if (movies.score === undefined || movies.score === '') {
      return acc;
    } else {
      return acc + movies.score;
    }
  }, 0);
  return Math.round((scoreDrama / new_arr.length) * 100) / 100;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear() {
  const copiedArray = [...arr];
  sortedArray = arr.sort(function (a, b) {
    if (a.year > b.year) return 1;
    else if (a.year < b.year) return -1;
    else return 0;
  });
  return sortedArray;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically() {
  copiedArray = [...arr];
  const sortedarray = copiedArray.sort(function (a, b) {
    if (a.title > b.title) return 1;
    else if (a.title < b.title) return -1;
    else return 0;
  });

  const topTwenty = sortedarray.map((element) => element.title).slice(0, 20);
  return topTwenty;
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
