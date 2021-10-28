// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.

const movies = require("./data")

// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  const directors = movies.map(movie => {
    return movie.director
})
return directors
}
// return directors

// console.log(evenNumbers)

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
const stevenp = movies.filter((movie => {
  if (movie.director === "Steven Spielberg" && movie.genre.includes("Drama")) {
    return movie
  }
}))
return stevenp.length
}

// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// const evenNumbers = numeros.filter(numero => {
//     if(numero % 2 === 0) {
//         return numero
//     }
// })

// // Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage() {

  const promedio = movies.reduce((acc, movie) => {
    return (acc / 250)
  })
  return promedio
}
// const caloriasPromedio = menu.reduce((acc, comida) => {
  //     return acc + comida.calories
  // },0)
// c) .reduce()
// Es un metodo que nos trasforma una lista de valores en un solo valor
// // Ejemplo
// const arrayNumbers = [1, 2, 3, 4]
// // Reduce comienza con el acumador igual al primer valor del arreglo y el valor actual comienza con el segundo valor del arreglo
// const reduced1 = arrayNumbers.reduce((accomulador, valorActual) => {
//     return accomulador + valorActual
// })
// console.log(reduced1)
// // Ejercicio, devolver el promedio de las calorias de un arreglo de objetos
// const menu = [{
//     name: 'Carrots',
//     calories: 150
// },
// {
//     name: 'Steak',
//     calories: 350
// },
// {
//     name: 'Broccoli',
//     calories: 120
// },
// {
//     name: 'Chicken',
//     calories: 250
// },
// {
//     name: 'Pizza',
//     calories: 520
// }
// ]
// // Podemos agregar el valor inicial del acomulador manualmente
// const caloriasPromedio = menu.reduce((acc, comida) => {
//     return acc + comida.calories
// },0)
// console.log(caloriasPromedio/menu.length)
// // d) .sort()
// // Nos ordena un arreglo y nos devuelve un nuevo arreglo
// const alumnosJs = ["Xchell","Sinahú", "Carlos", "Rodrigo", "Javier", "Dulce"]
// // Para ordenar un arreglo de strings basta con hacer lo siguiente:
// const nombresOrdenados = alumnosJs.sort()
// console.log(nombresOrdenados)
// // Pero para ordenar un arreglo de números se hace lo siguiente
// const numerosOrdenados = [20, 100, 1, 0, 2.2, -1] 
// // Para odenar de menor a mayor se hace lo siguiente
// const numerosMenorAMayor = numerosOrdenados.sort((a, b) => {
//     return a - b
// })
// console.log(numerosMenorAMayor)
// // Para odenar de mayor a menor se hace lo siguiente
// const numerosMayorAMenor = numerosOrdenados.sort((a, b) => {
//     return b - a
// })
// console.log(numerosMayorAMenor)
// // .reverse()
// // Nos voltea un arreglo
// const reversed = alumnosJs.reverse()
// console.log(reversed)

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore() {
const promediodrama = movies.filter((movie => {
  if (movie.genre["Drama"] === "Drama") {
    return movie.score
  }
  }
))
return Number(promediodrama.score / promediodrama.length)
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear() {}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically() {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}



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
