// Iteration 1: All directors? - Get the array of all directors.
const movies = require("./data");
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  return moviesArray.map(film => film.director)

}

// Funçao que vai dentro do .map (ela tem o objetivo de passar pelo filme e retornar a propriedade .director). O map vai fazer ela ser executada em cada item do array movies, ouse ja, cada filme.

// function (film) {
//   return film.director;
// }

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  const filteredArray = moviesArray.filter((film) => film.director.includes("Steven Spielberg") && film.genre.includes("Drama"))
  return filteredArray.length

}
// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray)  {
  if (moviesArray.length === 0) return 0

  let sum = moviesArray.reduce((acc, element) => {

    return element.score + acc // reduce ta fazendo pra criar um array
  }, 0)


  sum = sum / moviesArray.length

return parseFloat(sum.toFixed(2))
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray)  {
  const dramaMovies = moviesArray.filter((film) => film.genre.includes("Drama"))
  if (dramaMovies.length === 0) return 0;
  let average = dramaMovies.reduce((acc, element) => {
    return element.score + acc
  }, 0)
  
    average = average / dramaMovies.length
  
    return parseFloat(average.toFixed(2))
  
  }

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  let newOrder = moviesArray.slice();

  newOrder = newOrder.sort( (a, b) => {
    if (a.year !== b.year) return a.year - b.year;
    if (a.year === b.year) return a.title - b.title
  }
  )


  return newOrder
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}



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

