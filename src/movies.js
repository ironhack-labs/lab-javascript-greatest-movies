// The `movies` array from the file `src/data.js`.
// console.log('movies: ', movies);


// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(arr) {
  const directorsArr = arr.map(eachMovie => eachMovie.director)
  return directorsArr
}  


// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(arr2) {
  const dramaBySpielberg  = arr2.filter(eachMovie2 => {
    return eachMovie2.director === 'Steven Spielberg' && eachMovie2.genre.includes('Drama')
  })
    
  return dramaBySpielberg.length
}



// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(arr3) {
    if (arr3.length === 0) {
      return 0
    } else { 
      const arr3Modified = arr3.filter(noNumber => noNumber.score !== undefined || noNumber.score !== '')
      const sumOfScores = arr3Modified.reduce((acc, eachNumber) => {return acc + eachNumber.score}, 0)
      const averageOfNumbers = (sumOfScores / arr3Modified.length)
      return averageOfNumbers.toFixed(2) * 1
    }
  }




// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(arr4) {
  if (arr4.length === 0) {
    return 0
  } else {
    const arr4Modified = arr4.filter(noNumber2 => noNumber2.score !== undefined && noNumber2.genre.includes('Drama'))
    if (arr4Modified.length === 0) {
      return 0
    } else {    
    const sumOfScores = arr4Modified.reduce((acc, eachNumber) => { return acc + eachNumber.score }, 0)
    const averageOfNumbers = (sumOfScores / arr4Modified.length)
    return averageOfNumbers.toFixed(2) * 1
    }
  }
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(arr5) {
  arr5.sort((a, b) => {
    if (a.year > b.year) {
      return 1
    } else if (a.year < b.year) {
      return -1
    } else if (a.year === b.year) {
      if (a.title > b.title) {
        return 1
      } else if (a.title < b.title)
        return -1
    } 
  })
  const newArr5 = JSON.parse(JSON.stringify(arr5))
  return newArr5
}



// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(arr6) {
  const newArr6 = JSON.parse(JSON.stringify(arr6))
  newArr6.sort((a,b) => {
    if (a.title > b.title) {
      return 1
    } else if (a.title < b.title) {
      return -1
    }
      return 0
  })
  if (newArr6.length > 20) {
    newArr6.splice(20)
  }
    const names = newArr6.map(eachTitle => eachTitle.title)
    return names
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
