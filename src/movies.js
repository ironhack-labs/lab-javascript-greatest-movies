// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  const directors = movies.map((dir) => {
    return dir.director
  })
  return directors
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
//To check if a string is inside an array
// genre.includes("drama")
function howManyMovies(movies) {
  const dramasMovies = movies.filter((drama)=>{
    if (drama.director.includes("Steven Spielberg")){
      return drama.genre.includes("Drama")
    }
  })
  return dramasMovies.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  if (movies.length === 0){
    return 0
  }
  else{
    const scoreMovies = movies.reduce((accumulator, currentValue) => {
      if(currentValue.score){
        return accumulator + currentValue.score
      } else {
        return accumulator
      }
    }, 0)
    const med = scoreMovies/movies.length
    const roundes = med.toFixed(2)
    return Number(roundes)
  }
  
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  const dramaMovies = movies.filter((drama)=>{
    return drama.genre.includes("Drama")
  })
  const scoresDrama = scoresAverage(dramaMovies)
  return scoresDrama
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {

  const sortedYear = movies.sort(movies.year)
  return sortedYear
}

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
