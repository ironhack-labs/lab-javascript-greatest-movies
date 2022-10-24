// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {

  const allDirectors = moviesArray.map((eachDirector) => {
    return eachDirector.director
  })

  return allDirectors
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct
function howManyMovies(moviesArray) {
  const stevenS = moviesArray.filter(eachSteven => {
    return eachSteven.director.includes('Steven Spielberg') && eachSteven.genre.includes('Drama')
  })
  return stevenS.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {

  const sumScore = moviesArray.reduce((acc, eachScore) => {
    if (!eachScore.score) {
      return acc
    }
    else {
      return acc + eachScore.score
    }
  }, 0)

  if (moviesArray.length === 0) return 0;

  const media = sumScore / moviesArray.length

  const mediaFixed = media.toFixed(2)

  return Number(mediaFixed)

}
// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {

  const dramaMovies = moviesArray.filter(eachMovie => {
    if (eachMovie.genre.includes('Drama')) {
      return true;
    }
  })
  return scoresAverage(dramaMovies)

}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {

  const moviesArrayCopy = JSON.parse(JSON.stringify(moviesArray))

  const ordermovies = moviesArrayCopy.sort((a, b) => {

  })
  return ordermovies
}




// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const moviesArrayCopy = JSON.parse(JSON.stringify(moviesArray))

  const ordermovies = moviesArrayCopy.sort((a, b) => {

  })
  return ordermovies


}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) { }

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) { }
