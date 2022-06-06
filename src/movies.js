const movies = require("./data")


function getAllDirectors(movies) {
  const allDirectors = movies.map(movie => movie.director)
  return allDirectors
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(movies) {
  return movies.filter(movie => movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')).length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals

function scoresAverage(movies) {
  if (movies.length === 0) {
    return 0
  }
  const sum = movies.reduce((acc, movie) => {
    if (movie.score === undefined) {
      return acc
    } else {
      return acc + movie.score
    }
  }, 0)
  const average = sum / movies.length
  return Number(average.toFixed(2))
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  const dramaMovies = movies.filter(movie => movie.genre.includes('Drama'))
  return scoresAverage(dramaMovies)
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(movies) {
  const orderYears = movies.sort((movieA, movieB) => {
    if (movieA.year > movieB.year) {
      return 1
    }
    else if (movieA.year < movieB.year) {
      return -1
    }
    else {
      if (movieA.title[0] > movieB.title[0]) {
        return 1
      } else if (movieA.title[0] < movieB.title[0]) {
        return -1
      } else return 0 
    }
  })
  return orderYears.map(movie => movie.year)
}

  // Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

  function orderAlphabetically(movies) {
    const orderByTitle = movies.sort((movieA, movieB) => movieA.title - movieB.title)
    const onlyTitles = orderByTitle.map(movie => movie.title)
    if (orderByTitle.length < 20) { 
      return movies
    } else {
      return onlyTitles.filter((movie, i) => i < 20)
    }
  }
  
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
  }
};