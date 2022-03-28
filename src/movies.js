// The `movies` array from the file `src/data.js`.
// console.log('movies: ', movies);



// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  const directorsArray = movies.map(eachMovie => eachMovie.director)
  return directorsArray
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  let spielbArray = movies.filter(eachMovie => eachMovie.genre.includes('Drama') && eachMovie.director === 'Steven Spielberg')
  return spielbArray.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  const allScores = movies.reduce((acc, eachMovie) => {
    if (eachMovie.score === undefined) {
      allScoresRaw = acc
    } else {
      allScoresRaw = acc + eachMovie.score
    }
    return allScoresRaw
  }, 0)

  if (movies.length === 0) {
    return 0
  }

  const allScoresAverage = allScores / movies.length
  return allScoresAverage.toFixed(2) * 1
}


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  const dramaArray = movies.filter(eachMovie => {
    return eachMovie.genre.includes("Drama")
  })
  let dramaScores = dramaArray.reduce((acc, eachMovieDrama) => {
    return acc + eachMovieDrama.score
  }, 0)
  if (dramaArray.length === 0) {
    return 0
  }
  dramaAverage = dramaScores / dramaArray.length
  return dramaAverage.toFixed(2) * 1
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  const moviesCopy = JSON.parse(JSON.stringify(movies))
  moviesCopy.sort((a, b) => {
    if (a.year > b.year) {
      return 1
    } else if (a.year < b.year) {
      return -1
    } else if (a.year === b.year) {
      if (a.title > b.title) {
        return 1
      } else {
        return -1
      }
    }
  })

  return moviesCopy

}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  const moviesCopy = JSON.parse(JSON.stringify(movies))
  moviesCopy.sort((a, b) => {
    if (a.title > b.title) {
      return 1
    } else {
      return -1
    }
  })
  let onlyTitles = moviesCopy.map(eachMovie => eachMovie.title)

  let only20titles = onlyTitles.splice(0, 20)

  return only20titles

}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {
  const moviesCopy = JSON.parse(JSON.stringify(movies))
  let minutedFilmArr = []
  let minutedFilm = movies.forEach(eachFilm => {
    if (eachFilm.duration.includes('h')) {
      let duration = eachFilm.duration.split("")

      let hours = duration[0].substring(0, duration[0].length - 1)
      hoursToMins = hours * 60

      let minutes = (duration[1].substring(0, duration[1].length - 3)) * 1

      let totalMinutes = hoursToMins + minutes


      minutedFilmObj = {
        ...eachFilm,
        duration: totalMinutes
      }
      minutedFilmArr.push(minutedFilmObj)

    }

    return minutedFilmArr
    // const minutedTimeArray = moviesCopy.map(eachFilm)
  });

}



// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {
  const moviesCopy = JSON.parse(JSON.stringify(movies))
  moviesCopy.sort((a, b) => {
    if (a.year === b.year) {
      const allScores = moviesCopy.reduce((acc, eachMovie) => {
        if (eachMovie.score === undefined) {
          allScoresRaw = acc
        } else {
          allScoresRaw = acc + eachMovie.score
        }
        yearAvg = allScoresRaw
        return allScoresRaw
      }, 0)
    }
  }
  )
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
