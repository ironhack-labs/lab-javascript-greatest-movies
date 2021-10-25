// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
const movies = require("./data")

function getAllDirectors() {
  const allDirectors = movies.map(eachDirectors => eachDirectors.director);
  return allDirectors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  const dramSteven = movies.filter(eachSteven => {
    if (eachSteven.director === "Steven Spielberg" && eachSteven.genre.includes ("Drama")) {
      return true
  }
      return false 
})

return dramSteven.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  if(movies.length == 0) {
    return 0
  }
  else{

  const scoresTotal = movies.reduce((acc, eachScore) => {
    if(eachScore.score !== undefined) return acc + eachScore.score; 

    return acc;
  }, 0)

  return Number((scoresTotal / movies.length).toFixed(2));
}
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  if(movies.length == 0) {
    return 0;
  }
  
  const dramaAll = movies.filter(oneMovie => oneMovie.genre.includes('Drama'))
  if (!dramaAll.length) {
    return 0;
  }

  const allScores = dramaAll.map(movieScore => movieScore.score)
  const scoreDrama = allScores.reduce((result, score) => {
  if (typeof score !== "number") {
    score = 0;
    }
      return result + score
    }, 0)
    return Number((scoreDrama / allScores.length).toFixed(2))
  }

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {

  const allYear = movies.sort((movies1, movies2) => {
    if (movies1.year > movies2.year) { 
      return 1;
    } else if (movies1.year === movies2.year) {
      if (movies1.title > movies2.title) 
      return 1;
    } else if (movies1.title < movies2.title){
      return -1;
    }
    else {
      return -1
    }
  })
  return [...allYear];
  }

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  const allYear20 = movies.sort((movies1, movies2) => {
    if (movies1.title > movies2.title) {
      return 1;
    } else {
      return -1;
    }
  })
  const yearAll20 = allYear20.map(movies20 => movies20.title)
  const finalYearAll20 = yearAll20.slice(0,20);
  return [...finalYearAll20];
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
