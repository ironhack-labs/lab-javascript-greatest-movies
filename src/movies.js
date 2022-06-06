// The `movies` array from the file `src/data.js`.
//console.log('movies: ', movies);




// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movieArray) {
  const onlyDirectors = movieArray.map(eachMovie => eachMovie.director
  )
  return onlyDirectors
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movieArray) {
  const dramaSpielbergMovies = movieArray.filter(eachMovie => {

    return eachMovie.director.includes('Steven Spielberg') && eachMovie.genre.includes('Drama')

  })
  return dramaSpielbergMovies.length

}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movieArray) {

  const scoreSum = movieArray.reduce((acc, eachMovie) => {
    if (eachMovie.score !== undefined) {
      return acc + eachMovie.score
    }
    return acc
  }, 0)
  if (movieArray.length === 0) {
    return 0
  }
  const scoreAvg = scoreSum / movieArray.length
  console.log(scoreAvg)
  return Number(scoreAvg.toFixed(2))
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movieArray) {
  const dramaMovies = movieArray.filter(eachMovie => {

    return eachMovie.genre.includes('Drama')

  })

  const dramaScore = scoresAverage(dramaMovies)
  return dramaScore
}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movieArray) {
  const sortedMovies = movieArray.sort((a, b) => {
    if (a.year > b.year) {
      return 1;
    } else if (a.year < b.year) {
      return -1
    } else if (a.year === b.year) {
      if (a.title > b.title) {
        return 1
      } else {
        return -1
      }
    }
    //return -1;


  })

  const newSortedMovies = [...sortedMovies]
  return newSortedMovies
}



// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movieArray) {
  const newArray = JSON.parse(JSON.stringify(movieArray))
  const sortedByName = newArray.sort((a, b) => {
    if (a.title < b.title) { return -1; }
    if (a.title > b.title) { return 1; }
    return 0;
  }
  )

  if (sortedByName.length > 20) {
    sortedByName.splice(20)
  }
  const onlyNames = newArray.map(eachMovie => eachMovie.title)

  return onlyNames
}






// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {


}

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
