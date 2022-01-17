// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.

const movies = require("./data");

// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(array) {
  const getDirectors = array.map(eachMovie => {
    return eachMovie.director
  })
  return getDirectors
}



// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(array) {
  let spielbergDrama = 0
  const spielbergMovies = array.filter((eachMovie) => {
    if (eachMovie.director === "Steven Spielberg" && eachMovie.genre.includes('Drama'))
      spielbergDrama++
  })
  return spielbergDrama
}


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(array) {
  if (array.length === 0) return 0
  // if (array.score === undefined) return array.score / array.length
  const sumMovies = array.reduce((acc, eachMovie) => {
    return acc + eachMovie.score

  }, 0)

  return parseFloat((sumMovies / array.length).toFixed(2))

}


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(array) {
  const dramaMovies = array.filter((eachMovie) => {
    return eachMovie.genre.includes('Drama')

  })

  return scoresAverage(dramaMovies)
}



// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(array) {
  const arrayClone = JSON.parse(JSON.stringify(array))

  arrayClone.sort((a, b) => {
    return a.year - b.year || a.title.localeCompare(b.title)

  })
  return arrayClone
}



// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(array) {
  let arrayClone = JSON.parse(JSON.stringify(array))
  let getTitles = arrayClone.map(eachMovie => {
    return eachMovie.title
  })
   getTitles.sort()

 return getTitles.splice(0, 20)
 }
console.log(orderAlphabetically(movies))


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() { }

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() { }



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
