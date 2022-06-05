// The `movies` array from the file `src/data.js`.
// console.log('movies: ', movies);

// const movies = require("./data");


// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(arr) {
  const directors = arr.map(function(movie) {
    return movie.director
  })
  //const directors = arr.map((el) => el.director)
    return directors
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(arr) {
    const spielbergMovies = arr.filter(function(movie){
      return movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')
    })
    return spielbergMovies.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(arr) {
  if(arr.length === 0) {
    return 0
  }

  const averageScore = arr.reduce(function(accumulator, value){

    if(typeof value.score === 'number') {
      return accumulator + value.score
    }
    return accumulator


  }, 0)

  return Number((averageScore / arr.length).toFixed(2))
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(arr) {
  if(arr.length === 0) {
    return 0
  }
  const dramaMovies = arr.filter(function(movie) {
    return movie.genre.includes('Drama')
  })
  
  let dramaScore = scoresAverage(dramaMovies)

  return dramaScore
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arr) {
  const orderedMovies = arr.sort(function(a, b){
    return a.year - b.year
    if(a.year === b.year)
    a.title - b.title
  })
  return orderedMovies

}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arr) {
  const alphabeticOrder = arr.sort(function(x, y) {
    return x.localeCompare(y)
  })
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
