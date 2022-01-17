// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.

const movies = require("./data");

// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  const alldirectors = movies.map((eachmovie) => {
    return eachmovie.director
  })

  // console.log(alldirectors)
  return alldirectors
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  const manyMovies = movies.filter((eachmovie) => {
    return eachmovie.director === `Steven Spielberg` && eachmovie.genre.includes(`Drama`)

    // if (manyMovies.length === 0) {  }

    // console.log(manyMovies)
  })
  return manyMovies.length
}
// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  if (movies.length === 0) { return 0 }
  const scoAv = movies.reduce((acc, movie) => {
    let scor = acc + movie.score
    return scor
  }, 0)

  let scoCal = scoAv / movies.length
  return Number(scoCal.toFixed(2))
}


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  const dramMov = movies.filter((eachMovie) => {
    return eachMovie.genre.includes(`Drama`)
  });

  if (dramMov.length === 0) { return 0 }

  const draAv = dramMov.reduce((acc, eachMovie) => {
    let dramAv = acc + eachMovie.score
    return dramAv
  }, 0)
  let dramaCal = draAv / dramMov.length

  return Number(dramaCal.toFixed(2))
}
//const daM = daMo.reduce((acc, eachdrama => {
//return acc + eachScore
//}, 0))

//return scoAv / movies.length



// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  const moviesCopy = JSON.parse(JSON.stringify(movies))
  moviesCopy.sort(function (a, b) {
    if (b.title < a.title) { return 1 }
    if (b.title > a.title) { return -1 }
    if (b.title === a.title) { return 0 }
  })
  moviesCopy.sort(function (a, b) {
    return a.year - b.year

  })
  return moviesCopy
  // console.log(moviesCopy)
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesCopy) {
  const moviesCop2y = JSON.parse(JSON.stringify(moviesCopy))
  const onlytitle = moviesCop2y.map((eachtitle) => {
    return eachtitle.title
  })
  onlytitle.sort()
  return onlytitle.slice(0, 20)
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
