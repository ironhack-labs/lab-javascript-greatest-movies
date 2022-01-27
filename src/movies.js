// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(array) {
  let directors = array.map(function (movie){
    return movie.director
  })
  return directors
}


// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

// solve with
// filter
// indexOf

// or solve with 'set'



// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(array) {
  let stevenMovies = [];
  let count = 0;
  array.filter(function(movie){
    if (movie.director === "Steven Spielberg" && movie.genre.includes('Drama')){
     return stevenMovies.push(movie.genre)
     }
  })
  return stevenMovies.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(array) {
  let score = array.reduce(function (x, y){
    return x + y.score
  }, 0)
  return Number((score / array.length).toFixed(2))
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(array) {
  let movies = array.filter(function (movie){
    if (movie.genre.includes('Drama')){
      return movie
    }
  });
  let average = movies.reduce(function (x,y){
      return x + y.score
    }, 0)
  return Number((average / movies.length).toFixed(2))
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(array) {
  // console.log(array)
  let ordered = array.sort(function (a, b){
    return a.year - b.year
  })
  return(ordered)
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
