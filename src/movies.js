// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  return movies.map(movie => movie.director)
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  if(movies[0] === undefined) {
    return 0;
  } else if (!movies.map(movie => movie.director).includes("Steven Spielberg")){
    return 0;
  } else {
    return movies.map(movie => movie.director === "Steven Spielberg" && movie.genre.includes('Drama')).reduce((acc,value) => acc + value)
  }
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  if (movies[0] === undefined) {
    return 0;
  } else {
    return Number((movies.map(movie => movie.score).filter(Number).reduce((acc,value) => (acc+value))/movies.length).toFixed(2))
  }
}
// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  if (movies.filter(movie => movie.genre.includes('Drama'))[0] === undefined) {
    return 0;
  } else {
    return Number((movies.filter(movie => movie.genre.includes('Drama')).map(movie => movie.score).reduce((acc,value) => acc+value)/movies.filter(movie => movie.genre.includes('Drama')).length).toFixed(2))
  }
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  const moviesList = movies.slice()
  const newArray = moviesList.sort((a,b) => {
    if (a.year === b.year) {
      return a.title.localeCompare(b.title) - b.title.localeCompare(a.title)
    } else {
      return a.year - b.year
    }
  })
  return newArray
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
