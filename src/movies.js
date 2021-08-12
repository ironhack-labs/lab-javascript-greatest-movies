// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(arr) {
  const directors = arr.map(function (element) { return element.director })
  return directors
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  const listOfDramaMovies = movies.filter(function (eachMovie) {
    return eachMovie.genre.includes('Drama');
  });
  const sumOfScores = listOfDramaMovies.reduce(function (startValue, sumScore) { return (startValue += sumScore.director.includes('Steven Spielberg')) }, 0)
  return sumOfScores
}



// Iteration 3: All scores average - Get the average of all scores with 2 decimals

function scoresAverage(array) {
  if (array.length === 0) return 0;

  const sumOfScores = array.reduce(function (startValue, sumScore) { return (startValue += sumScore.score) }, 0)

  let avg = sumOfScores / array.length

  let decimals = Math.round(avg * 100) / 100


  return decimals

}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  const listOfDramaMovies = movies.filter(function (eachMovie) {
    return eachMovie.genre.includes('Drama');
  });

  if (!listOfDramaMovies?.length) {
    return 0;
  }

  const listOfDramaScores = listOfDramaMovies.reduce(function (acc, eachMovie) {
    acc += eachMovie.score;
    return acc;
  }, 0);

  let averageDramaScore = listOfDramaScores / listOfDramaMovies.length;

  return Math.round(averageDramaScore * 100) / 100;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear() { }

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically() { }

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() { }

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() { }



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
