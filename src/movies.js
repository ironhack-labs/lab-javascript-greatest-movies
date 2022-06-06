// The `movies` array from the file `src/data.js`.
// console.log('movies: ', movies);

const movies = require("./data.js");


// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  const moviesCopy = JSON.parse(JSON.stringify(movies))
  allDirectors = moviesCopy.map(eachMovie => {
    const director = eachMovie.director
    return director
  })
  return allDirectors
}



// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  const allSpilbergDrama = movies.filter(eachMovie => {
    const spilbergMovies = eachMovie.director === 'Steven Spielberg'
    const spilbergDramas = eachMovie.genre.includes('Drama')
    return spilbergMovies && spilbergDramas
  })
  return allSpilbergDrama.length
}



// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  const allScore = movies.reduce((acc, eachMovie) => {
    const sum = acc + eachMovie.score
    if (eachMovie.score === undefined) {
      return acc
    }
    return sum
  }, 0)
  const avg = allScore / movies.length
  if (movies.length === 0) {
    return 0
  }
  return parseFloat(avg.toFixed(2))
}



// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArr) {
  const allDramaMovies = moviesArr.filter(eachMovie => {
    const drama = eachMovie.genre.includes('Drama')
    return drama
  })
  const avgDrama = scoresAverage(allDramaMovies)
  return avgDrama
}



// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arr) {
  let arrCopy = JSON.parse(JSON.stringify(arr))
  arrCopy.sort(function compare(a, b) {
    if (a.year < b.year) {
      return -1;
    }
    if (a.year > b.year) {
      return 1;
    }
    if(a.year === b.year){
      if(a.title > b.title){
        return 1
      }return -1
    }
  })  
  return arrCopy
}
// orderByYear(movies)


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically() { 
  
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() { }

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() { }



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
