// The `movies` array from the file `src/data.js`.
//console.log('movies: ', movies);


// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {

    const moviesDir = movies.map(eachMovie => eachMovie.director)
    return moviesDir
  }

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
 
  let dramaMovies = movies.filter(eachMovie => eachMovie.director === "Steven Spielberg" && eachMovie.genre.includes('Drama'))
  return dramaMovies.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  if (movies.length === 0) {
    return 0
  }

  const moviesAvg = movies.reduce((acc, eachMovie) => {

    if (!eachMovie.score) {
        eachMovie.score = 0
      }
    return acc + eachMovie.score
  }, 0)
  
  let average = moviesAvg / movies.length
  average = parseFloat(average.toFixed(2))
  return average

}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  
  let dramaMoviesAvg = movies.filter(eachMovie => eachMovie.genre.includes('Drama'))

  if (dramaMoviesAvg.length === 0) {
    return 0
  }


  return scoresAverage(dramaMoviesAvg)
  
  
  

}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {

  moviesCopy = [...movies]
  
  
  moviesYear = moviesCopy.sort((a, b) => {
     if (a.year < b.year)
     return -1;
    if (a.year > b.year)
    return 1;
    if (a.year === b.year) {
      if (a.title > b.title) {
        return 1
      } else if (a.title < b.title) {
        return -1
      }
    }
    
    })
  
    // moviesYearTitle = moviesCopy.sort((a, b) => {
    //  return a.title - b.title
    
    // })
  
  
  
  
  return moviesYear

}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {

  moviesOrder = [...movies]
  
  // const realClassroomCopy = JSON.parse(JSON.stringify(classroom))
  
    let moviesTitle = moviesOrder.sort((a, b) => {
    if (a.title < b.title)
      return -1;
    if (a.title > b.title)
      return 1;  
    })
  
    let titleMov = moviesTitle.map(eachMovie => {  
      title = eachMovie.title
      return title
    })
  
  if (titleMov.length > 20) {
      return titleMov.slice(0,20)
  }
  




  return titleMov

}

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
