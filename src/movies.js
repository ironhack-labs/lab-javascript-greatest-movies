// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors (arr) {
  const allDirectors = arr.map((obj) => obj.director)
  return allDirectors
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(arr) {
const dramaMovies = arr.filter(obj => obj.genre.includes('Drama') && obj.director === 'Steven Spielberg')
return dramaMovies.length 
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(arr) {
const average = arr.reduce((acc, val) => (acc + val) / arr.length, 0)
console.log(average)
return average
} 


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(arr) {
  const dramaFilms = arr.filter((obj) => obj.genre.includes('Drama'))
  const score = dramaFilms.length/arr.length
  score.toFixed(2)
  return score
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arr) {
for (let i=0; i<arr.length; i++) {
  for (j=0; j<arr[i].length; j++) {
    const scores = arr[i][j].score
    } 
  } 
  return scores
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arr) {
  for (let i=0; i<arr.length-1; i++) {
    return arr[i].title.sort()
  } 
  if (arr.length<20) {
    return arr[i]
  }
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
