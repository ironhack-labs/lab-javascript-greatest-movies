/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

const orderByYear = moviesArray => {
      if (moviesArray.length) {

            const orderedMovies = [...moviesArray]

            orderedMovies.sort((elm1, elm2) => {
                  if (elm1.year - elm2.year > 0) return 1
                  else if (elm1.year - elm2.year < 0) return -1
                  else {
                        if (elm1.title.toLowerCase() > elm2.title.toLowerCase()) return 1
                        else if (elm1.title.toLowerCase() < elm2.title.toLowerCase()) return -1
                        else return 0
                  }
            })

            return orderedMovies
      } else {
            return []
      }
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

const howManyMovies = moviesArray => {

      const dramaStevenMovies = moviesArray.filter(elm => elm.director == "Steven Spielberg" && elm.genre.includes("Drama"))

      return dramaStevenMovies.length
}
// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

const orderAlphabetically = moviesArray => {
      if (moviesArray.length) {

            //Se hace copia por valor
            const orderedMovies = [...moviesArray]

            //Se ordena alfabéticamente
            orderedMovies.sort((elm1, elm2) => {
                  if (elm1.title.toLowerCase() > elm2.title.toLowerCase()) return 1
                  else if (elm1.title.toLowerCase() < elm2.title.toLowerCase()) return -1
                  else return 0
            })
            //Creamos un array solo de titulos
            const orderedTitles = orderedMovies.map(elm => elm.title)

            //Se eliminan del 20 en adelante
            orderedTitles.splice(20)

            return orderedTitles
      }
      else {
            return []
      }
}

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

const ratesAverage = moviesArray => {
      //Se comprueba que el array no esté vacío
      if (moviesArray.length) {
            //Se descartan las películas cuya propiedad rate esta vacia o no tienen
            const moviesWithRate = moviesArray.filter(elm => elm.rate)

            //Se suman todos los rates y se dividen por el nº de películas para calcula la media. Se redondea a 2 decimales
            const averageRates = parseFloat((moviesWithRate.reduce((acc, elm) => acc + elm.rate, 0) / moviesArray.length).toFixed(2))

            return averageRates
      } else {
            return 0
      }
}

// Iteration 5: Drama movies - Get the average of Drama Movies

const dramaMoviesRate = moviesArray => {
      //Se comprueba que el array no esté vacío
      if (moviesArray.length) {

            //Se obtienen las peliculas que únicamente son dramas
            const dramaMovies = moviesArray.filter(elm => elm.genre.includes("Drama") && elm.genre.length === 1)

            //Se comprueba si existen películas unicamente dramáticas
            if (dramaMovies.length) {

                  //Se descartan las películas cuya propiedad rate esta vacia o no tienen
                  const dramasWithRates = dramaMovies.filter(elm => elm.rate)
                  //Se calcula la media, con dos decimales
                  const averageRateDramas = parseFloat((dramasWithRates.reduce((acc, elm) => acc + elm.rate, 0) / dramasWithRates.length).toFixed(2))

                  return averageRateDramas
            } else {
                  return 0    //No hay películas unicamente dramáticas
            }

      } else {
            return 0    //El Array está vacío
      }
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

const turnHoursToMinutes = moviesArray => {

      const minutesMovies = moviesArray.map(elm => {
            let hours = 0
            let minutes = 0
            if (elm.duration.includes('h')) {
                  const indexOfH = elm.duration.indexOf('h')      //Aseguramos que funcione para pelis de 10 horas o más
                  hours = Number(elm.duration.substring(0, indexOfH))
            }
            if (elm.duration.includes('min')) {
                  const indexOfSpace = elm.duration.indexOf(' ')
                  minutes = Number(elm.duration.substring(indexOfSpace, elm.duration.length - 3)) //Se sabe que las tres ultima letras seran 'min'
            }

            const newFormatMovie = { ...elm }
            newFormatMovie.duration = hours * 60 + minutes

            return newFormatMovie
      })

      return minutesMovies
}

// BONUS Iteration: Best yearly rate average - Best yearly rate average
const bestYearAvg = moviesArray => {
      //Se comprueba que la lista de peliculas no este vacía
      if (moviesArray.length) {
            //Si solo hay una película
            if (moviesArray.length === 1) return `The best year was ${moviesArray[0].year} with an average rate of ${moviesArray[0].rate}`
            else {
                  const moviesCopy = [...moviesArray]
                  //Ordenamos cronologicamente las películas del array
                  moviesCopy.sort((elm1, elm2) => {
                        if (elm1.year - elm2.year > 0) return 1
                        else if (elm1.year - elm2.year < 0) return -1
                        else return 0
                  })

                  //Se crean variables que nos ayudaran al guardar correctamente la información
                  let currentYear = 0
                  let currentIndex = -1
                  //Creamos un array donde almacenaremos objetos con estructura {year:,rate:[,]} por cada año tendremos todos los rates
                  const averageYearArray = []

                  //Se crea un nuevo array en el que habra 1 objeto por año con los rates de todas las pelis de ese año
                  moviesCopy.forEach(elm => {
                        if (currentYear == elm.year) {
                              averageYearArray[currentIndex].rate.push(elm.rate)    //Si ya habiamos incluido una peli del mismo año

                        } else {
                              currentYear = elm.year
                              currentIndex++
                              averageYearArray.push({ year: elm.year, rate: [] }) //Si es la primera peli de ese año
                              averageYearArray[currentIndex].rate.push(elm.rate)
                        }
                  })

                  //Se calcula la media de valoración de cada año
                  averageYearArray.forEach(elm => {
                        const numberOfRates = elm.rate.length
                        const sumRates = elm.rate.reduce((acc, elm2) => acc + elm2, 0)
                        elm.rate = parseFloat((sumRates / numberOfRates).toFixed(1))
                  })

                  //se ordena por mejor valorados y en caso de empate la peli más antigua
                  averageYearArray.sort((elm1, elm2) => {
                        if (elm2.rate - elm1.rate > 0) return 1
                        else if (elm2.rate - elm1.rate < 0) return -1
                        else {
                              if (elm1.year - elm2.year > 0) return 1
                              else if (elm1 - elm2 < 0) return -1
                              else return 0
                        }
                  })

                  //Se completa la frase que espera Jasmine
                  return `The best year was ${averageYearArray[0].year} with an average rate of ${averageYearArray[0].rate}`

            }
      }
      else {
            return null
      }
}