// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {

  const directors = movies.map((eachMovie) => {
    return eachMovie.director
  })
  return directors
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {

  const spielberg = movies.filter((eachMovie) => {
    return eachMovie.director === 'Steven Spielberg' && eachMovie.genre.includes('Drama')

  })
  return spielberg.length

}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {

  if (movies.length === 0) return 0

  const aveScore = movies.reduce((acc, eachMovie) => {
    if (eachMovie.score === undefined) return acc
    return acc + eachMovie.score

  }, 0)

  return Number((aveScore / movies.length).toFixed(2))

}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {

  const moviesDrama = movies.filter((eachMovie) => {
    return eachMovie.genre.includes('Drama')
  })

  return scoresAverage(moviesDrama)

}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  const order = JSON.parse(JSON.stringify(movies))

  order.sort(function (a, b) {

    if (a.year !== b.year) {
      return a.year - b.year
    } else {
      if (a.title < b.title) {
        return -1
      } else if (a.title > b.title) {
        return 1
      } else {
        return 0
      }
    }
  })
  return order
}


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {

  const arrTitle = movies.map((eachMovie) => {
    return eachMovie.title
  })

  arrTitle.sort(function (a, b) {
    if (a < b) {
      return -1
    } else if (a > b) {
      return 1
    } else {
      return 0
    }

  })



  if (arrTitle.length < 20) {
    return arrTitle

  } else {
    const cutArray = arrTitle.splice(0, 20)
    return cutArray
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
  };
}
