// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {

  const directorsArray = moviesArray.map((eachMovie) => {
    return eachMovie.director
  })
  return directorsArray
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {

  const dramaMovies = moviesArray.filter((eachMovie) => {
    return eachMovie.director.includes('Steven Spielberg') && eachMovie.genre.includes('Drama')
  })
  const totalDramaMovies = dramaMovies.length

  return totalDramaMovies
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {

  if (moviesArray.length === 0) {
    return 0
  }

  const sumRatings = moviesArray.reduce((acc, eachMovie) => {
    if (eachMovie.score === undefined) {
      return acc
    } else {
      return acc + eachMovie.score
    }
  }, 0)

  return Number((sumRatings / moviesArray.length).toFixed(2))
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {

  const dramaMovies = moviesArray.filter((eachMovie) => {
    return eachMovie.genre.includes('Drama')
  })

  const totalDramaMovies = dramaMovies.length

  if (dramaMovies.length === 0) {
    return 0
  }

  const dramaScores = dramaMovies.reduce((acc, eachMovie) => {
    return acc + eachMovie.score
  }, 0)

  return Number((dramaScores / totalDramaMovies).toFixed(2))
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {

  const moviesArrayCopy = JSON.parse(JSON.stringify(moviesArray))

  moviesArrayCopy.sort((a, b) => {
    if (a.title > b.title) {
      return 1;
    }
    if (a.title < b.title) {
      return -1;
    }
    return 0;
  });
  moviesArrayCopy.sort((a, b) => {
    if (a.year > b.year) {
      return 1
    }
    if (a.year < b.year) {
      return -1
    }
    return 0
  });
  return moviesArrayCopy
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {

  const moviesArrayCopy = JSON.parse(JSON.stringify(moviesArray))
  const titlesArray = moviesArrayCopy.map((eachMovie) => {
    return eachMovie.title
  })

  const sortedTitles = titlesArray.sort()


  return sortedTitles.slice(0, 20)

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
