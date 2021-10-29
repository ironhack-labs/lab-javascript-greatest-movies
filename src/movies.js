// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.

const movies = require("./data");

// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors() {
  const directors = movies.map(movie => {
    return movie.director 
  })
  return directors
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  const spilberg = movies.filter(movie => movie.director ==='Steven Spielberg' && movie.genre.includes('Drama'))
  return spilberg.length 
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  if(movies == '') return 0;

  const bestScore = movies.reduce((acc, puntajes) => {
     if(puntajes.score == '' || typeof 'number') {
      return acc + puntajes.score;
    }      
  },0)
  return Number((bestScore / movies.length).toFixed(2)) 
}

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesScore(arr) {
  const drama = (
    arr.reduce((acc, val) => acc + val.score, 0) / arr.length
  ).toFixed(2);
  return drama;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  const years = arr.sort((b,d) => {
    if (b.title > d.title) return 1;
    if (b.title < d.title) return -1;
    return 0;
  });
  return years.sort((a,b) => a.year - b.year);
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(arr) {
  const titles = arr.sort((b, d) => {
    if (b.title > d.title) return 1;
    if (b.title < d.title) return -1;
    return 0;
  });
return titles.slice(0, 20);
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
    bestYearAvg,
  };
}
