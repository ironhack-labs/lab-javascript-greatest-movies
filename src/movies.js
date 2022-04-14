// The `movies` array from the file `src/data.js`.
//console.log('movies: ', movies);

const movies = require("./data");


// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(array) {
  let directors = array.map((movies) => movies.director)
  return directors
}



// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(arr) {
  let stevenMovies = arr.filter((movie) => movie.genre.includes('Drama') && movie.director === "Steven Spielberg");
  return stevenMovies.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(arr) {
  if (arr.length === 0) {
    return 0
  }
  let average = arr.reduce(function(acc, value) {
    if(!value.score){
      value.score = 0 
    }
  return acc + value.score;
  }, 0);
  return Number((average / arr.length).toFixed(2))
}

console.log(scoresAverage(movies))

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(arr) {}
//   let dramaCheck = arr.filter((movie) => movie.genre.includes('Drama'))
//   if(dramaCheck){
//     arr.reduce(function(acc, value){
//       return acc + value.dramaCheck;
//     }, 0)
//   }
//   return Number((dramaCheck / arr.length)).toFixed(2)
// }
 // I don't want to send like this, but I can't find a solution to solve this
//console.log(dramaMoviesScore(movies))




// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arr) {
  const ordered = arr.sort(function(a, b) {
  if (a.year < b.year) return -1;
  if (a.year > b.year) return 1;
  if (a.year === b.year) return 0;
   // a.title.localeCompare(b.title) ??
  })
  return ordered
}


//console.log(orderByYear(movies))


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arr) {
  let sortTitles = arr.sort(function(a, b) {
    if (a.title < b.title) return -1;
    if (a.title > b.title) return 1;
    if (a.title === b.title) return 0;
    })
    return [sortTitles]
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
