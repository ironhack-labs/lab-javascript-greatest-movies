// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
const getAllDirectors = (movies) => {
  return movies.map((movie) =>  movie.director);
};



// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies (moviesdrama) {
  const smovies = moviesdrama.filter(movie => movie.director === 'Steven Spielberg' && movie.genre.includes('Drama'))
  return smovies.length
}

//function scoresAverage(moviesArr) {
//  const sumScores = moviesArr.reduce((acc, movie) => {acc + movie.score}, 0);
//  return Math.floor((sumScores / moviesArr.length) * 100) / 100;
//n}

//hint
//check if a string is inside an array
//genre.includes("drama")

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  if (!movies.length) {
    return 0;
  }
  const sum = movies.reduce((accumulator, currentvalue) => {
    if (currentvalue.score){
    return accumulator + currentvalue.score;
    } else {
      return accumulator;
    }
  }, 0);

  const average = sum / movies.length;
  return Number(average.toFixed(2)); 

  }

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArr1) {
  const dramaMovies = moviesArr1.filter(movie => movie.genre.includes('Drama'))
  return scoresAverage(dramaMovies)
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
