// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.

const movies = require("./data")

// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  const allDirectors = movies.map((eachMovie) => {
    return eachMovie.director
  })
  return allDirectors
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  const dramaMovies = movies.filter((eachMovie) => {
    return eachMovie.genre.includes('Drama')
  })
  const dramaSpilMovies = dramaMovies.filter((eachDramaMovie) => {
    return eachDramaMovie.director === 'Steven Spielberg'
  })
  return dramaSpilMovies.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  if (movies.length) {
    const allScores = movies.reduce((acc, eachMovie) => {
      if (eachMovie.score) { return acc + eachMovie.score }
      else { return acc }
    }, 0)
    const averageScore = allScores / movies.length
    return Number(averageScore.toFixed(2))
  }
  else { return 0 }
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  const dramaMovies = movies.filter((eachMovie) => {
    return eachMovie.genre.includes('Drama')
  })
  if (dramaMovies.length) {
    const allScores = dramaMovies.reduce((acc, eachDramaMovie) => {
      if (eachDramaMovie.score) { return acc + eachDramaMovie.score }
      else { return acc }
    }, 0)
    const averageDramaScore = allScores / dramaMovies.length
    return Number(averageDramaScore.toFixed(2))
  }
  else { return 0 }
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  const newArr = JSON.parse(JSON.stringify(movies))

  newArr.sort(function (a, b) {
    if (a.title === b.title) { return 0 }
    if (a.title < b.title) { return -1 }
    if (a.title > b.title) { return 1 }
  })

  newArr.sort(function (a, b) {
    if (a.year === b.year) { return 0 }
    if (a.year < b.year) { return -1 }
    if (a.year > b.year) { return 1 }
  })
  return newArr
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  const orderAlph = JSON.parse(JSON.stringify(movies))

  const titleArr = orderAlph.map((eachMovie) => {
    return eachMovie.title
  })

  const finalArr = titleArr.sort()

  return finalArr.slice(0, 20)
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {

}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(movies) {

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
