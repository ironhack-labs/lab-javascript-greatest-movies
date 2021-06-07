// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.

const movies = require("./data");

// How could you "clean" a bit this array and make it unified (without duplicates)?
const copyMovies = JSON.parse(JSON.stringify(movies))

function getAllDirectors(movies) {
  //console.log("Movies? =>", movies)

  const newMovies = movies.map(eachMovie => {
    // console.log("La x? =>>", eachMovie)
    return eachMovie.director
  })
  return newMovies
}
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  const spielbergMovies = movies.filter(x => {
    return x.director === "Steven Spielberg" // tengo las peliculas con director Spielberg
  })

  const dramaMoviesSpielberg = spielbergMovies.filter(y => {
    // return (y.genre.toLowerCase().includes('drama')) no lo reconoce y desconozco el motivo
    return (y.genre.includes("Drama")) // obtengo las peliculas de drama que tienen como director a Steven.
  })
  // console.log(dramaMoviesSpielberg)
  return dramaMoviesSpielberg.length

  if (dramaMoviesSpielberg !== spielbergMovies.director("Steven Spielberg")) {
    return 0
  } else if (dramaMoviesSpielberg == 2) {
    return 2
  }
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  const sumScores = movies.reduce((acc, x) => {
    return acc + x.score
  }, 0)
  //console.log(sumScores)
  return sumScores / movies.length
  //return sumScores.parseFloat(x).toFixed(2);
  //return sumScores.parsefloat(movies.score).toFixed(2)
  // return sumScores.length.toFixed(2)
  // No doy con la manera de reducir el total a 2 decimales
  //Match.round(sumScores)

}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  const allDramaMovies = movies.filter(y => {
    //console.log(dramaMovies)
    return (y.genre.includes("Drama")) // aqui obtengo las peliculas con genero drama con independencia del director
  })

  const sumScoresDrama = allDramaMovies.reduce((acc, x) => {
    return acc + x.score // retorna el total de los scores de las peliculas dramaticas
  }, 0)
  return sumScoresDrama / allDramaMovies.length // retorna la media de los scores de todas las peliculas dramaticas
  if (allDramaMovies.length == 0) {
    return 0
  };
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {

  movies.sort(function (a, b) {
    if (movies.year.a == movies.year.b) {

      return movies.title.sort((a, b) => { return a - b })
    } else
      return a - b
  })

}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically() {
  const moviesCopy = [...movies];

  moviesCopy.sort((a, b) => { return b - a })

  const firtsTwentyMovies = moviesCopy.filter(element => {
    return element.slice([20])
  })

  return orderedMovies.map((movie) => movie.title);
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
