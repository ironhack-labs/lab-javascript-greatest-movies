// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(data) {
  const newList = data.map(function (dir) {
    return dir.director;
  });
  return newList.filter(function (director, index) {
    return newList.indexOf(director) === index;
  });
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(data) {
  const newMovies = data.filter(function (dir) {
    return dir.director === "Steven Spielberg" && dir.genre.includes("Drama");
  });
  return newMovies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(data) {
  const average = data.reduce(function (total, current, index, sourceArray) {
    if (!current.score) {
      current.score = 0;
    }

    if (index === sourceArray.length - 1) {
      total += current.score;
      return total / sourceArray.length;
    }
    return total + current.score;
  }, 0);

  return parseFloat(average.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies

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
    bestYearAvg,
  };
}
