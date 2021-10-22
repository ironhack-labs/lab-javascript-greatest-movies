// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

const movies = require("./data")

function getAllDirectors(movies) {
  const allDirector = movies.map(elements => elements.director)
  return allDirector
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  const dramaStevSp = movies.filter(type => type.director === 'Steven Spielberg' && type.genre.includes('Drama'))
  return dramaStevSp.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  if (!movies.length) {
    return 0
  }
  let allScores = movies.map(grades => grades.score)

  let totalScore = allScores.reduce(function (result, score) {
    if (typeof score !== "number") {
      score = 0;
    }
    return result + score
  }, 0)
  return Number((totalScore / allScores.length).toFixed(2))
}
// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  if (!movies.length) {
    return 0
  }
  let allDrama = movies.filter(oneMovie => oneMovie.genre.includes('Drama'))
  if (!allDrama.length) {
    return 0
  }
  let allScores = allDrama.map(movieScore => movieScore.score)
  let scoreDrama = allScores.reduce(function (result, score) {
    if (typeof score !== "number") {
      score = 0;
    }
    return result + score
  }, 0)
  return Number((scoreDrama / allScores.length).toFixed(2))
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(movies) {
  let sortYear = movies.slice().sort(function (movie1, movie2) {
    if (movie1.year > movie2.year) {
      return 1
    } else if (movie1.year === movie2.year) {
      if (movie1.title > movie2.title) {
        return 1
      } else {
        return -1
      }
    } else {
      return -1
    }
  })
  return sortYear
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  let sortTitle = movies.sort(function (movie1, movie2) {
    if (movie1.title < movie2.title) {
      return -1
    } else {
      return 1
    }
  })
  let myTwenty = sortTitle.map(movieTitle => movieTitle.title)
  let onlyTwenty = myTwenty.slice(0, 20);
  return onlyTwenty
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

