// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {

    const directors = [...new Set(moviesArray.map(movie => movie.director))]

    return directors

}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {

    return moviesArray.filter(movie => movie.director === 'Steven Spielberg' 
        && movie.genre.map(gen => gen.toLowerCase()).includes('drama')).length
        
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {

   if(moviesArray.length === 0) return 0

   let promedio = moviesArray.reduce((count, movie) => isNaN(movie.score) ? count : count + movie.score, 0)/moviesArray.length
   
   promedio = Math.round((promedio + Number.EPSILON) * 100) / 100
   return promedio

}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {

    if(moviesArray.filter(movie => movie.genre.includes('Drama')).length === 0) return 0
    
    return Math.round((moviesArray.filter(movie => movie.genre.includes('Drama'))
    .reduce((count, movie) => isNaN(movie.score) ? count : count + movie.score, 0)
    / moviesArray.filter(movie => movie.genre.includes('Drama')).length + Number.EPSILON) * 100) /100


}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {

  const orderedArr = [...moviesArray.sort((a, b) => a.year - b.year )]

  function compare(a, b) {
    if (a.year !== b.year) {
      return a.year - b.year; // Primero por año
    } else {
      if (a.title < b.title) {
        return -1; // Si el año es el mismo, ordena por título
      } else if (a.title > b.title) {
        return 1;
      } else {
        return 0;
      }
    }
  }

  return orderedArr.sort(compare)

}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {

  const newArr = [...moviesArray]

  newArr.sort((a, b) => a.title > b.title ? 1 : -1)

  // console.log(newArr.map(movie => movie.title))

  return newArr.map(movie => movie.title).slice(0, 20)



}



// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {

  const arrayConDuration = []

  const extraeTiempo = (tiempo) => {
    let minutosNumero = ''
    for (const caracter of tiempo) {
      if(!isNaN(caracter)) {
        minutosNumero += caracter
      }
    }
    return parseInt(minutosNumero)
  }

  for (const movie of moviesArray) {
    
    const duracionSeparada = (movie.duration).split(' ')
    // console.log(duracionSeparada)
    const totalHoras = extraeTiempo(duracionSeparada[0]) *60
    let totalMinutos = 0
    if(duracionSeparada.length > 1) {
      totalMinutos = extraeTiempo(duracionSeparada[1])
    }
    
    const total = totalHoras + totalMinutos
  
    arrayConDuration.push({
      title: movie.title,
      year: movie.year,
      director: movie.director,
      duration: total,
      genre: movie.genre,
      score: movie.score
    })
  
  
  } 

  return arrayConDuration


}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {

  if(moviesArray.length === 0) return null 

  // nuevo array de años
  let years = moviesArray.map(movie => movie.year)

  // quitamos duplicados
  years = [...new Set(years)] // este set quita los duplicados, crea un conjunto, esto es que no pueden haber dos cosas iguales.

  // hacemos average de score por cada año.
  
  let average = 0
  let bestYear = 0

  for (const year of years) {

    const movieByYear = moviesArray.filter(movie => movie.year === year)

    let promedio = moviesArray.reduce((count, movie) => isNaN(movie.score) || (movie.year !== year) ? count : count + movie.score, 0)/movieByYear.length
    
    if (promedio > average) {
      average = promedio
      bestYear = year
    } else if(average === promedio ) {
      if(bestYear > year) {
        bestYear = year
      }

    }
    
  }

  return `The best year was ${bestYear} with an average score of ${average}`

}
