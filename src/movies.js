// The `movies` array from the file `src/data.js`.
//console.log('movies: ', movies);
//const movies = require('./data')

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  let arrDirectors = [];

  movies.map(movie => arrDirectors.push(movie.director))
  // hacemos un map sobre movies. por cada movie, dentro del array movies, hacemos push al array nuevo creado -arrDirectors-, 
  // hacemos push de la clave director de cada movie.
  return arrDirectors
}



// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {


  const arrDrama = movies.filter(movie => movie.director === 'Steven Spielberg')
  // creamos arrDrama, que es un filtro sobre el array grande movies, 
  // que le decimos, x cada movie miras sí la key director es igual a Stev Spiel, 
  // sí es true, lo añade al array, si es false, siguiente iteración.


  const dramaStevSpiel = arrDrama.filter(movieDrama => movieDrama.genre.includes('Drama'))


  return dramaStevSpiel.length
}


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {

  if (movies.length === 0) { return 0 }; // return = 0, sí array vacío

/* array de la misma longitud uso map
array nuevo filter
cuando quiero sacar algo de un array uso reduce. xa reduce siempre dos parametros, 
el acumulador , y el valor (elemento recorrrido)
...reduce(funcion, valor)
....reduce((acc, movie))

const bestMovies = movies.reduce((acc, movie) => {
  acc = acc + movie.score
  return acc
},0)
*/
//const totalScore = movies.reduce((acc, movie) => {

//},0)

const totalScore = movies.reduce((acc, movie) => {
  if (movie.score) {
    acc = acc + movie.score
  }else {
    acc = acc + 0
  }
  
  return acc
}, 0)

  const result = Number( (totalScore / movies.length).toFixed(2))
  console.log(result);
  return result
}


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) { 
const dramaMovies = movies.filter(movie => {
   return  movie.genre.includes('Drama')
} )
return scoresAverage(dramaMovies)
}




// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) { 
  const moviesCopy = movies.map( movie => {
    return movie
  })

return movies.sort((m1, m2)=>{
  if ( m1.year > m2.year) {
    return 1;
 } else if (m1.year < m2.year) {
   return -1;
 } else {
   return m1.title.localeCompare(m2.title);
 }
})

}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically() { 
return movies.map(movie => movie.title)
.sort((t1, t2) => {
  return t1.localeCompare(t2)
})
.slice(0, 20)

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
