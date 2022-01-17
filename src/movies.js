// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  const director = movies.map((eachMovies) => {
    return eachMovies.director
  })
  return director
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  const famousDirector = movies.filter((eachMovie) => {
    return eachMovie.director.toLowerCase() === 'steven spielberg' && eachMovie.genre.includes('Drama')
  })
  return famousDirector.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  if (movies.length === 0) {
    return 0
  } else {
    const sumScores = movies.reduce((acc, eachMovie) => {
      if (eachMovie.score) {
        return acc + eachMovie.score
      } else {
        return acc
      }
    }, 0)
    return parseFloat((sumScores / movies.length).toFixed(2))
  }
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  const dramaMovies = movies.filter((eachMovie) => {
    return eachMovie.genre.includes('Drama')
  })
  if (!dramaMovies.length) {
    return 0
  }
  const sumDramaScores = dramaMovies.reduce((acc, eachMovie) => {
    return acc + eachMovie.score
  }, 0)
  return parseFloat((sumDramaScores / dramaMovies.length).toFixed(2))
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  const moviesCopy = JSON.parse(JSON.stringify(movies))
  moviesCopy.sort((a, b) => {
    if (a.year === b.year) {
      return a.title.localeCompare(b.title)
    } return a.year - b.year
  })
  return moviesCopy
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  const moviesCopy = JSON.parse(JSON.stringify(movies))
  moviesCopy.sort((a, b) => a.title.localeCompare(b.title))
  const firstMovies = moviesCopy.slice(0, 20)
  const alphaOrder = firstMovies.map((eachMovies) => {
    return eachMovies.title
  })
  return alphaOrder
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {

}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {

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
