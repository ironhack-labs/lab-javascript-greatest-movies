// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  const AllDirectors = movies.map((eachMovie) => {
    return eachMovie.director
  })
  return AllDirectors
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {


  const SpielbergFilms = movies.filter(eachMovie => {
    return eachMovie.director.includes('Steven Spielberg') && eachMovie.genre.includes('Drama')
  })
  let num = SpielbergFilms.length

  return num
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  if (movies.length === 0) {
    return 0
  } else {

    const scoresSum = movies.reduce((acc, eachMovie) => {
      if (eachMovie.score === undefined) {
        return acc
      } else {
        return acc + eachMovie.score
      }
    }, 0)
    let result = scoresSum / movies.length

    return Number(result.toFixed(2))
  }
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {

  const dramaMovies = movies.filter(eachMovie => {
    return eachMovie.genre.includes('Drama')
  })
  return scoresAverage(dramaMovies)
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  const moviesCopy = JSON.parse(JSON.stringify(movies))
  moviesCopy.sort((a, b) => {
    if (a.year - b.year === 0) {
      return a.title.charCodeAt() - b.title.charCodeAt()
    } else {
      return a.year - b.year
    }
  })
  return moviesCopy

}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {

  const AllTitles = movies.map((eachMovie) => {
    return eachMovie.title
  })
  AllTitles.sort()
  return AllTitles.slice(0, 20)
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function getHours(array) {
  let expresion = /[1-9]h/
  let formato = array.match(expresion)
  let formato1 = formato[0].match(/[1-9]*/)
  let finalForm = Number(formato1)
  if (formato === '') {
    return 0
  } else {
    return finalForm
  }
}
function getMinutes(array) {
  let expresion = /[1-9]*min/
  let formato = array.match(expresion)
  let formato1 = formato[0].match(/[1-9]*/)
  let finalForm = Number(formato1)
  if (formato === '') {
    return 0
  } else {
    return finalForm
  }
  
}
function turnHoursToMinutes(movies) {
  const moviesCopy = JSON.parse(JSON.stringify(movies))

  const moviesInMinutes = moviesCopy.map((eachMovie) => {
    
    let string = eachMovie.duration
    let minutes = getMinutes(string)
    let hoursInMinutes = getHours(string) * 60 + minutes
    eachMovie.duration = hoursInMinutes
    return eachMovie
    
  })

  return moviesInMinutes
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(movies) {

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
