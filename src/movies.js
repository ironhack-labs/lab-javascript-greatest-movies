// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple 
// times in the array of directors.

//const movies = require("./data");

// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  let directorsAllList = movies.map((person) => {
    return person.director
  } )
  return directorsAllList
}



// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  let moviesSpielberg = movies.filter((drammov) => {
    return drammov.director === 'Steven Spielberg' && drammov.genre.includes('Drama')
  }) 
  
  return moviesSpielberg.length
}
//  let dramaSpielberg = movies.filter(drammov => drammov.director === 'Steven Spielberg' && drammov.genre ==='Drama'
//  return dramaSpielberg.length



// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  if (movies.length <= 0) return 0;

  avg = movies.map(rate => rate.score)
  totalAvg = avg.reduce((acumulator, score) => {
    return acumulator += score 
    
  })
  let realAvg = totalAvg/movies.length
  return parseFloat(realAvg.toFixed(2))
  
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  let draMovies = movies.filter((drama) => {
  return drama.genre.includes('Drama')
})
if ( draMovies <= 0) {
  return 0;
}
let rateMovie = draMovies.map(rate => rate.score)
let totalRate = rateMovie.reduce((acumulator, score) => {
  return acumulator += score
  })
  let realRate = totalRate / draMovies.length;
  return parseFloat(realRate.toFixed(2))

}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
let yearAllList = movies.map((film) => {
  return film.year 
  })
  return yearAllList.sort() 
  
}
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
let allTitles = movies.map((movie) => {
  return movie.title
  })
  let smallList= allTitles.sort()
  return smallList.slice(0,20)
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
