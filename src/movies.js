// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.

const movies = require("./data")

function getAllDirectors() {
  const directors = movies.map(function (film) {
    return film.director
    })
  return directors
  }
  console.log(getAllDirectors(movies).length) // => 250

// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectorsUniq() {
  const directors = movies.map(function (film) {
    return film.director
    }).reduce(function(a,b){
      if (a.indexOf(b) < 0 ) a.push(b)
      return a
    },[])
  return directors
  }
console.log(getAllDirectorsUniq(movies).length) // => 149


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies() {
  const dramas = movies.filter(function (film) {
    return film.genre.indexOf('Drama') !== -1
      })
  const dramasOfSpielberg = dramas.filter(function (film) {
    return film.director === 'Steven Spielberg'
  })
  return dramasOfSpielberg.length
}
console.log(howManyMovies(movies)) // => 4

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage() {
  const sumOfScores = movies.reduce(function (acc, film) { 
    return acc + film.score
  }, 0)
  return (sumOfScores / movies.length).toFixed(2)
}
console.log(scoresAverage(movies)) // => 8.31

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore() {
  const dramas = movies.filter(function (film) {
    return film.genre.indexOf('Drama') !== -1
  })
    const scoreDramas = dramas.reduce(function (acc, film) { 
      return acc + film.score
    }, 0)
  return (scoreDramas / movies.length).toFixed(2)
}
console.log(dramaMoviesScore(movies)) // => 6.15

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear() {
  const moviesSorted = movies.slice()
  moviesSorted.sort(function(a, b) { //movies sorted by titles
    const titleA = a.title.toUpperCase()
    const titleB = b.title.toUpperCase()
    if (titleA < titleB) {
      return -1
    }
    if (titleA > titleB) {
      return 1
    }
    return 0
  }).sort(function(a, b) {
  return a.year - b.year}) // . sorted by years
  return moviesSorted
}
//console.log(orderByYear(movies))

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically() {
  const titlesSorted = movies.map(function(film) {
    return film.title
  }).sort(function(a, b) {
    const titleA = a.toUpperCase()
    const titleB = b.toUpperCase()
    if (titleA < titleB) {
      return -1
    }
    if (titleA > titleB) {
      return 1
    }
    return 0
  }).slice(0, 20)
  return titlesSorted
}
//console.log(orderAlphabetically(movies))

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
