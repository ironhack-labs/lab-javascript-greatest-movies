/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
function turnHoursToMinutes(films) {


  let filmsDurationModified = films.map(myFilm => {

    let elmSplited = myFilm.duration.split(' ')

    let horaFilm = 0
    let minFilm = 0

    if (elmSplited[0].indexOf('h') >= 0) {
      horaFilm = parseInt(elmSplited[0])
      // console.log(`horas:${horaFilm}`)


      if (elmSplited[1] && elmSplited[1].indexOf('m') >= 0) {
        minFilm = parseInt(elmSplited[1])
        // console.log(`min:${minFilm}`)
      }

    } else if (elmSplited[0].indexOf('m') >= 0) {
      minFilm = parseInt(elmSplited[0])
      // console.log(`minutos:${minFilm}`)
    }

    let copy = { ...myFilm }
    copy.duration = horaFilm * 60 + minFilm

    return copy
  })

  // console.log(filmsDurationModified)
  return filmsDurationModified
}




// Get the average of all rates with 2 decimals 

function ratesAverage(films) {

  const totalRate = films.reduce((rateAc, rateFilm) => {
    return rateAc + parseFloat(rateFilm.rate)
  }, 0)

  const average = totalRate / films.length

  return parseFloat(average.toFixed(2));
}




// Get the average of Drama Movies
function dramaMoviesRate(filmsArray) {

  let contadorDrama = 0

  const dramaRate = filmsArray.reduce((averageAc, film) => {

    // console.log(film)

    if (film.genre.indexOf("Drama") != -1) {
      // console.log(parseFloat(film.rate))
      // console.log(averageAc)
      contadorDrama++
      // const num = +film.rate
      return averageAc + +film.rate
    } else {
      return averageAc
    }

  }, 0)


  if (contadorDrama !== 0) {

    const average = dramaRate / contadorDrama
    return parseFloat(average.toFixed(2));

  } else {
    return undefined
  }

}



// Order by time duration, in growing order

function orderByDuration(filmsArray) {

  const filmsArraySorted = filmsArray.sort((a, b) => {
    if (a.duration > b.duration) return 1
    else if (a.duration < b.duration) return -1
    else {
      if (a.tittle > b.tittle) return 1
      else return -1
    }
  })

  return filmsArraySorted
}





// How many movies did STEVEN SPIELBERG

function howManyMovies(filmsArray) {

  if (filmsArray.length === 0) {
    return undefined
  }

  const dramaStevenFilms = filmsArray.filter(film => {
    return (film.genre.indexOf('Drama') != -1 && film.director.indexOf('Steven Spielberg') != -1)
  })

  return `Steven Spielberg directed ${dramaStevenFilms.length} drama movies!`

}




// Order by title and print the first 20 titles


function orderAlphabetically(filmsArray) {

  const filmsTitle = filmsArray.map(film => film.title)
  const filmsTitleSorted = filmsTitle.sort()

  if (filmsTitleSorted.length > 20) filmsTitleSorted.splice(20, filmsTitleSorted.length - 20)

  return filmsTitleSorted
}


// Best yearly rate average
