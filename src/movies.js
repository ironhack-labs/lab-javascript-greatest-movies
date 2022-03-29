// The `movies` array from the file `src/data.js`.
//console.log('movies: ', movies);

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  const mappedArray = movies.map(eachMovies => {
    return eachMovies.director
  })
  return mappedArray
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  const dramaSteven = movies.filter(eachMovies => {
    return eachMovies.genre.includes("Drama") && eachMovies.director.includes("Steven Spielberg")
  })
  return dramaSteven.length

}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  if (movies.length === 0) {
    return 0
  } else {
    const sumScore = movies.reduce((acc, eachMovie) => {
      return acc + eachMovie.score
    }, 0)
    const totalScore = sumScore / movies.length
    return Math.round(totalScore * 100) / 100
  }
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  const dramaMovies = movies.filter(eachMovies => {
    return eachMovies.genre.includes("Drama")
  })
  const averageDramaMovies = scoresAverage(dramaMovies)
  return averageDramaMovies
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {

  const moviesCopy = JSON.parse(JSON.stringify(movies))
  moviesCopy.sort(function (a, b) {
    if (a.title < b.title) {
      return -1
    }
    if (a.title > b.title) {
      return 1
    }
    return 0
  }),

    moviesCopy.sort(function (a, b) {
      if (a.year < b.year) {
        return -1
      }
      if (a.year > b.year) {
        return 1
      }
      return 0
    })
  return moviesCopy
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arr) {

  const newArr = arr.map(eachMovie => {
    return eachMovie.title
  })

  newArr.sort(function (a, b) {
    if (a < b) {
      return -1
    }
    if (a > b) {
      return 1
    }
    return 0
  })

  return newArr.slice(0, 20)
}


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesCopy) {
  const durationTime = moviesCopy.map(eachMovie => {
    return eachMovie.duration
  })


  const minutesTime = moviesCopy
  return minutesTime

}
// INTENTO 1
//const parts = durationTime.split("h ");
//const total = parseInt(part[0]) * 60 + parseInt(part[1]);



// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(movies) {
  yearArr = []
  return null
}



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
