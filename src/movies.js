// The `movies` array from the file `src/data.js`.
//console.log('movies: ', movies);


// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(array) {
  const getDirectors = array.map(eachDirector => {
    return eachDirector.director
  })
  return getDirectors
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(array) {
  if (array.length === 0) {
    return 0
  }
  const stevenMovies = array.filter(eachMovie => {
    return eachMovie.director === "Steven Spielberg" && eachMovie.genre.includes("Drama")
  }
  )
  return stevenMovies.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(array) {
  if (array.length === 0) {
    return 0
  }
  const sumScore = array.reduce((acc, eachScore) => {
    if (!eachScore.score) {
      return acc + 0
    }
    else {
      return acc + eachScore.score
    }
  }, 0)

  return ((sumScore / array.length).toFixed(2)) * 1
}


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(array) {
  const onlyDrama = array.filter(eachDrama => {
    return eachDrama.genre.includes("Drama")
  })
  return scoresAverage(onlyDrama)
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(array) {
  const order = [...array]

  order.sort((a, b) => {
    if (a.year > b.year) {
      return 1
    } else if (a.year < b.year) {
      return -1
    } else if (a.year === b.year) {
      if (a.title > b.title) {
        return 1
      } else if (a.title < b.title) {
        return -1
      } else if (a.title === b.title) {
        return 0
      }

    }

  })
  return order

}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(array) {
  // const orderTittle = array.map(eachTitle => {
  //   return eachTitle.title
  // })
  const arrayCopy = JSON.parse(JSON.stringify(array))
  const orderTitle = arrayCopy.sort((a, b) => {
    if (a.title < b.title) {
      return -1
    } else if (a.title > b.title) {
      return 1
    }
    return 0
  })
  if (orderTitle.length > 20) {
    orderTitle.splice(20)
  }
  const fullTitles = arrayCopy.map(eachFull => eachFull.title)

  return fullTitles
}
// orderAlphabetically(movies)

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
