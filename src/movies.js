// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  const directors = moviesArray.map(movie => movie.director)
return directors
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  return moviesArray.filter(movie => movie.genre.includes("Drama") && movie.director === "Steven Spielberg").length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0){
    return 0
  }
  const scores = moviesArray.map(movie => movie.score)
  const sum = scores.reduce((acc, curr) => {
    return acc + curr
  })
  const mean = sum / scores.length
  return parseFloat(mean.toFixed(2))
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const dramas = moviesArray.filter(movie => movie.genre.includes("Drama"))
  if (dramas.length === 0){
    return 0
  }
  return scoresAverage(dramas)
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const arrayToSort = [...moviesArray]
  arrayToSort.sort((movie1, movie2) => movie1.title - movie2.title)
  arrayToSort.sort((movie1, movie2) => movie1.year - movie2.year)
  return arrayToSort
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  if (moviesArray.length === 0){
    return null
  }
  const copy = [...moviesArray]
  const titles = copy.map(movie => movie.title)
  titles.sort((movie1, movie2) => {
    return movie1.title.toLowerCase() > movie2.title.toLowerCase() ? 1 : -1
  })
  return titles.slice(0, 20)
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  const splitMovieLengthArray = moviesArray.map(movie => movie.duration.split(" "))
  const formattedLength = splitMovieLengthArray.map(duration => {
    const hours = parseInt(duration[0].split("h")[0])
    const minutes = parseInt(duration[1].split("min")[0])
    return 60 * hours + minutes
  })
  return formattedLength
}

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
