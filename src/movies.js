// Iteration 1: All directors? - Get the array of all directors.

const movies = require("./data");

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(movies) {

  
  
  const newDir = movies.map(function(movie){

    return movie.director;

  })
  return newDir
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(array) {

  const onlySteven = array.filter(function(movie){

    if (movie.director === 'Steven Spielberg' && movie.genre.includes('drama')){

      return true 
    }
    return false

  })
  return onlySteven

}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(array) {
  if(movies.length===0)
  {
    return 0
  }
 const {total, count} = array.reduce((a, b) => {
   
  if (b.score === 0) {
        a.total += b.score;
        a.count++;
    } 
    return a;


}, {total: 0, count: 0});


return total / count 
}



// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  if(movies.length===0)
  {
    return 0
  }
  const dramaArray = movies.filter(function(movie){
    return movie.genre.includes('Drama');
  })
  return scoresAverage(dramaArray)
}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(array) {

  const sorted = movies.sort(function(a,b) { 
      if(a.year > b.year) return 1;
      if(a.year < b.year) return -1;
      return 0;
  })
   
  return sorted
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(array) {

  const alphaOrdered = movies.sort(function(a, b){
    if(a.title < b.title) { return -1; }
    if(a.title > b.title) { return 1; }
    return 0;
})
return alphaOrdered.slice(0,20)

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