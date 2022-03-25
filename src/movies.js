// The `movies` array from the file `src/data.js`.
console.log('movies: ', movies);


// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  const getDirectors = movies.map((eachMovie) => {
     return eachMovie.director
  }) 
  return getDirectors
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
    const moviesFromSteven = movies.filter((eachMovie) => {
      const stevenAndDramaMovies = eachMovie.director === 'Steven Spielberg' && eachMovie.genre.includes('Drama')
      return stevenAndDramaMovies
    })
    return moviesFromSteven.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
   
    if (movies.length) {
      const score = movies.reduce((acc, eachMovie) => {
        if (eachMovie.score) {
          return acc + eachMovie.score
        } else {
          return acc
        }
        },0)
        const moviesScore = score / movies.length
        return Number(moviesScore.toFixed(2))
      }
      else {
        return 0
      }
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
    const dramaMovies = movies.filter((eachMovie) => {
      return eachMovie.genre.includes('Drama')   
    })
        if (dramaMovies.length === 0) {
        return 0
      }
  return scoresAverage(dramaMovies)
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  const arrayCopy = JSON.parse(JSON.stringify(movies))

  let sortedYears = arrayCopy.sort((a, b)=> {
    if (a.year === b.year) {
      return a.title.localeCompare(b.title)
    } return a.year - b.year
  }) 
  return sortedYears
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  const titleArrayCopy = JSON.parse(JSON.stringify(movies))
  const title = titleArrayCopy.map((eachMovie) => {
    return eachMovie.title
  })

  const sortedTitle = title.sort()

  return sortedTitle.slice(0, 20)

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
