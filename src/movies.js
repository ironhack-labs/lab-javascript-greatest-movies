//const movies = require('/data.js');

// The `movies` array from the file `src/data.js`.
//console.log('movies: ', movies);

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(listOfMovies) {
  const listOfDirectors = listOfMovies.map((movie) => movie.director);
  return listOfDirectors;
}

getAllDirectors(movies);

console.log(getAllDirectors(movies));

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(listOfMovies) {
  let spielbergDramas = listOfMovies.filter(
    (spielberg) => spielberg.director === 'Steven Spielberg'
  );
  return spielbergDramas.length;
}

console.log(howManyMovies(movies));

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(listOfMovies) {
  const totalScore = listOfMovies.reduce(
    (acc, current) => current.score + acc,
    0
  );
  const avgScore = totalScore / movies.length;
  console.log(avgScore.toFixed(2));
}

scoresAverage(movies);

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(listOfMovies) {
  const listOfDramas = listOfMovies.filter((dramaM) => dramaM.genre == 'Drama');
  const dramasAcc = listOfDramas.reduce(
    (dramasScore, currentD) => currentD.score + dramasScore,
    0
  );
  const dramasAvg = dramasAcc / listOfDramas.length;
  return dramasAvg;
}

console.log(dramaMoviesScore(movies));

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(listOfMovies) {
  const yearOrder = listOfMovies.map((yearReleased) => yearReleased.year);
  function comparacion(a, b) {
    return a - b;
  }
  yearOrder.sort(comparacion);
  return yearOrder;
}

console.log(orderByYear(movies));

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(listOfMovies) {
  const alphOrder = listOfMovies.map((nameOrd) => nameOrd.title);
  alphOrder.sort();
  return alphOrder;
}

console.log(orderAlphabetically(movies));
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(listOfMovies) {
  const movieDuration = listOfMovies.map((movieDur) => movieDur.duration);

  return movieDuration;
}

console.log(turnHoursToMinutes(movies));
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
