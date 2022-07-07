// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  let directorsArr = moviesArray.map(movie => movie.director)
  return directorsArr
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  let director = moviesArray.filter(movie => movie.director === 'Steven Spielberg')
  let genAndDirector = director.filter(movie => movie.genre.filter(gen => gen === 'Drama').length !== 0)
  return genAndDirector.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  let avgScore = moviesArray.reduce(function (sum, movie) {
    if (movie.score === undefined) movie.score = 0
    return sum + movie.score / moviesArray.length
  }, 0)
  return Math.round(avgScore * 100) / 100
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  let filterDrama = moviesArray.filter(movie => movie.genre.filter(gen => gen === 'Drama').length !== 0)
  let avgScoreDrama = filterDrama.reduce(function (sum, movie) {
    if (movie.score === undefined) movie.score = 0
    return sum + movie.score / filterDrama.length
  }, 0)
  return Math.round(avgScoreDrama * 100) / 100
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {}

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
