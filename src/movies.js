// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.

const movies = require("./data");

// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(movies) {

  let newDirectorArr = movies.map(movies => movies.director);

  return newDirectorArr;

}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(movies) {

  if (!movies.length) {

    return 0;

  }

const bergMovies = movies.filter(movie => movie.director === 'Steven Spielberg' && movie.genre.includes('Drama'));

// const bergDramaMovies = bergMovies.includes(function(movierino){

//   if (movierino.genre == 'Drama') {

//   }

// })

return bergMovies.length;

}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals

function scoresAverage(movies) {

  if (!movies.length) {

    return 0;

  }

  const scoreCounter = movies.reduce((counter, movieScore) => {
    
    if (movieScore.score) {

      return counter + movieScore.score;

    }

    return counter;

  }, 0) / movies.length;

 return Number(scoreCounter.toFixed(2));

}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {

  // if (!movies.length) {

  //   return 0;

  // }

  const dramaMovies = movies.filter(movie => movie.genre.includes('Drama'));

  const dramaCounter = dramaMovies.reduce((counter, dramaScore) => {
    
    if (dramaScore.score) {

      return counter + dramaScore.score;

    }

    return dramaCounter;

  }, 0) / dramaMovies.length;

 return Number(dramaCounter.toFixed(2));

 


}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {

  console.log(movies.year.sort((a, b)=>a - b));
  return movies.year.sort((a, b)=>a - b); 

}

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
