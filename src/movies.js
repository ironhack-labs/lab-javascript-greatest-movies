// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.

const movies = require("./data")

// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {

  const moviesDirectors = movies.map(function(director){
    
    if (movies.director === director) {
      return movies.director
    }

  })
  return moviesDirectors
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {

  const moviesOneDirector = movies.filter(function(movies) {

  return movies.director === "Steven Spielberg" //devuelvo todas las pelis que tienen a un director
  
  })

  /*if (moviesOneDirector === 0) {

  }*/

  const moviesGenre = moviesOneDirector.filter(function(movies) {

    for (let i = 0; i < movies.genre.length; i++) {
  
      if (movies.genre[i] === "Drama") {
        return true
      }
    
    }
  })

  const counter = moviesGenre.length

  return counter //una array con las pelis de un director con genero drama
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {

  const sumScore = movies.reduce(function(acumulator, current) {
    if (current.score)
    return acumulator + current.score
    else return acumulator
  }, 0) //aqui pongo el 0 para que sea un numero el acumulator y ya se sume como num

  if (movies.length === 0){
    return 0
  }
  
  let average = sumScore / movies.length

  average = average.toFixed(2)
  
  return Number(average) //Desconocia que poner el tipo antes de la variable lo obligaba a ser ese tipo ej: String(0) va a ser si o si "0"
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {

  const moviesGenre = movies.filter(function(movies) {

    for (let i = 0; i < movies.genre.length; i++) {
  
      if (movies.genre[i] === "Drama") {
        return true
      }
    
    }
  })
    const dramaAverageScore = scoresAverage(moviesGenre)

  return dramaAverageScore
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {

  const orderMovies = movies.slice()
  
  orderMovies.sort(function(a,b) {

    if (a.year > b.year) return 1
    if (a.year < b.year) return -1
    if (a.title > b.title) return 1
    if (a.title < b.title) return -1
  })


  return orderMovies
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {

  const newMovies = movies.slice()

  newMovies.sort(function(a,b) {
    if (a.title > b.title) return 1
    if (a.title < b.title) return -1
  })

  const reduceNewMovies = newMovies.reduce(function(acumulator, current){

    return acumulator + current.title
  })


  return reduceNewMovies
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
