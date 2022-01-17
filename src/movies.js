// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.

const movies = require("./data");

// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(arr) {
  const directorArr = arr.map((arrElement) => {
    return arrElement.director
  })

  return directorArr
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(arr) {
  const spielbergDramas = arr.filter(arrElement => {
    return arrElement.director === 'Steven Spielberg' && arrElement.genre.includes('Drama')
  })

  return spielbergDramas.length

}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(arr) {
  if (arr.length) {
    const ratingSum = arr.reduce((acc, arrElement) => {
      if (arrElement.score) {
        return acc + arrElement.score
      }
      else { return acc }

    }, 0)
    const ratingAvg = ratingSum / arr.length

    return Number(ratingAvg.toFixed(2))
  }
  else { return 0 }
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(arr) {
  if (arr.length) {

    const dramas = arr.filter(arrElement => {
      return arrElement.genre.includes('Drama')
    })


    const dramasRatingSum = dramas.reduce((acc, dramasElement) => {
      if (dramasElement.score) {
        return acc + dramasElement.score
      }
      else { return acc }

    }, 0)

    if (dramas.length) {
      const dramasRatingAvg = dramasRatingSum / dramas.length
      return Number(dramasRatingAvg.toFixed(2))
    }
    else { return 0 }


  }
  else { return 0 }


}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arr) {

  const arrOrdered = JSON.parse(JSON.stringify(arr))

  arrOrdered.sort(function (a, b) {

    if (a.title > b.title) { return 1 }
    if (a.title < b.title) { return -1 }
    if (a.title === b.title) { return 0 }
  })

  arrOrdered.sort(function (a, b) {
    if (a.year > b.year) { return 1 }
    if (a.year < b.year) { return -1 }
    if (a.year === b.year) { return 0 }
  })


  return arrOrdered
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arr) {

  const arrOrdered = JSON.parse(JSON.stringify(arr))

  const titleArr = arrOrdered.map((arrOrderedElement) => {
    return arrOrderedElement.title
  })

  titleArr.sort()

  const finalArr = titleArr.slice(0, 20)


  return finalArr
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
