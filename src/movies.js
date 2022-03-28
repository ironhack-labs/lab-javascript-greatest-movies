// The `movies` array from the file `src/data.js`.

const movies = require("./data")


// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  const allDirectorsArr = movies.map(eachMovie => {
    return eachMovie.director
  })
  return allDirectorsArr
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  const stevenSpielbergMovies = movies.filter(eachMovie => {
    return eachMovie.director === "Steven Spielberg" && eachMovie.genre.includes("Drama")
  })
  return stevenSpielbergMovies.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  if (movies.length === 0) {
    return 0
  }
  else {
    const totalScore = movies.reduce((acc, eachMovie) => {
      if (!eachMovie.score) {
        return acc + 0
      }
      else {
        return acc + eachMovie.score
      }
    }, 0)
    const moviesAvgScore = totalScore / movies.length
    return 1 * (moviesAvgScore.toFixed(2))
  }

}


/*const totalScore = movies.reduce((acc, eachMovie) => {
  return acc + (eachMovie.score || 0) 
}, 0)
const moviesAvgScore = totalScore / movies.length
return 1 * (moviesAvgScore.toFixed(2))*/


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  const dramaMovies = movies.filter(eachMovie => {
    return eachMovie.genre.includes("Drama")
  })
  return scoresAverage(dramaMovies)
}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  const moviesCopy = JSON.parse(JSON.stringify(movies))
  const moviesByYear = moviesCopy.sort((a, b) => {
    if (a.year === b.year) {
      let fa = a.title
      let fb = b.title

      if (fa < fb) {
        return -1
      }

      if (fa > fb) {
        return 1
      }
      return 0
    }
    return a.year - b.year
  })
  return moviesByYear
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  const moviesCopy = JSON.parse(JSON.stringify(movies))
  const moviesByName = moviesCopy.sort((a, b) => {
    const fa = a.title
    const fb = b.title

    if (fa < fb) {
      return -1
    }

    if (fa > fb) {
      return 1
    }
    return 0

  })

  const moviesListByName = moviesByName.map(eachMovie => {
    const movie = eachMovie.title
    return movie
  })
  return moviesListByName.slice(0, 20)

}





// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {
  const moviesDurationChange = movies.map(eachMovie => {
    const durationArr = eachMovie.duration.slice(0, eachMovie.duration.length - 3)
    const durationArray = durationArr.split('h ')
    const durationInMinutes = parseInt(durationArray[0]) * 60 + parseInt(durationArray[1])
    const movie = {
      title: eachMovie.title,
      year: eachMovie.year,
      director: eachMovie.director,
      duration: durationInMinutes,
      genre: eachMovie.genre,
      score: eachMovie.score
    }
    return movie
  })
  return moviesDurationChange
}

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

