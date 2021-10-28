// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  const directors = movies.map(director =>{
    return{
      directors.director
    }
  })
  return directors
}
/*    }
]
const promedios = students.map(almno => {
    return {
        name: almno.name,
        prom: (almno.firstProject + almno.secondProject + almno.finalExam) / 3
    }
})
// console.log(promedios)
*/

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  const stevenp = movies.filter((movie=>{
    if(movie.director === "StevenSteven Spielberg" && movie.genre.includes('Drama')){
      return movie
    }
  }))
  return stevenp.length
}





/*
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const evenNumbers = numeros.filter(numero => {
    if(numero % 2 === 0) {
        return numero
    }
})

// console.log(evenNumbers)
*/

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
const promedio = movies.reduce((acc, movie) =>{
  return {
    promedio : (movies.score / 250)
  }
})
return promedio.number("")
}
/*    }
]
const promedios = students.map(almno => {
    return {
        name: almno.name,
        prom: (almno.firstProject + almno.secondProject + almno.finalExam) / 3
    }
})
// console.log(promedios)
*/


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  const promedioDrama = movies.filter((movie => {
    if(movie.genre ["Drama"] === ["Drama"])
    return movie.score
  }))
  return promedioDrama.score / promedioDrama.length
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
