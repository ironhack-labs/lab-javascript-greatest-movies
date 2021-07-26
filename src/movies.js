// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) { 
  const moviesDirectors = moviesArray.map((movieObject) => { 
    return movieObject.director; 
  });
  return moviesDirectors; };

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) { 
  const moviesDirected = moviesArray.filter((movieObject) => { 
    if (movieObject.director == 'Steven Spielberg' && movieObject.genre.includes('Drama')){
      return movieObject; 
    } 
  });
  return moviesDirected.length
};
  
// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) return 0;
  const scoreSum = moviesArray.reduce(function(acc, movieObject){
    if (!movieObject.score){
      return acc + 0;
    }
    return acc + movieObject.score;
  }, 0)
    const scoreAverage = (scoreSum / moviesArray.length).toFixed(2);
    return +scoreAverage;
};

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const dramaMovies = moviesArray.filter((movieObject) => {
    return movieObject.genre.includes("Drama")
  });
  const avgScoreDrama = dramaMovies.reduce((accmulator, movieObject) => {
    return accmulator + movieObject.score / dramaMovies.length
  }, 0);
  return Math.round(avgScoreDrama * 100) / 100;
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
