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
      console.log("solo minutos")
      console.log("minutos:", minutes)
    }
    return {
      title: movie.title,
      year: movie.year,
      director: movie.director,
      duration: hoursToMin + minutes,
      genre: movie.genre,
      rate: movie.rate
    }
  })


}

// Get the average of all rates with 2 decimals 


// Get the average of Drama Movies


// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average