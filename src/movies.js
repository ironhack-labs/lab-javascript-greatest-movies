const movies = require("./data");

// The `movies` array from the file `src/data.js`.
// console.log('movies: ', movies);


// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(arr) {

   return arr.map(movie => movie.director)

}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(arr) {
  
  return arr.filter(movie => movie.genre.includes('Drama') && movie.director === 'Steven Spielberg').length
}


// Iteration 3: All scores average - Get the average of all scores with 2 decimals

function scoresAverage(arr) {
  if(arr.length === 0) {
    return 0
  } else {
    let allScores = arr.map(movie => movie.score)
    return Number((allScores.reduce((accumulator, currentValue) => {
      if(currentValue === '' || currentValue === undefined) {
        currentValue = 0
      }
      return accumulator + currentValue
    }) / arr.length).toFixed(2))
  }
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(arr) {
  
  let moviesDrama = arr.filter(movie => movie.genre.includes('Drama'))
  if (moviesDrama.length === 0) {
    return 0
  } 
    console.log(moviesDrama)
    let dramaScores = moviesDrama.map(movie => movie.score)
    console.log(dramaScores)
    return Number((dramaScores.reduce((accumulator, currentValue) => {
      if(currentValue === '' || currentValue === undefined) {
        currentValue = 0
      } 
      return accumulator + currentValue
    }) / dramaScores.length).toFixed(2))

}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arr) {
  let newOrder = arr.sort((a, b) => {
    return a.year - b.year
  })
  return newOrder
}
//console.log(orderByYear(movies))
console.log(orderByYear(movies))

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arr) {
  let orderByName = arr.map(movie => movie.title)
  console.log(orderByName)
  orderByName.sort()
  if(orderByName.length === 20) {
    return orderByName
  } else {
    return orderByName.slice(0, 20)
  } 
}
// console.log(orderAlphabetically(movies))

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
