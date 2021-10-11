// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.

const movies = require("./data");

// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(arr) {
  return arr.map(movies => movies.director);
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(arr) {
return arr.filter(function (movies){
  return ( movies.director === "Steven Spielberg" && movies.genre.includes("Drama")
  );
}).length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(a) {
  if(a.length === 0){
    return 0
  }
  const average = a.reduce((acc, currentValue) =>{
    if (!currentValue.score){
      return acc += 0
    }
    return acc += currentValue.score
  }, 0)
  return Number((average/a.length).toFixed(2))
}


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  const dramaAvg = movies.filter(function(movie){
    return movie.genre.includes("Drama")
  })
return scoresAverage (dramaAvg)
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(byYear) {
  
  const order = byYear.map(movie => {
    return movie
  });
  
  const orderByYear = order.sort((a, b) => {
    return a.year - b.year
  });
  
  const orderbyTitle = orderByYear.sort((a,b) => {
    if (a.year === b.year) { 
      if(a.title < b.title) return -1; 
      if(a.title > b.title) return 1; 
      if(a.title === b.title) return 0;
    }
  });
  return orderbyTitle ;
}
  

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
