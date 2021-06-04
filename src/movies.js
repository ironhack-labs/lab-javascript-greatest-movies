// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.

const movies = require("./data");

// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies){
  return movies.map((movie) => movie.director);
} 

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies){
//movie.genre.includes cause drama is an array and not a string
 movies.filter((movie) => movie.director === 'Steven Spielberg' && movie.genre.includes("Drama"));
 return movies.length;
}  

//Hint
//to check if a string is inside an array
//genre.includes("drama")

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  if (!movies.length){
    return 0;
  }
 movies.reduce((accumulator, currentValue) => accumulator + currentValue.score), 0;
 /* if (currentValue.score){
   return accumulator + currentValue.score;
 }
 else {
   return accumulator;
 }
 }*/
 //return sum/movies.length; return Number(average.toFixed(2)); 
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  //movie.genre.includes cause drama is an array and not a string
 const dramaMovies = movies.filter((movie) => movie.genre.includes("Drama"));
 return scoresAverage(dramaMovies);
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
