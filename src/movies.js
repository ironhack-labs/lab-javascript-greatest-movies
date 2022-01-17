// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(movies) {
    const directors = movies.map((eachDirector) => {
    return eachDirector.director
  })
  return directors
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  const dramaMovies = movies.filter((movie) => {
    return movie.director == "Steven Spielberg" && movie.genre.includes("Drama")
  })
  return dramaMovies.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  if (movies.length === 0) return 0
  const sumScores = movies.reduce((acc, eachMovie) => {
    if(eachMovie.score)
      return acc + eachMovie.score
    else return acc
  }, 0)
  const averageScore = (sumScores / movies.length)
  return Number(averageScore.toFixed(2))
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  const dramaMovies = movies.filter((movie) => {
    return movie.genre.includes("Drama")
  })
  if (dramaMovies.length === 0) return 0
  const sumScores = dramaMovies.reduce((acc, dramaMovies) => {
     if(dramaMovies.score)
      return acc + dramaMovies.score
    else return acc
    }, 0)
    const averageScore = (sumScores / dramaMovies.length)
    return Number(averageScore.toFixed(2))
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {

  const moviesCopy = JSON.parse(JSON.stringify(movies))

  const sortedYears = moviesCopy.sort((a,b) => {

    return a.year - b.year
  })
  
  return sortedYears
}


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {

  const moviesCopy = JSON.parse(JSON.stringify(movies))

  const numberOfTitles = movies.map((eachMovie) => {
    return eachMovie.title
  })

  const sortedTitles = moviesCopy.sort((a,b) => {
    return a.title - b.title
  })


  
return sortedTitles
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
