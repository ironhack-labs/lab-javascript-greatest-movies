// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.

const movies = require("./data");

// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
const directors = movies.map((eachMovie) => {
  return eachMovie.director

})
return directors
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  const spilbersDramas = movies.filter((eachMovie) => {
  return eachMovie.director === 'Steven Spielberg' && eachMovie.genre.includes('Drama') 
  })
return spilbersDramas.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  if (movies.length === 0){ 
  return 0 
  }
  const scoresSum = movies.reduce((acc, eachMovie) => {
    if (eachMovie.score !== undefined) {
      return acc + eachMovie.score
    } else {
      return acc
    }
  }, 0)
  const scoresAverage = scoresSum /movies.length 
  return Number (scoresAverage.toFixed(2))
} 

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
const dramaScore = movies.filter ((eachDramas) => { 
  return eachDramas.genre.includes('Drama')
 })
    if (dramaScore.length) { 
  
    const allDramasScore = dramaScore.reduce((acc, eachDramas) => {
    if (eachDramas.score ) { 
      return acc + eachDramas.score
    } else { 
      return acc 
    }
   },0)
const scoresAverage = allDramasScore/dramaScore.length
return Number (scoresAverage.toFixed(2))
  }
else {return 0 }
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {

  const orderByYear = movies.sort(function(a, b){
    if(a.year === b.year){
      if(a.title > b.title)
        return 1
      else
        return -1
    }
    return a.year - b.year
  })
  const totalOrder = orderByYear.map(function(movie){
    return movie
  })
  return totalOrder
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
