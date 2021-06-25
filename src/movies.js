// Iteration 1: All directors? - Get the array of all directors.
const movies = require('./data.js')
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movs) {
  const dirs = movs.map((movie) => {
    return movie.director
  })
  return dirs
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArr) {
  const dramas = moviesArr.filter(movie => movie.director.includes('Steven Spielberg') && movie.genre.includes('Drama'))
  return dramas.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArr) {
  if (moviesArr == '') {
    return 0
  }
  const average = moviesArr.reduce((acc, movie) => {
    if (movie.score == '' || !movie.score) {
      return acc += 0
    } else {
      return acc + movie.score
    }
  }, 0)
  return Number((average / moviesArr.length).toFixed(2))
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArr) {
  const dramaMovies = moviesArr.filter((movie) => {
    return movie.genre.includes('Drama')
  })
  if (dramaMovies.length === 0) {
    return 0
  } else {
    const totalScore = dramaMovies.reduce((acc, movie) => {
      return acc + movie.score
    }, 0)
    return Number((totalScore / dramaMovies.length).toFixed(2))
  }
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(sorted) {
  const sortedYear = sorted.map(movies => movies)
  sortedYear.sort((a, b) => (a.title > b.title ? 1 : -1))
  const ordered = sortedYear.sort((a, b) => {
    return a.year - b.year
  })
  return ordered
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArr) {
  const titles = moviesArr.map((movie) => {
    return movie.title
  })
  titles.sort()
  while (titles.length > 20) {
    titles.pop()
  }
  return titles
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArr) {
  const newArray = moviesArr.map((movie) => {
    let newDuration = 0
    for (let i = 0; i < Number(movie.duration[0]); i++) {
      newDuration += 60
    }
    if (movie.duration.length > 3) {
      newDuration += Number(movie.duration[3] + movie.duration[4])
    }
    return {
      title: movie.title,
      year: movie.year,
      director: movie.director,
      duration: newDuration,
      genre: movie.genre,
      score: movie.score
    }
  })
  return newArray
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArr) {
  if (moviesArr == '') {
    return null
  }
  const goldenYear = moviesArr.map((movie) => {})
  if (goldenYear.length === 1) {
    return `The best year was ${goldenYear[0].year} with an average score of ${goldenYear[0].score}`
  }
}


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