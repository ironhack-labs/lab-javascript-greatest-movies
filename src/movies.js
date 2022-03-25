// The `movies` array from the file `src/data.js`.

const movies = require("./data")



// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors() {
  let result = movies.map(function (allDirectors){
   return allDirectors.director
 })
return result
}



// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies() {
  let result = movies.filter(function (Spielberg){
   return Spielberg.director === 'Steven Spielberg'
 })
return result
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage() { 
  let result = movies.reduce(function (scoreofmovie , value){
   
   return  scoreofmovie + value.score / movies.length
 },0)
return result.toFixed(2)
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore() {
  let result = movies.filter(function (drama){
    return drama.genre === "drama"
  })
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear() {
   
    let result = movies.sort(function (a, b){
      return a.year - b.year || a.title - b.title
    })
   return result;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) { 
  let first20 = movies.slice (0,20);
 let resultordered = first20.sort(function(a ,b){
   if(a.title < b.title) { return -1; }
    if(a.title > b.title) { return 1; }
    return 0;
 })
 return resultordered;
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
