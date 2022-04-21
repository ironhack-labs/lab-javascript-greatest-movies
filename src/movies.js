


// The `movies` array from the file `src/data.js`.
console.log('movies: ', movies);


// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?


function getAllDirectors() {

const onlyDirectors = movies.map(name=>{
  for(let i=0;i<movies.length;i++)
  // return movies[i].director
  console.log(movies[i].director)
})
}

getAllDirectors()



// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies() {
  let dramaSS = 0
  for (let i=0;i<movies.length;i++)
  if (movies[i].director === "Steven Spielberg" && (movies[i].genre[0] || movies[i].genre[1]) === "drama"){
    dramaSS += 1
  }
  console.log(dramaSS) // da 7, creo que la parte del genre esta mal
}
howManyMovies()

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage() {
  let sum = 0
  let avg = 0
  for(let i=0;i<movies.length;i++)
  sum += movies[i].score
  avg = sum/movies.length
  console.log(avg) // falta redondear a 2 decimales
}
scoresAverage()

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore() 

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear() {}

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
