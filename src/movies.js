// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

const movies = require("./data");

function getAllDirectors() {
 const director = movies.map(theDirectors =>{
   const name = (theDirectors.name);
     return{
       name: movies.director,
     }
   });
   console.log(director);


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies() {
  let res = movies.filter(it => it.director.includes('Steven'));

console.log(res);

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage() {
  let average = movies.score.reduce(function (acc, avg ){
    return acc + avg.score;
  }, 0);
let averageScore = average / movies.score.length;

console.log('averageScore: ${averageScore}' );
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(){
  let avgDrama = movies.filter(movie => movie.genre === 'Drama');

  let dramaScore = avgDrama.reduce((total, next) => total + next.score, 0) / avgDrama.length;

 }
 console.log(dramaScore);

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear() {
  movies.sort(function(a, b){
     return Math.abs(new Date(a.year) - new Date(b.year))
   });
 }
 
 console.log(movies);

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically() {
   movies.sort(function (a, b) {
  if (a < b) return 1;
  if (a > b) return -1; 
  if (a === 0) return 0;
});

console.log(movies);
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

