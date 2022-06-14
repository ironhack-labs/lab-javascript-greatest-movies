// The `movies` array from the file `src/data.js`.

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  return movies.map(h =>h.director)

  // return map(movies, (m) => m.director)
}

// function map(arr, arg) { // (item) => any
//   const newMap = [];

//   for (let i = 0; i < arr.length; i++) {
//     const newValue = arg(arr[i])
//     newMap.push(newValue)
//   }

//   return newMap
// }

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  const matches = movies.filter(m => m.director == 'Steven Spielberg' && m.genre.includes('Drama') ) // => [...]
  return matches.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) { // []
  if (movies.length == 0) { // len -> 0, entonces 0 == 0
    return 0
  }

  const sum = movies.reduce((aggr, movie) => {
    const safeToUseScore = Number(movie.score || 0)
    return safeToUseScore + aggr
  }, 0) // 0

  const avg = sum/movies.length // 0 / 0 -> NaN -> // '24000' / 30 => NAN
  const avgWithDecimals = avg.toFixed(2) // 0.6666666 -> "0.67" -> 0.67
  return Number(avgWithDecimals)
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  const theDramaMovies = movies.filter(n =>n.genre.includes('Drama') )
  const sumOfTheDramaMovies = theDramaMovies.reduce((aggr, movie) => movie.score + aggr, 0)
  // const sum = movies.reduce((,movie)=>movie.genre.Drama+ ,0)
  const avg = sumOfTheDramaMovies/theDramaMovies.length
  const avgWithDecimals = avg.toFixed(2)
  return Number(avgWithDecimals)
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear() {}

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
