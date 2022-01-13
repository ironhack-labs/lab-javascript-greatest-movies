// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  const allDirectors = movies.map((newArr1) => newArr1.director);
  // console.log("All directors: ", allDirectors);
  return allDirectors;
}
  
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  const spielbergDramas = movies.filter(
    (movies) =>
      movies.director === 'Steven Spielberg' && movies.genre.includes('Drama')
  );
  return spielbergDramas.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  if (movies.length === 0) {
    return 0;
  }
  const allScoresAvg = movies.reduce((accumulator, movies) => {
    return accumulator + movies.score;
  }, 0);
  let resultAvg = Math.round((allScoresAvg / movies.length) * 100) / 100;
  console.log(allScoresAvg);
  return resultAvg;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {  
  if (movies.length === 0) {
    return 0;
  };
  const dramaScoresAvg = movies.reduce((accumulator, movies) => {
    if (movies.genre.includes('Drama')) {
      return accumulator + movies.score;
    }
  }, 0);
  let resultDramaAvg = Math.round((dramaScoresAvg / movies.length) * 100) / 100;
  console.log(dramaScoresAvg);
  return resultDramaAvg;
}

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
