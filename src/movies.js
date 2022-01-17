// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(movies) {
  const arrayOfDirectors = movies.map((eachMovie) => {
    return eachMovie.director
  })

  const uniqueDirectors = []    // Start of Bonus 1

  arrayOfDirectors.forEach(director => {
    if (uniqueDirectors.indexOf(director) === -1) {
      uniqueDirectors.push(director)
    }
  })

  return uniqueDirectors
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  const dramaStevenSpielbergMovies = movies.filter((eachMovie) => {
    return eachMovie.director.includes('Steven Spielberg') && eachMovie.genre.includes('Drama')
  })

  return dramaStevenSpielbergMovies.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  if (movies.length === 0) {
    return 0
  } else {
    const allScoresSum = movies.reduce((acc, eachMovie) => {
      return acc + (eachMovie.score || 0)
    }, 0)

    return parseFloat((allScoresSum / movies.length).toFixed(2))
  }
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  const allDramaMoviesArray = movies.filter((eachMovie) => {
    return eachMovie.genre.includes('Drama')
  })

  return scoresAverage(allDramaMoviesArray)    // Puedo reutilizar esta función

  // ---- Y no haría falta hacer la media de nuevo:

  // const allDramaMoviesSum = allDramaMoviesArray.reduce((acc, eachDramaMovie) => {
  //  return acc + eachDramaMovie.score
  // }, 0)

  // return parseFloat((allDramaMoviesSum / allDramaMoviesArray.length).toFixed(2))
}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  const newMoviesArray = [...movies]

  newMoviesArray.sort(function (a, b) {
    if (a.year > b.year) {
      return 1;
    }
    if (a.year < b.year) {
      return -1;
    }
    if (a.years === b.years) {
      if (a.title > b.title) {
        return 1;
      }
      if (a.title < b.title) {
        return -1
      }
      if (a.title === b.title) {
        return 0
      }
    }
  })

  return newMoviesArray
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  const copyOfMovies = [...movies]

  copyOfMovies.sort(function (a, b) {
    if (a.title > b.title) {
      return 1;
    }
    if (a.title < b.title) {
      return -1;
    }
    if (a.title === b.title) {
      return 0
    }
  })

  const first20movies = copyOfMovies.splice(0, 20)

  const first20titles = first20movies.map((eachMovie) => {
    return eachMovie.title
  })

  return first20titles
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
