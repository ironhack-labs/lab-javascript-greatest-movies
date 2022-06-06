// The `movies` array from the file `src/data.js`.
/*console.log('movies: ', movies);*/

/*const movies = require("./data")*/

/*const movies = require("./data");*/


// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  const uniqueDirectors = movies.map(eachMovie => {
    const directors = eachMovie.director
    return directors
  })
  return uniqueDirectors
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  if (movies.length === 0) {
    return 0
  }

  const spielbergDramaMovies = movies.filter(eachMovie => {
    return eachMovie.director === 'Steven Spielberg' && eachMovie.genre.includes('Drama')
  })
  return spielbergDramaMovies.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  if (movies.length === 0) {
    return 0
  }
  const avgScore = movies.reduce((acc, eachMovie) => {
    if (!eachMovie.score) {
      return acc + 0
    }
    return acc + eachMovie.score
  }, 0)
  return (avgScore / movies.length).toFixed(2) * 1

}


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  
  const onlyDrama = movies.filter(eachMovie =>{
    const drama = movies.genre.includes("Drama")
  })
 }

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  const copyMovies = JSON.parse(JSON.stringify(movies))
  const orderedMovies = copyMovies.sort(function (a, b) {
    if (a.year > b.year) { return 1 }
    else if (a.year < b.year) { return -1 }
    else if (a.year === b.year) {
      if (a.title > b.title) { return 1 }
      else if (a.title < b.title) { return -1 }
    }
  })
  return orderedMovies;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  const moviesCopy = JSON.parse(JSON.stringify(movies))
  /*if (moviesCopy.length<19){return moviesCopy}
  if (moviesCopy.length>20){return moviesCopy.slice(0, 20)}*/
  const moviesOrdered = moviesCopy.sort((a, b) => {
    if (a.title > b.title) {
      return 1
    } else if (a.title < b.title) {
      return -1
    } else {
      return 0
    }
  })
  if (moviesOrdered.length > 20) {
    moviesOrdered.splice(20)
  }
  const allTitles = moviesCopy.map(ttls => ttls.title)
    return allTitles
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
