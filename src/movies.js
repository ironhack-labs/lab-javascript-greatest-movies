// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  return movies.map((movie) => {
    return movie.director
  }).filter((director, index, directors) => {
    return directors.indexOf(director) === index
  })
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  return movies.filter((movie) => {
    return movie.director === "Steven Spielberg" && movie.genre.includes('Drama')
  }).length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  if (movies.length === 0) {
    return 0
  }

  return Math.round((movies.reduce((acc, movie) => {
    if (!movie.score && movie.score !== '') {
      return acc
    }

    return acc + movie.score 
  }, 0) / movies.length) * 100) / 100
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  // ¯\_(ツ)_/¯
  // return scoresAverage(movies.filter((movie) => {
  //   return movie.genre.includes('Drama')
  // }))

  const dramaMovies = movies.filter((movie) => {
    return movie.genre.includes('Drama')
  })

  if (dramaMovies.length === 0) {
    return 0
  }

  return Math.round((dramaMovies.reduce((acc, movie) => {
    if (!movie.score && movie.score !== '') {
      return acc
    }

    return acc + movie.score 
  }, 0) / dramaMovies.length) * 100) / 100

}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  return [...movies].sort((a, b) => {
    if (a.year === b.year) {
      return a.title.localeCompare(b.title) 
    }
    return a.year - b.year
  })
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  return [...movies].sort((a, b) => {
    return a.title.localeCompare(b.title)
  }).map((movie)=>{
    return movie.title
  }).slice(0, 20)
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
