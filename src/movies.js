// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.

const movies = require("./data");

// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors() {
  let directors = movies.map (item => item.director);
  return directors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(arr) {
  const steven = arr.filter(item => item.director =="Steven Spielberg" && item.genre.includes('Drama'));
  return steven.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(someArr) {
  if(someArr.length === 0){return 0};
  const average = someArr.reduce((sum, movie) => sum + movie.score, 0)/someArr.length;
  return Math.round (average * 100) / 100;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(someArr) {
  const drama = someArr.filter( item => item.genre.includes('Drama'));
  if(drama.length === 0){return 0};
  const averageDrama = drama.reduce((sum, movie) => sum + movie.score, 0)/drama.length;
  return Math.round (averageDrama * 100) / 100;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(param) {
  const ordem = param.sort((a,b) => (a.year > b.year) ? 1 : ((b.year > a.year) ? -1 : 0));
  return ordem;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(someArr) {
  const ordemArr = someArr.sort((a,b) => (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0));
  const ordemTitle =  ordemArr.map(titleOr => titleOr.title);
  return ordemTitle.slice(0,20);
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
