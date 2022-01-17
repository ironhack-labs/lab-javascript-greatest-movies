// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.

const movies = require("./data");

// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(mvDirector) {
  const directors = mvDirector.map((onlyDirectors) => {
      return onlyDirectors.director
  })
  return directors
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  const dramaMovies = movies.filter((movie) => {
    return movie.director.toLowerCase().includes("steven spielberg") && movie.genre.includes("Drama")
  })

  return dramaMovies.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  if (!movies.length) {
    return 0
  }
  const sumAverage = movies.reduce((acc, movie) => {
    if (movie.score) {
      return acc + movie.score
    } else {
      return acc
    }
  }, 0)

  return parseFloat((sumAverage / movies.length).toFixed(2))
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(sum) {
  
  const dramaMovies = sum.filter((eachDrama) => {
    return eachDrama.genre.includes("Drama")
  })

  if (!dramaMovies.length) {
    return 0
  }

  const dramaAverage = dramaMovies.reduce((acc, eachNumber) => {
    return acc + eachNumber.score
  }, 0)

  return parseFloat((dramaAverage / dramaMovies.length).toFixed(2))
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  const moviesCopy = JSON.parse(JSON.stringify(movies))
  moviesCopy.sort((a, b) => {
    if (a.year === b.year) {
      return a.title.localeCompare(b.title)
    }
    return a.year - b.year
  })
  
  return moviesCopy
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  const moviesCopy = JSON.parse(JSON.stringify(movies))
  moviesCopy.sort((a, b) => {
    return a.title.localeCompare(b.title)
  })
  const twentyMovies = moviesCopy.slice(0, 20)
  const arr = twentyMovies.map((a) => {
    return a.title
  })

  return arr
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
