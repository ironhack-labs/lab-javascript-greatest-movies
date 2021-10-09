// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.

const movies = require("./data");

// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
    return movies.map(movie => movie.director)
  }

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  let numberOfMovies = movies.filter(function(movie, index){
    if (movie.director === 'Steven Spielberg' && movie.genre.includes("Drama")) {
      return movie;
    }
  })
  return numberOfMovies.length;
}


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  if (movies.length === 0) {
    return 0;
  }
  let numberSum = movies.reduce((acc,item)=>{
    if (!item.score){
      return acc += 0 
    }
    return acc += item.score
  },0)
  return Number((numberSum/movies.length).toFixed(2))
}


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  let dramaMovie = movies.filter(function(movie, index){
    return movie.genre.includes("Drama")
  });

  return scoresAverage(dramaMovie);
 }

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  function compare(a,b){
  if(a.year > b.year) return 1;
  if(a.year < b.year) return -1;
  if(a.year === b.year){
    if (a.title > b.title) return 1;
    if (a.title < b.title) return -1;
    if (a.title === b.title) return 0;
   return 0;
  }
}
return movies.map(item=>item).sort(compare)
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  function compare(a,b){
   if(a > b) return 1;
   if(a < b) return -1;
  return 0;
   };
   return movies.map(item=>item.title).sort(compare).slice(0,20);
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
