
const movies = require("./data");


// Iteration 1: All directors? - Get the array of all directors.

// // How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(movies) {
  return movies.map(function(movie){
    return movie.director;
  })
}

// console.log(getAllDirectors(movies))



// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(movies) {
  const dramaMovies = movies.filter(function(movie){
    return movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
  })
  return dramaMovies.length
}

// console.log(howManyMovies(movies))


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  if(movies.length === 0) {
    return 0
  }  
  const average = movies.reduce(function(acc, movie){
    if(!movie.score) {
      return acc
    } else {
        return acc + movie.score  
    }
  }, 0)
  return parseFloat((average / movies.length).toFixed(2))
}


// console.log(scoresAverage(movies))


// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesScore(movies) {
  let dramaMovies = movies.filter(function(movie){
    return movie.genre.includes("Drama")
  })
  if(dramaMovies.length === 0) {
    return 0
  }
   let dramaMoviesReduced = dramaMovies.reduce(function(acc, movie){
    if(movie.score == " "){
     return acc + 0
    } 
    else {
    return acc + movie.score  
    }
  }, 0)
  return parseFloat((dramaMoviesReduced / dramaMovies.length).toFixed(2))
}

// console.log(dramaMoviesScore(movies));



// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(someArr) {
  let yearArr = someArr.sort(function(a, b) {
    if(b.year < a.year) {
      return 1
    } else {
      return -1
    }
  })
  return yearArr.map(function(movie){
    return movie
  })
}

// console.log(orderByYear(movies))



// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(someArr) {
  let moviesTitle = someArr.map(function(movie) {
    return movie.title
  })
  let moviesSorted = moviesTitle.sort(function(a, b) {
    if(b < a) {
      return 1
    } else {
      return -1
    }
  })
    return moviesSorted = moviesSorted.slice(0,20)
  }

  // console.log(orderAlphabetically(movies))


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
