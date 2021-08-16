// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
// const movies = require('./data.js')



function getAllDirectors(movies) {
  let directors = movies.map(theDirectors => {
    let directorName = theDirectors.director
    return directorName
  })
  return directors
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  let spielberg = movies.filter(theBest => theBest = theBest.director === 'Steven Spielberg' && theBest.genre.includes('Drama'))

  return spielberg.length
}
// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  if (movies.length === 0) {
    return 0
  }
  let average = movies.reduce((accumulator, current) => {
    if (current.score) {
      return (accumulator + current.score)
    } else {
      return accumulator
    }
  }, 0)
  return Number((average / movies.length).toFixed(2))
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  let dramaMovies = movies.filter(drama => drama = drama.genre.includes('Drama'))

  if (dramaMovies.length === 0) {
    return 0
  }
  let averageDrama = movies.reduce((accumulator, current) => {
    if (current.genre.includes('Drama')) {
      return (accumulator + current.score)
    } else {
      return accumulator
    }
  }, 0)
  return Number((averageDrama / dramaMovies.length).toFixed(2))
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  let orderedMovies = [...movies]
  orderedMovies.sort((a, b) => b.year - a.year)
  return orderedMovies.reverse()
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  let titles = movies.map(theTitle => {
    titleName = theTitle.title
    return titleName
  }).sort().slice(0, 20)

  return titles
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {
  let minutes = movies.map(theTime => {
    theTimeToMinutes = theTime.duration
    return theTimeToMinutes
  })

  let inParts = minutes.split(' ')
  // let total = 
  return inParts
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
