// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  let directoes = moviesArray.map((cadaPeli) => {
    /* if (cadaPeli.director === cadaPeli.director) {
      return cadaPeli.director
    }*/
    return cadaPeli.director
  })

  return directoes
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  let dramaFilm = moviesArray.filter((cadapelicula) => {
    if (cadapelicula.director === 'Steven Spielberg')
      if (cadapelicula.genre.includes('Drama')) {
        return true
      }
  })

  return dramaFilm.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  let pelisConPuntuacion = moviesArray.filter((cadaPeli) => {
    if (!cadaPeli.score) {
      return false
    } else {
      return true
    }
  })
  let sum = pelisConPuntuacion.reduce((acc, cadapelicula) => {
    if (typeof cadapelicula.score === 'number' && !isNaN(cadapelicula.score)) {
      return acc + cadapelicula.score
    }
  }, 0)
  let media = sum / moviesArray.length
  media = media.toFixed(2)
  if (isNaN(media)) {
    return 0
  }

  return Number(media)
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  let pelisConPuntuacion = moviesArray.filter((cadaPeli) => {
    if (!cadaPeli.score) {
      return false
    } else {
      return true
    }
  })
  let dramaPelis = pelisConPuntuacion.filter((cadaPeli) => {
    if (cadaPeli.genre.includes('Drama')) {
      return true
    }
  })
  let sum = dramaPelis.reduce((acc, cadapelicula) => {
    if (typeof cadapelicula.score === 'number' && !isNaN(cadapelicula.score)) {
      return acc + cadapelicula.score
    }
  }, 0)
  let media = sum / dramaPelis.length
  media = media.toFixed(2)
  if (isNaN(media)) {
    return 0.0
  }
  console.log(media)
  return Number(media)
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  let orderYears = moviesArray.toSorted((elem1, elem2) => {
    if (elem1.year < elem2.year) {
      return -1
    } else if (elem2.year < elem1.year) {
      return 1
    } else {
      return elem1.title.localeCompare(elem2.title)
    }
  })

  return orderYears
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  let veintePelis = moviesArray.filter((cadaPeli, i) => {
    if (i + 1 <= 20 || moviesArray.length < 20) {
      return true
    } else {
      return false
    }
  })
  let orderAlfa = veintePelis.toSorted((elem1, elem2) => {
    return elem1.title.localeCompare(elem2.title)
  })
  let onliName = orderAlfa.map((cadaPeli) => {
    return cadaPeli.title
  })
  return onliName
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
