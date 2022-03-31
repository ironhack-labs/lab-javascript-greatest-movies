// The `movies` array from the file `src/data.js`.
//console.log('movies: ', movies);

const movies = require("./data");


// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(array) {
  const mappedArray = array.map(function (element){
    return element.director;
  });
    return mappedArray;   
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(array) {
  const countDramaOnly = array.filter(function (element) {
    return (element.director === 'Steven Spielberg' && element.genre.includes('Drama'));

  });
  return countDramaOnly.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(array) {
  if (array.length === 0) return 0;
  

  const countScores = array.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue.score;},0);

const result = countScores * 1;
const roundedResult = result / array.length;
return Math.round (roundedResult * 100) / 100;

//I was struggling to round to 2 decimals. This is the only way I managed to make it work ^^
}


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(array) {
 
  const dramaMovies = array.filter(function (element) {
    return (element.genre.includes('Drama'));
  });
  
  const average = scoresAverage(dramaMovies);

  return average;
}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(array) {
  
  const newArray = array.slice(0);
  const byYear = newArray.sort(function (a,b) {
    if (a.year - b.year === 0) {
    return a.title.toLowerCase().localeCompare(b.title.toLowerCase()); 
    } else { 
   return a.year - b.year; }
   
 });

   return byYear;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(array) {

  let newArray = array.slice(0);
  let byTitle = newArray.sort(function (a,b) {
    return a.title - b.title;
  

});
   return byTitle;
   
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
