// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {

  const allDirectors = movies.map(eachDirector => {
    const directorsArray = eachDirector.director
    return directorsArray
  })

  return allDirectors
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {

  const onlySpil = movies.filter (eachFilm => {
    if (eachFilm.director === 'Steven Spielberg' && eachFilm.genre.includes('Drama')) {
      return true
  }
  })
    return onlySpil.length
  } 

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) { 

  if (movies.length === 0) {
    return 0
  } else {
  
  const argValue = movies.reduce((acc, avg) => {

    return (acc + avg.score) 
  
  }, 0)
  
  const finalAvr = ((argValue/movies.length)).toFixed(2)
  
  return parseFloat(finalAvr)

  }

}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) { 

  const allDrama = movies.filter (eachDramaMovie => {
    if (eachDramaMovie.genre.includes('Drama')) {
      return true
    } else {
      return 0
    }
  })

  const totalAvgDrama = allDrama.reduce((acc, avgDrama) => {
    return acc + avgDrama.score
  }, 0)
  
  const finalDramaAvr = ((totalAvgDrama/ allDrama.length)).toFixed(2)

  return parseFloat(finalDramaAvr)
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {

  const moviesCopy = JSON.parse(JSON.stringify(movies))
  
  const ordered = moviesCopy.sort((a, b) => {

    if (a.year !== b.year) {
      return a.year - b.year 
    } else {
    return b.title - a.title
  }
    })

  return ordered

 }

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) { 
  
  if (movies.length <= 20) {const orderedAlpha = movies.sort((a, b) => {

     return b.title - a.title 
    
    })


  const onlyStrings = orderedAlpha.map ( inMinutes => {
    const change = inMinutes.title
    
    return change
})

  return onlyStrings
} else {
  return onlyStrings.slice[0, 20]
}
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {

  const timeInMinutes = movies.map ( inMinutes => {
    const change = inMinutes.duration
    const byHours = parseFloat(change.charAt(0) * 60)
    const byMinutes = parseFloat(change.substring(3, 5))

    const totalTime = byHours + byMinutes
    
    return totalTime
})

return timeInMinutes

}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(movies) { 

  if (movies.length === 0) {
    return null
  }
}



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
