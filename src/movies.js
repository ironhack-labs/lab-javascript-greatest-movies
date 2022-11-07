// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {

    const directorMovie = moviesArray.map( movie => ({
        director: movie.director
     }))

 return directorMovie
    
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    let totalFilms = 0
    moviesArray.filter(movie => {
      if (movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')) {
      totalFilms += 1 
      }                            
    })

    return totalFilms
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {

    const arrLength = moviesArray.length
    const score = movies.reduce((sum, movie) => {
      return sum + movie.score
    },0)
  
    const avrMovies = score/arrLength
  
    return Number(avrMovies.toFixed(2))

}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    let score = 0
    let totalDrama = 0
    const dramaFilms = moviesArray.filter(movie => {
      if (movie.genre.includes('Drama')) {
       score += movie.score
       totalDrama += 1
      }
    })

    if (totalDrama === 0) {
        return 0
    }
    return Number((score/totalDrama).toFixed(2))
    
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const moviesYear = moviesArray.map(movie => { 
    return {title: movie.title, year: movie.year}
  })
  
  moviesYear.sort((a, b) => {
    if (a.year > b.year) {return 1}
    if (a.year < b.year) {return -1} 
    if (a.year = b.year) {return 0}
  })
  
  return moviesYear
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
