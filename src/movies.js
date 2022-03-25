//const movies = require("./data");

//const movies = require("./data");

//const movies = require("./data");

//const movies = require("./data");

// The `movies` array from the file `src/data.js`.
console.log('movies: ', movies);


// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?



const newArrayi = movies.map(m => m.director);

console.log(newArrayi);



//const array = [1, 2, 3];
 
//const newArray = array.map(function (number) {
  //return number * 2;
//});
 
//console.log(newArray); // [ 2, 4, 6 ]











// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?


const howManyMovies = movies.filter( n => n.director === 'Steven Spielberg');

console.log(howManyMovies);



// Iteration 3: All scores average - Get the average of all scores with 2 decimals


function scoresAverage(movi) {

  const totalScore = movies.reduce((acc, current) => current.score + acc, 0)
  const avgScore = totalScore / movies.length
  console.log((avgScore).toFixed(2))

}
scoresAverage(movies);


// Iteration 4: Drama movies - Get the average of Drama Movies

const newArrayo = movies.filter(number => number.genre.includes('Drama'));
const totalscorry = newArrayo.reduce( (acc, current) => current.score + acc, 0)
const avgScorep = totalscorry / newArrayo.length
console.log(avgScorep);




console.log(newArrayo);
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
const orderByYear = movies.map(m => m.year);
const ordermn = orderByYear.sort(function (a, b) {
  if (a < b) return 1; 
  if (a > b) return -1; 
  if (a === 0) return 0;
});
console.log(ordermn);






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
