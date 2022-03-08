// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  let allDirectors = movies.map(movie => movie.director);
  return allDirectors
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  let manyMovies = movies.filter(movie => movie.director === "Steven Spielberg" && movie.genre.includes("Drama")); 

  return manyMovies.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  if(movies.length === 0) return 0;

  let scoresMedia = movies.reduce((acc, array) => { 
    let trueScore = array.score;
    if (!trueScore) {
      trueScore = 0}
    return acc + trueScore}, 0) / movies.length;

  return Number(scoresMedia.toFixed(2))
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  let dramaScore = movies.filter(movie => movie.genre.includes("Drama"))
  return scoresAverage(dramaScore)
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  let order = movies.map(movie => movie).sort((a, b) => {
    if(a.year > b.year) return 1;
    if(b.year > a.year) return -1;
    if(a.title > b.title) return 1;
    if(b.title > a.title) return -1;
   return 0;
  });

   return order;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  let order = movies.map(movie => movie.title).sort() ;
  return order.slice(0,20)
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
