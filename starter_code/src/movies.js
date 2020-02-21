// // BONUS Iteration: Best yearly rate average - Best yearly rate average

/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(value) {
  var newArray = JSON.parse(JSON.stringify(value))
  newArray.sort(function (pelicula1, pelicula2) {
    if (pelicula1.year === pelicula2.year) {
      if (pelicula1.title > pelicula2.title) {
        return 1
      } else {
        return -1
      }
    } else {
      return pelicula1.year - pelicula2.year
    }
  })
  return newArray
}
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct
function howManyMovies(array) {
  if (array.length === 0) { return 0 }
  let newArray = JSON.parse(JSON.stringify(array))
  let resultado = newArray.filter(x => {
    return x.director === 'Steven Spielberg' && x.genre.indexOf("Drama") != -1
  })
  return resultado.length
}
// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arraypeliculas) {
  let resultado = []

  let newArray = JSON.parse(JSON.stringify(arraypeliculas))
  newArray.sort(function (pelicula1, pelicula2) {
    if (pelicula1.title > pelicula2.title) {
      return 1
    } else {
      return -1
    }
  })
  let twentymovies = newArray.slice(0, 20);
  return twentymovies.map(cadaelemento => { return cadaelemento.title })
}
orderAlphabetically(movies2)

// Iteration 4: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(array) {
  if (array.length == 0) { return 0 }
  let newArray = [...array]
  let arrayratings = newArray.map(elemento => { return elemento.rate })
  arrayratings = arrayratings.filter(x => x > 0)
  let sum = arrayratings.reduce(function (previousValue, currentValue) { return previousValue + currentValue })
  //console.log(Math.round((sum/array.length)*100)/100)
  return Math.round((sum / array.length) * 100) / 100

}

// Iteration 5: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(array) {
  let newArray = [...array];
  let arrayfiltrado = newArray.filter(x => x.genre.includes("Drama"))
  let average = ratesAverage(arrayfiltrado)
  //console.log(average)
  return average
}
// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(array) {
  let arraynou = []
  var minutos = []
  for (let index = 0; index < array.length; index++) {
    const element = array[index].duration;
    if (element.includes("h") && element.includes("min")) {

      minutos = parseInt(element.slice(0, element.indexOf("h"))) * 60
        + parseInt(element.slice(element.indexOf("h") + 2, element.indexOf("min")))
    } else if (element.includes("h")) {
      minutos = parseInt(element.slice(0, element.indexOf("h"))) * 60
    } else {
      minutos = parseInt(element.slice(0, 2))

    }

    console.log(minutos)
    let temp = {
      "title": array[index].title,
      "year": array[index].year,
      "director": array[index].director,
      "duration": minutos,
      "genre": array[index].genre,
      "rate": array[index].rate
    }
    arraynou.push(temp)
  }
  return arraynou

}

//bonus
function bestYearAvg(inputArray) {
  if (inputArray.length === 0) { return null }
  if (inputArray.length ===1){  return `The best year was ${inputArray[0].year} with an average rate of ${inputArray[0].rate}`}
  var arrayYearRate = []
  var ordenado = orderByYear(inputArray)
  let ordenadolength = ordenado.length - 1
  let primerAño = ordenado[0].year
  let ultimoaño = ordenado[ordenadolength].year
  console.log(ultimoaño)
  for (let index = primerAño; index < ultimoaño+1; index++) {
    let añoActual = ordenado.filter(x => {
      return x.year === index
    })
    console.log("--> "+añoActual[0])
    if (ratesAverage(añoActual)) {
      arrayYearRate.push({

        year: añoActual[0].year,
        rate: ratesAverage(añoActual),

      })
    }

  }


  arrayYearRate.sort(function (año1, año2) {
    if (año1.rate != año2.rate) {
      if (año1.rate < año2.rate) {
        return 1
      } else {
        return -1
      }
    } else {
      return año1.year < año2.year
    }
  })



  console.log(arrayYearRate)

  return `The best year was ${arrayYearRate[0].year} with an average rate of ${arrayYearRate[0].rate}`
}
