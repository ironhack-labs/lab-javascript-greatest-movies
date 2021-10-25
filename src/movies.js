// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

const movies = require('./data');
function getAllDirectors(moviesArray) {
  return moviesArray.map((p) => p.director);
}
//console.log( getAllDirectors(movies));
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray = []) {
  return moviesArray.filter(
    (p) => p.director == 'Steven Spielberg' && p.genre.includes('Drama')
  ).length;
}
console.log(howManyMovies(movies));
// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray = []) {
  const s = moviesArray.length
    ? moviesArray.reduce((a, v) => a + (v.score || 0), 0) / moviesArray.length
    : 0;
  return s.toFixed(2) * 1;
}
console.log(scoresAverage(movies));
// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray = []) {
  newArray = moviesArray.filter((p) => p.genre.includes('Drama'));
  const s = newArray.length
    ? newArray.reduce((a, v) => a + (v.score || 0), 0) / newArray.length
    : 0;
  return s.toFixed(2) * 1;
}
console.log(dramaMoviesScore(movies));
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray = []) {
  let newArray = moviesArray;
  return [
    ...newArray.sort(function (a, b) {
      if (a.year === b.year) {
        return a.title < b.title ? -1 : 1;
      }
      return a.year - b.year;
    })
  ];
}

console.log(orderByYear(movies));
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  return moviesArray
    .map((p) => p.title)
    .sort()
    .slice(0, 20);
}

console.log(orderAlphabetically(movies));
console.clear();
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  return moviesArray.map((p) => {
    let dd = p.duration.replace('h', '').replace('min', '').split(' ');
    return {
      ...p,
      duration: dd[0] * 60 + (dd[1] || 0) * 1
    };
  });

  // .map(p=>{p[0]*60 + p[1]*1);
  // s = moviesArray[0].duration.split(' ')
  //h= s[0].split('h')
  //m=s[1].split('m')
  //return h[0] * 60 + m[0]*1
}
console.log(turnHoursToMinutes(movies));

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {
  
}

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
