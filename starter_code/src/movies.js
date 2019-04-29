/* eslint no-restricted-globals: 'off' */


/* import movies as movies from './data.js'; */

/* {
    title: 'The Godfather: Part II',
    year: '1974',
    director: 'Francis Ford Coppola',
    duration: '3h 22min',
    genre: ['Crime', 'Drama'],
    rate: '9.0'
  } */
// Turn duration of the movies from hours to minutes 

function turnHoursToMinutes(movies) {

  return movies.map(movie => {
    let hoursToMin = 0
    let minutes = 0

    if (movie.duration.indexOf('h') != -1) {
      hoursToMin = movie.duration.charAt(0) * 60
      minutes = +movie.duration.substr(movie.duration.indexOf(' ') + 1, movie.duration.lastIndexOf('min') - 3)
    } else {
      minutes = Number(movie.duration.substr(0, movie.duration.length - 3))
      /* console.log("solo minutos")
      console.log("minutos:", minutes) */
    }
    return ({
      ...movie,
      duration: hoursToMin + minutes
    })

  })
}

// Get the average of all rates with 2 decimals 

function ratesAverage(movies) {
  const sumRates = movies.reduce((ac, movie) => {
    return ac + movie.rate
  }, 0)
  /* console.log("avgRate:", +(sumRates / movies.length).toFixed(2)) */
  return +(sumRates / movies.length).toFixed(2)
}

// Get the average of Drama Movies
function dramaMoviesRate(movies) {

  /*  const dramaMovies = movies.filter(movie => {
     const idx = movie.genre.indexOf('Drama')
     console.log('Genres', movie.genres)
     console.log('Indice', idx)
     if (idx != -1) {
       return true
     }
   }) */
  const dramaMovies = movies.filter(movie => movie.genre.indexOf('Drama') != -1)
  if (dramaMovies.length != 0) {
    return ratesAverage(dramaMovies)
  }


}

// Order by time duration, in growing order

function orderByDuration(movies) {

  if (movies.length = 1) {
    return movies
  }

  const durationToMins = turnHoursToMinutes(movies)
  console.log('Duration ot mins', durationToMins)

  const orderedMovies = durationToMins.sort((a, b) => {
    console.log("Duraciones", a.duration, b.duration)
    if (a.duration > b.duration) {
      return -1
    } else if (a.duration < b.duration) {
      return 1
    } else { // if a.duration = b.duration
      console.log("Entro a comparar por titulo", a.title, b.title)
      if (a.title.localeCompare(b.title) > 0) { //el titulo de a esta antes
        return 1
      } else {
        return -1
      }
    }
  })
  console.log('Ordered Movies', orderedMovies)
  return orderedMovies
}

// How many movies did STEVEN SPIELBERG

function howManyMovies(movies) {

  const spielbergMovies = movies.filter(movie => movie.genre.indexOf('Drama') != -1).filter(movie => movie.director === 'Steven Spielberg')
  console.log(spielbergMovies)

  if (spielbergMovies.length != 0) {
    return `Steven Spielberg directed ${spielbergMovies.length} drama movies!`
  }


}


// Order by title and print the first 20 titles


// Best yearly rate average