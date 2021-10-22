// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(arr) {
  const directors = arr.map((item)=>{
    return item.director
  })
  return directors
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(arr) {
  const movies = arr.filter((item)=>{
    return (item.director === 'Steven Spielberg') && (item.genre.includes('Drama'))
  })
  return movies.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(arr) {
  if(arr.length === 0) return 0 //returns 0 if array is empty
  const scores = arr.map((item)=>{ //extracts the scores into an array with map
    return item.score
  })
  const average = scores.reduce((a, b)=>{ //Reduces to get the sum
    return (a + b)
  })
  return Math.round((average / scores.length) * 100) / 100 //Calcs avg rounded to two decimals
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(arr) {
  const dramaMovies = arr.filter((item)=>{ //Filters movies by drama movies
    return item.genre.includes('Drama')
  })
  if(dramaMovies.length === 0) return 0 //returns 0 if there's no drama movies
  const dramaScores = dramaMovies.map((item)=>{ //Extract the score of drama movies
    return item.score
  })
  const dramaAverage = dramaScores.reduce((a, b)=>{ //Reduces to get the sum
    return (a + b) 
  })
  return Math.round((dramaAverage / dramaScores.length) * 100) / 100 //calcs avg rounded to two decimals
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arr) {}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically() {}

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
