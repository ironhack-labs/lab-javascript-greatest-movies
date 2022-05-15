// The `movies` array from the file `src/data.js`.
//console.log('movies: ', movies);

//const movies = require("./data");


// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

/*
//RESUELTO CON FOR I

function getAllDirectors(movies) {
  const directors = []
  for ( let i = 0 ; i < movies.length; i++){
    directors.push(movies[i].director)
  }
return directors
}

//RESUELTO CON FOR OF

function getAllDirectors(movies) {
  const directors = []
  for (let movie of movies){
    directors.push(movie.director)
  }
  return directors


//RESULTADO CON MAP

  
function getAllDirectors(movies) {
  movies.map(function (movie){
    return movie.director
  }) 
}*/

//MAP CON FLECHA

function getAllDirectors(movies) {
  return movies.map(movie => movie.director)
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  const spielbergMovies = movies.filter(movie => {
    return movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
})
  return spielbergMovies.length
}


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
/*function scoresAverage(movies) {
  const scores = movies.map((movie) => movie.score
  )
  const sumScores = scores.reduce((sum, score) => {
  return sum + score
  }, 0)
  const result = sumScores/scores.length
  return result.toFixed(2)
}*/

function scoresAverage(movies) {
  const sumScores = movies.reduce((avg, movie) => {
    if (typeof movie.score !== "number"){
      return avg
    } else {
    return avg + movie.score / movies.length
    }
  }, 0)
  return parseFloat(sumScores.toFixed(2))
}


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  const dramaMovies = movies.filter(movie=> movie.genre.includes("Drama")
  )
  const totalScores = dramaMovies.reduce((sum, movie) =>{
    return sum + movie.score / dramaMovies.length
  }, 0)
  return Number(totalScores.toFixed(2))
}




// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  console.log(movies.slice().sort(function( a, b){
    return (a.year - b.year)
  }))
}
orderByYear(movies)

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  const moviesByName = movies.map(movie => movie.title)
  return moviesByName.sort()
  }

/* Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  const moviesByName = movies.map(movie => movie.title)
  if (moviesByName.length > 19){
    return moviesByName.slice(19).sort
  }
  }*/


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
