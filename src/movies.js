// The `movies` array from the file `src/data.js`.
// console.log('movies: ', movies);

const movies = require("./data");


// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(arr) {

  const directors = arr.map(eachMovie => {
    return eachMovie.director
  })

  return directors
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(arr) {

  const spielbergDrama = arr.filter(eachDrama => {

    const directedSpielberg = eachDrama.director === 'Steven Spielberg'
    const dramaMovie = eachDrama.genre.includes('Drama')

    return directedSpielberg && dramaMovie
  })

  return spielbergDrama.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
// function scoresAverage(arr) {

function scoresAverage(arr) {

  if (arr.length === 0) {
    return 0

  } else {
    const filteredScore = arr.filter((movie) => typeof movie.score == 'number')

    const total = filteredScore.reduce((acc, value) => {
      return acc + value.score
    }, 0)

    const averageScore = total / arr.length
    return Number(averageScore.toFixed(2))
  }
}


// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesScore(arr) {

  const dramaMovies = arr.filter((movie) => movie.genre.includes('Drama'))
  const averageDramaMovieScore = scoresAverage(dramaMovies => {
    if (arr.length === 0) {
      return 0

    } else {
      const filteredScore = arr.filter((movie) => typeof movie.score == 'number')

      const total = filteredScore.reduce((acc, value) => {
        return acc + value.score
      }, 0)

      const averageScore = total / arr.length
      return Number(averageScore.toFixed(2))
    }
  })

  
  return averageDramaMovieScore

}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(arr) {

  const copyArr = [...arr]

  const movieYear = copyArr.filter(eachYear => {
    return eachYear.year
  })

  movieYear.sort((a, b) => {
    if (a.year > b.year) {
      return 1
    }
    if (a.year < b.year) {
      return -1
    }
    if (a.year == b.year) {
      return a.title.localeCompare(b.title);
    }
    return 0
  })
  
  return movieYear
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(arr) {


  const copyArr = [...arr]
  const arrayMap = copyArr.map(element => {
    return element.title
  })
  const finalLetter = arrayMap.sort((a, b) => {
    return a.localeCompare(b)
  })
  return finalLetter.slice(0, 20)
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
