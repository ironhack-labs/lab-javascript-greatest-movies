// Iteration 1: All directors? - Get the array of all directors.


const allDirectors = movies.map(function (movies) {
	return movies.director
});

console.log(allDirectors);

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors() {}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(arrMovies) {
  const dramaSpielberg = arrMovies.filter(function (movie) {
    return (
      movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
    );
  });

  return dramaSpielberg;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals

function scoresAverage(arr) {
  const totalScoreMovies = movies.reduce(function (previousVal, currentVal) {
    return currentVal.score + previousVal;
  }, 0);

  const totalScore = totalScoreMovies / arr.length;
  return Math.round((totalScore + Number.EPSILON) * 100) / 100;
}

//console.log(scoresAverage(movies));

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore() {}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

const sort = [...movies].sort(compare);

function orderByYear(a, b) {
  if (a.year < b.year) {
    return -1;
  }
  if (a.year > b.year) {
    return 1;
  }
  return 0;
}

//console.log(sort);
//console.log(movies);

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
