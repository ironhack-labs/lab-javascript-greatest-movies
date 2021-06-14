// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(arr) {
  let allDirectors = arr.map((element) => {
    return element.director;
  });

  return allDirectors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(arr) {
  let allBySpielberg = arr.filter((element) => {
    return (
      element.director === 'Steven Spielberg' && element.genre.includes('Drama')
    );
  });
  return allBySpielberg.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(arr) {
  if (arr.length === 0) {
    return 0;
  }
  let averageScore =
    arr.reduce((accumulator, currentValue) => {
      return accumulator + (currentValue.score || 0);
    }, 0) / arr.length;

  return parseFloat(averageScore.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(arr) {
  let allDramaMovies = arr.filter((element) => {
    return element.genre.includes('Drama');
  });
  return scoresAverage(allDramaMovies);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arr) {
  let ascendingYears = [...arr].sort((a, b) => {
    return a.year - b.year;
  });
  return ascendingYears;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arr) {
  let alphabeticalOrder = [...arr].sort((a, b) => {
    return a.title.localeCompare(b.title);
  });

  return alphabeticalOrder.slice(0, 20);
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
