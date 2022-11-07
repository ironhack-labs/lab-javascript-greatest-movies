// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {

   /* const directorMovie = moviesArray.map( movie => ({
        director: movie.director
     }))*/

     const directorMovie = moviesArray.map(movie => (
      movie.director
    )) 

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
    return {year: movie.year}
  })
  
  moviesYear.sort((a, b) => {
    if (a.year > b.year) {return 1}
    if (a.year < b.year) {return -1} 
    if (a.year = b.year) {return 0}
  })
  
  const ordermovies = moviesArray.map(movie => { 
    return {title: movie.title, year: movie.year}
  })

  return moviesYear
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {

  const arrMovies1 = moviesArray.map(movie => {
    return {title: movie.title}
    })
  arrMovies1.sort((a,b) => {
  if (a.title > b.title) {return 1}
    if (a.title < b.title) {return -1} 
    if (a.title = b.title) {return 0}
})

  const arrMovies2 = moviesArray.map(movie => {
    return movie.title
  })
  arrMovies2.sort((a,b) => {
  if (a > b) {return 1}
    if (a < b) {return -1} 
    if (a = b) {return 0}
})
  
 
  if (moviesArray.length >= 20){return arrMovies1.slice(0,20)}
   {return arrMovies2}
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  arrDuration = moviesArray.map(movie => {
    let hours = movie.duration.slice(0,1)
    let minutes = movie.duration.slice(-5, -3)
    console.log (hours)
    return {duration: Number(hours)*60 + Number(minutes)}
  })

return arrDuration
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
  if (moviesArray.length === 0) {
    return null
  }

  if (moviesArray.length === 1) {
    return `The best year was ${moviesArray[0].year} with an average score of ${moviesArray[0].score}`
  }

 const orderByScore = moviesArray.sort((a,b) => {
   if (a.score > b.score) {return -1}
   if (a.score < b.score) {return 1}
   if (a.score = b.score) {return 0}
 }) 
  return `The best year was ${orderByScore[0].year} with an average score of ${orderByScore[0].score}`
}
