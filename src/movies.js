// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.

const movies = require("./data");

// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(arr) {
  let directorsSet = new Set();
  arr.map((el) => {
    directorsSet.add(el.director);
  }); 
  return [...directorsSet];

}
getAllDirectors(movies);
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(arr) {
  let stevenDramaMovies = arr.filter((el) => {
    return el.director === 'Steven Spielberg' && el.genre.includes("Drama")
  });
  return stevenDramaMovies.length;
}
 
// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(arr) {
  if (arr.length === 0){
    return 0;
  }
  
  let finalScore = arr.reduce((acc, el) => {
    if(el.hasOwnProperty("score")) {
      return (acc + el.score);
    } else {
      return acc;
    }
  }, 0);
  
  return parseFloat((finalScore/arr.length).toFixed(2));
 }
  
 // Iteration 4: Drama movies - Get the average of Drama Movies
 function dramaMoviesScore(arr) {
  if (arr.length === 0){
    return 0;
  }
  
  let numberOfDramas = 0;
  
  let finalScore = arr.reduce((acc, el) => {
    if(el.hasOwnProperty("score") && el.genre.includes("Drama")) {
      numberOfDramas++;
      return (acc + el.score);
    } else {
      return acc;
    }
  }, 0);
  
  if (numberOfDramas === 0){
    return 0;
  }
  return parseFloat((finalScore/numberOfDramas).toFixed(2));
 }
  
 // Iteration 5: Ordering by year - Order by year, ascending (in growing order)
 function orderByYear(arr) {
  let orderArray = Array.from(arr);
  
  orderArray.sort((a, b) => {
    if(a.year < b.year) {
      return -1;
    } else if(a.year > b.year) {
      return 1;
    } else {
      return a.title.localeCompare(b.title);
    }
  })
  
  return orderArray;
 }
  
 // Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
 function orderAlphabetically(arr) {
  let orderArray = Array.from(arr);
  
  orderArray.sort((a, b) => a.title.localeCompare(b.title));
  const result = orderArray.map((el) => el.title);
  
  return result.slice(0, 20);
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
