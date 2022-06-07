// The `movies` array from the file `src/data.js`.
//console.log('movies: ', movies);

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {

  const moviesCopy = JSON.parse(JSON.stringify(movies))

  const allDirectors = moviesCopy.map(eachDirector => {
    const allDirectorArray = eachDirector.director
    return allDirectorArray
  })

  return allDirectors
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {

  const moviesCopy = JSON.parse(JSON.stringify(movies))

  const directorSpielberg = moviesCopy.filter(eachPerson => {

    return eachPerson.director.includes('Steven Spielberg') && eachPerson.genre.includes('Drama')

  })

  return directorSpielberg.length
}


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {

  const moviesCopy = JSON.parse(JSON.stringify(movies))

  if (moviesCopy.length === 0) return 0;

  const scoreAvg = moviesCopy.reduce((acc, eachScore) => {
    if (eachScore.score !== undefined) {

      return acc + eachScore.score

    } else {

      return acc
    }
  }, 0)

  const newScoreAvg = scoreAvg / moviesCopy.length

  return newScoreAvg.toFixed(2) * 1
}


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {

  const dramaFilm = movies.filter(eachFilm => {
    const newArray = eachFilm.genre.includes('Drama')
    return newArray

  })

  return scoresAverage(dramaFilm)

}



// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {

  const moviesCopy = JSON.parse(JSON.stringify(movies))

  moviesCopy.sort((a, b) => {
    if (a.year < b.year) {
      return -1
    }
    if (a.year > b.year) {
      return 1
    }
    if (a.year === b.year) {
      if (a.title > b.title) {
        return 1
      }
    }
    if (a.year === b.year) {
      if (a.title < b.title) {
        return -1
      }
    }
  }
  )
  return moviesCopy
}



// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  movies.sort(function (a, b) {
    return a.length - b.length
  })
  return movies
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() { }

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(movies) {

  if (movies.length === 0) return null;
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
