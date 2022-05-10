// The `movies` array from the file `src/data.js`.

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  return movies.map (movie => movie.director) 
  return movies.filter((movie, index) => movie.indexOf(movie.director) === index)
}

function getAllDirectorsFiltered (movies) {
  let moviesByTittle = movies.map (movie => movie.director)
  let result = moviesByTittle.filter((movie,index) => {
      return moviesByTittle.indexOf(movie) === index;
    })
  return result
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(movies) {
  let moviesFiltered = movies.filter (movie => movie.genre.includes('Drama') && movie.director === `Steven Spielberg`)
  return moviesFiltered.length
}


// function howManyMovies(movies) {
//   movies.reduce ((totalMovies, movie) => {
//     if (movie.genre.includes('Drama') && movie.director === `Steven Spielberg`) {
//       totalMovies += 1 ;
//     } else {
//       totalMovies + 1 ;
//     }
//     return totalMovies
//   }, 0)
// }

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  let averageScoreMovies = movies.reduce ((averageScore, movie) => {
    if (typeof movie.score !== 'number'){
      averageScore = averageScore
    } else {
      averageScore += movie.score
    }
    return averageScore
            }, 0 ) / movies.length  
  return Math.round(averageScoreMovies * 100) / 100 || 0
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore() {}

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
