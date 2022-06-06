// The `movies` array from the file `src/data.js`.
// console.log('movies: ', movies);

// const movies = require("./data");


// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

// ITERACIÓN 1 RESUELTA:

function getAllDirectors(movies) {
  const newDirectors = movies.map(element => element.director)
  return newDirectors
}

//ITERACIÓN 1.1:

// function getAllDirectors(movies) {
//   const newDirectors = movies.filter(director => movies.includes(director))
// }


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  const dramaMovies = movies.filter(element => {
    return element.director === "Steven Spielberg" && element.genre.includes('Drama')
  })
  return dramaMovies.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  if (movies.length === 0) {
    return 0
  }
  const allMovieScores = movies.map(element => {
    if (typeof element.score === 'number') {
      return element.score
    }
  })
  const totalScore = (allMovieScores.reduce((acc, current) => {
    if (typeof current === 'number') {
      return acc + current
    }
    return acc
  })) / movies.length
  return +totalScore.toFixed(2)
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  const dramaMovies = movies.filter(element => element.genre.includes('Drama'))
  if (dramaMovies.length === 0) {
    return 0
  }
  const dramaScores = dramaMovies.map(element => element.score)
  const totalScoreSum = dramaScores.reduce((acc, current) => acc + current)
  return +(totalScoreSum / dramaMovies.length).toFixed(2)

}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

// SORTEAR LOS
function orderByYear(movies) {
  if (movies.length === 0) {
    return 0
  }
  const newMovies = JSON.parse(JSON.stringify(movies))
  newMovies.sort(function (a, b) {

    if (a.year === b.year) {
      return -1
    }
    return a.year - b.year
  })
  return newMovies
}


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  let moviesCopy = JSON.parse(JSON.stringify(movies))

  moviesCopy.sort(function (a, b) {
    if (a.title < b.title) {
      return - 1
    }
    if (a.title > b.title) {
      return 1
    }
    return 0
  })

  if (movies.length <= 20) {

    let moviesCopyMapped = moviesCopy.map(element => element.title)
    return moviesCopyMapped
  }


  let newMovies = []
  for (i = 0; i < 20; i++) {
    newMovies.push(moviesCopy[i])
  }

  let movieTitles = newMovies.map(element => element.title)
  return movieTitles

}
// console.log(orderAlphabetically(movies))
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes


function turnHoursToMinutes(movies) {
  newArr = []
  //MAPEA UN NUEVO ARRAY DONDE DURATION SE DA EN MINUTOS EN VEZ DE HORAS
  const durationInHours = movies.map(element => element.duration)

  durationInHours.forEach(element => {
    let hoursInMins = parseInt(element[0]) * 60
    let mins = 0
    if (element.length > 2) {
      mins = parseInt((element[3]) + (element[4]))
    }
    let total = hoursInMins + mins
    newArr.push(total)
  })

  let newMovies = JSON.parse(JSON.stringify(movies))
  newMovies.forEach((element, index) => {
    element.duration = newArr[index]
  })

  return newMovies
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(movies) {
  if (movies.length === 0) {
    return null
  }

  return `The best year was ${year} with an average score of ${rate}`
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
