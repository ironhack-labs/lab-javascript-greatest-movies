/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 


function turnHoursToMinutes(array) {

  var newArray = []

  newArray = array.map(function (movie) {
    var copiaMovie = Object.assign({}, movie)

    var contador = 0
    var arrayDuration = copiaMovie.duration.split(" ")
    arrayDuration.forEach(function (elemt) {
      if (elemt.includes("h")) {
        contador += parseInt(elemt * 60)
      } else if (elemt.includes("min")) {
        contador += parseInt(elemt)
      }

      copiaMovie.duration = parseInt(contador)

      return copiaMovie
    })

  })
  return newArray
}



