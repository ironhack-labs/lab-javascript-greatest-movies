// const movies = require("./data");

// The `movies` array from the file `src/data.js`.
// console.log('movies: ', movies);
// ---------------------------------------------------------------------


// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

// Mapeamos con la funcion y extraemos en un arr el value de los key value director. Despues creamos un spread operator y utlizar el metodo Set()
//que nos permite eliminar aquellos valore que se repitan y así alojarlos en un new arr.

function getAllDirectors(arr) {
  const allDirectors = arr.map(eachDirector => {
    return eachDirector.director
  })

  const allDirectorsNotRepeated = [...new Set(allDirectors)]
  return allDirectorsNotRepeated
}



// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
// Filtramos medaiante .filter las peliculas que tengan el valor drama y spielberg y vemos su longitud para saber cuantas ha dirigido. 

function howManyMovies(arr) {

  const SpielbergDrama = arr.filter(eachMovie => {
    return eachMovie.genre.includes('Drama') && eachMovie.director.includes('Spielberg')
  })
  // console.log(SpielbergDrama)
  return SpielbergDrama.length
}





// Iteration 3: All scores average - Get the average of all scores with 2 decimals.
//1. si el arr está vacio que retorne 0 para que cuando implementemos el metodo reduce pueda tomar el valor para el acc. Ejecutamos el reduce para que acumule los 
//valores del score de cada uno de los objetos  para después dividirlos por el length del arr y dejarlos con dos decimales con toFixed()

function scoresAverage(arr) {

  if (arr.length === 0) {
    return 0
  } else {

    const totalScore = arr.reduce(function (acc, movie) {
      if (!movie.score) {
        return acc + 0
      } else {
        return acc + movie.score
      }

    }, 0)

    const averageScore = totalScore / arr.length
    const result = averageScore.toFixed(2)
    return Number(result)
  }
}


// otra alternativa al anterior 

// function scoresAverage(arr) {

//   if (arr.length === 0) {
//     return 0
//   } else {

//     const totalScore = arr.reduce(function (acc, movie) {

//       return acc + (movie.score || 0)

//     }, 0)

//     const averageScore = totalScore / arr.length
//     const result = averageScore.toFixed(2)
//     return Number(result)
//   }
// }



// Iteration 4: Drama movies - Get the average of Drama Movies
//Filtramos con el metodo includes para tener todos aquellos objetos que drama = true. Luego idem anterior. 


function dramaMoviesScore(arr) {

  const dramaMovie = arr.filter(eachMovie => {
    return eachMovie.genre.includes('Drama')
  })

  if (dramaMovie.length === 0) {
    return 0
  } else {

    const dramaScore = dramaMovie.reduce(function (acc, drama) {
      return acc + (drama.score || 0)
    }, 0)
    const averageDrama = dramaScore / dramaMovie.length
    const result = averageDrama.toFixed(2)
    return Number(result)
  }

}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(arr) {
  const newMovies = JSON.parse(JSON.stringify(arr))

  newMovies.sort( (a, b)=> {
    if (a.year < b.year) {
      return a.year - b.year
    } else if (a.title < b.title) {
      return -1
    }
  })
  return newMovies
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
// Creamos un spread operator para no modificar el arr inicial. Mapeamos el arr por el titulo y obtenemos un arr con los títulos. Sorteamos el arr con el método localeCompare() 
//que nos permite ordenar un array case insensitive y así obtener el arr ordenado de la a-z. mediante el método slice() retornamos los primeros 20.

function orderAlphabetically(arr) {
  
  const newAlphaArray = [... arr]

  const mappedArr = newAlphaArray.map(element => {
    return element.title
  })

  const alphaordered = mappedArr.sort((a, b)=>{
    return a.localeCompare(b)
  })

  return alphaordered.slice(0, 20)
 }

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() { }

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() { }



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
