// const movies = require("./data");

//const movies = require("./data");

// const movies = require("./data");

// The `movies` array from the file `src/data.js`.
console.log('movies: ', movies);


// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(peli) {
  let totalDirectores = peli.map(function(total){
    return total.director
  })
  return totalDirectores
}


console.log (getAllDirectors(movies))
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(dram) {
  let spielbergDramaKing = dram.filter(sD => {
    return sD.director.includes("Steven") && sD.genre.includes("Drama")
  })
  return spielbergDramaKing
}
console.log(howManyMovies(movies))

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(avg) {

  const totalScore = peli2.reduce((acc, current) => current.score + acc, 0)
  const avgScore = totalScore / movies.length
  console.log((avgScore).toFixed(2))

}
scoresAverage(movies);

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore() {}
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(order) {

  order.sort()

}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(abecede) {}
 const titulos = title.sort(a,b){
   return a - b
 }
 console.log(orderAlphabetically)

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
