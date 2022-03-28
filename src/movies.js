// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  const directorsArray = movies.map(eachMovie => {
    return eachMovie.director
  })
  return directorsArray
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  const spielbergDrama = movies.filter(eachDramaMovie => {
    return eachDramaMovie.director === 'Steven Spielberg' && eachDramaMovie.genre.includes('Drama')
  })
  return spielbergDrama.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  if (movies.length === 0) {
    return 0
  } else {
    const moviesScores = movies.reduce((acc, eachMovie) => {
      return acc + (eachMovie.score || 0)
    }, 0)

    let average = moviesScores / movies.length

    return parseFloat((average).toFixed(2))
  }

}


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  const dramaMovies = movies.filter(eachMovie => {
    return eachMovie.genre.includes('Drama')
  })
  return scoresAverage(dramaMovies)
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  const sortedByYear = [...movies]

  sortedByYear.sort((a, b) => {

    if (a.year > b.year) {
      return 1

    } else if (a.year < b.year) {
      return -1

    } else if (a.year === b.year) {

      if (a.title > b.title) {
        return 1

      } else if (a.title < b.title) {
        return -1
      }

    }

  })
  return sortedByYear

}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  const movieTitle = movies.map(eachMovie => {
    return eachMovie.title
  })

  movieTitle.sort((a, b) => {
    if (a > b) {
      return 1
    } else if (a < b) {
      return -1
    } return 0
  })

  const firstMoviesTitle = movieTitle.slice(0, 20)

  return firstMoviesTitle

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
  };
}
