// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(array) {
  const allDirectors = array.map((eachMovie) => {
    const allMoviesDirectors = eachMovie.director
    return allMoviesDirectors
  })
  return allDirectors
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(spielbergArray) {
  let countingArray = 0
  const SpielbergMovies = spielbergArray.filter((eachMovie) => {
    if (eachMovie.director === 'Steven Spielberg' && eachMovie.genre.includes('Drama'))

      countingArray++


  })
  return countingArray
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(scoreArray) {
  if (scoreArray.length === 0)
    return 0
  const scoreMovies = scoreArray.reduce((acc, eachMovie) => {
    return (acc + eachMovie.score)
  }, 0)

  return parseFloat((scoreMovies / scoreArray.length).toFixed(2))
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(dramaScoreArray) {
  const dramaMovies = dramaScoreArray.filter((eachMovie) => {

    return eachMovie.genre.includes('Drama')
  })
  return scoresAverage(dramaMovies)
}





// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(orderArray) {
  const moviesCopy = JSON.parse(JSON.stringify(orderArray))

  moviesCopy.sort((a, b) => {
    let YearA = a.year
    let YearB = b.year
    if (a.year < b.year) {
      return -1
    } if (a.year === b.year)
      return -1
  })
  return moviesCopy
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(orderAphabetic) {
  const alphabeticMovies = orderAphabetic.filter((eachMovie) => {
    const twentyMovies = (JSON.stringify(eachMovie.title.slice(0, 19)))
    if (eachMovie.title.length > 20)
      return (JSON.stringify(alphabeticMovies))

  })
  return orderByYear(orderAphabetic)

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
