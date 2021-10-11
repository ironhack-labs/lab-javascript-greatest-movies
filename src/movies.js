// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.

const movies = require("./data");

// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(arr) {
  let arrayOfDirectors = arr.map((movie) => {
    return movie.director;
  })
  return arrayOfDirectors
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(arr) {
  return arr.filter((movie) => {
    return movie.genre.includes("Drama") && movie.director === "Steven Spielberg"
  }).length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(arr) {
  if(!arr.length) {
    return 0;
  }
  let totalScore = arr.reduce((acc,curr) => {
    if(curr.score === undefined) {
      curr.score = 0;
    }
    let sumOfScores = curr.score + acc
    return sumOfScores
  },0)
  let averageScore = (totalScore / arr.length).toFixed(2);
  return Number(averageScore)
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(arr) {
  let dramaMovieScores = arr.filter((movie) => {
    return movie.genre.includes("Drama")
    
  })
  return scoresAverage(dramaMovieScores)
} 

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arr) {
  let newArr = arr.sort((a,b) => {
      if (a.year < b.year) return -1; 
      if (a.year > b.year) return 1; 
      if (a.year === b.year) {
        if (a.title > b.title) return 1;
        if (a.title < b.title) return -1;
        if (a.title === 0) return 0;
  }
  })
  return newArr //No pase el jest en el apartado de "regresar un nuevo array" según yo ya lo estaba regresando asignandole el sort a newArr.
}



// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arr) {
  let sortMovies = arr.sort((a,b) => {
        if (a.title > b.title) return 1;
        if (a.title < b.title) return -1;
        if (a.title === 0) return 0;
  } );
  let firstMovies = sortMovies.slice(0,20);
  return firstMovies
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
