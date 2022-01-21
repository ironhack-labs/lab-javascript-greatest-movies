// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.

const movies = require('./data.js');

// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(array) {
if (!array.length){
  return undefined;
};
const allDirectors = array.map((movie) => {
return movie.director;
});
return allDirectors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(array) {
if (!array.length){
  return 0;
};
const numberOfMovies = array.filter((movie) => {
  return movie.director === 'Steven Spielberg' && movie.genre.includes('Drama');
});
return numberOfMovies.length;
};

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(array) {
  if (!array.length){
    return 0;
  };
  const averageMovie = array.reduce((total, next) => {
    if (!next.score) {
      return total + 0;
    };
    return   (total + next.score);
  }, 0);
  return Number((averageMovie / array.length).toFixed(2));
}



// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(array) {
  const dramaMovies = array.filter((movie) => {
    return movie.genre.includes('Drama');
  });
  if (!dramaMovies.length){
    return 0;
  };
  const averageDrama = dramaMovies.reduce((total, next) => {
    return   (total + next.score);
  }, 0);
  return Number((averageDrama / dramaMovies.length).toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(array) {
  if (!array.length){
    return 0;
  };
  let orderedArray = [...array];
  let orderArr = orderedArray.sort((a, b) => {
    let orderYear = a.year - b.year;
    if (orderYear === 0) {
      result = a.title.localeCompare(b.title);
      return result;
     };
     return orderYear;
  }, 0 );
  return orderArr;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(array) {
  const moviesNewArray = array.slice(0,20);
  moviesNewArray.map((obj)=> {
   return obj.title;
  });
  let sorted = moviesNewArray.sort((a, b) => {
    return a.title.localeCompare(b.title);
   });
   return sorted
   }; 
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
