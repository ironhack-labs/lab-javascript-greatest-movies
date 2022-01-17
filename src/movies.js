// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.

const movies = require("./data");

// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {const newMovies = movies.map((eachValue) => {
  return eachValue.director
})
return newMovies
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {const filterSpil = movies.filter(eachMovie => { 
   return eachMovie.director === 'Steven Spielberg' && eachMovie.genre.includes('Drama') 
  })
  return filterSpil.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  if (movies.length === 0) {return 0}
  const aveScores = movies.reduce((acc, eachScore) => {
  let getScore = acc + eachScore.score
  return getScore
}, 0)
let calcScore = aveScores / movies.length 
  console.log( Number(calcScore.toFixed(2)))
}


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  const filterDrama = movies.filter(eachMovie => { 
    return eachMovie.genre.includes('Drama')
  })
  if (filterDrama.length === 0) {return 0}
    const filterDramaScore = filterDrama.reduce((acc, filterEachDrama) => {
    let dramaScore = acc + filterEachDrama.score
    return dramaScore
    
  }, 0)
  let calcDramaScore = filterDramaScore/filterDrama.length 
    return Number(calcDramaScore.toFixed(2))
  }

//  const dramaScores = movies.reduce((acc, movie) => {
//   if (movie.genre.includes('Drama')) {
//   let getScore = (acc + movie.score)
//   return getScore
// }
//  }, 0)
//  let totalDrama = dramaScores/movies.length
// return Number(totalDrama.toFixed(2))


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  const moviesCopy = JSON.parse(JSON.stringify(movies))
  moviesCopy.sort(function (a, b) {
      if (b.title < a.title) {return 1}
      if (b.title > a.title) {return -1}
      if (b.title === 0) {return 0}
    })
    moviesCopy.sort(function (a, b) {
      return a.year - b.year
  })
 return moviesCopy
}
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesCopy) {
  const moviesCopyAlph = JSON.parse(JSON.stringify(moviesCopy))
  const codeCopyAlph = moviesCopyAlph.map((eachValue) => {
    return eachValue.title 
  })
  moviesCopyAlph.sort()
  return codeCopyAlph.slice(0,20)
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
