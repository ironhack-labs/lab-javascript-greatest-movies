// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(arr) {
  return arr.map((currentElement) => currentElement.director)
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(arr) {
  const spielbergMovies =  arr.filter((currentElement) => {
    return currentElement.director === 'Steven Spielberg' && currentElement.genre.includes('Drama')
  })
  return spielbergMovies.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(arr) {
  if (arr.length === 0 ) {
    return 0
  }
  const total = arr.reduce((acc, currentObject) => {
    if (!currentObject.score) {
      currentObject.score = 0
    }
    return acc + currentObject.score
  }, 0)
  return parseFloat((total / arr.length).toFixed(2))
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(arr) {
  const dramaMovies = arr.filter((currentElement) => currentElement.genre.includes('Drama'))
  const total = dramaMovies.reduce((acc, currentObject) => {
    if (!currentObject) {
      total = 0
    }
    return acc + currentObject.score
  }, 0) 
  if (total > 0) {
    return parseFloat((total / dramaMovies.length).toFixed(2))
  } else {
      return total 
  }
} //Tenho certeza que fiz essa do jeito nais difícil possível mas o importante é que deu certo

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arr) {
  const orderedArr = arr.concat().sort((a, b) => {
    if (a.year === b.year) {
      return a.title.localeCompare(b.title)
    }
   return a.year - b.year
  })
  return orderedArr
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arr) {
  const titleArr = arr.map((currentElement) => {
    return currentElement.title
   })
   const alphabeticArr = titleArr.concat().sort((a, b) => {
     return a.localeCompare(b)
   })
   if (alphabeticArr.length < 20) {
     return alphabeticArr
   } else {
     return alphabeticArr.slice(0, 20)
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
