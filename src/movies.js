// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.

const movies = require("./data");

// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  const directors = movies.map(function(movie){
    return movie.director;
 })
 return directors
}
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  const spielbergMovies = movies.filter(function(movie){
    if (movie.director === "Steven Spielberg" && movie.genre.includes('Drama')) {
      return true
    } return false
}) 
return spielbergMovies.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  if(movies.length === 0) {
    return 0;
  }
  const scoresTotal = movies.reduce(function(sum, movie){
    if(movie.score === undefined || movie.score === '') {
      movie.score = 0;
    }
    return sum + movie.score
  },0) 
  return Number((scoresTotal/movies.length).toFixed(2))
} 

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  
  
 const dramaMovies = movies.filter(function(movie){
    return movie.genre.includes('Drama')
  }) 
  
  const dramaMoviesScore = dramaMovies.reduce(function(sum,movie) {
    
    return sum + movie.score
  }, 0)
  return Number((dramaMoviesScore/dramaMovies.length).toFixed(2))
}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  const sortedByYear = [...movies];
  sortedByYear.sort(function(a, b){
    if(a.year === b.year) {
      return a.title - b.title
    }
  return a.year - b.year
  }) 
  return sortedByYear
  }
  


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  const sortedAlphabetically = movies.sort(function(a,b){
   
    return a.title - b.title
  })
  
  return sortedAlphabetically

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
