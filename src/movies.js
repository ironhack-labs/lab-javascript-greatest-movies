// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  return movies.map(movie => movie.director)
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  if(movies.length === 0){
    return 0
  }

  const totalDramaStevenFilms = movies.filter(movie => movie.director === 'Steven Spielberg' && movie.genre.includes('Drama'))

  return totalDramaStevenFilms.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  if(movies.length === 0){
    return 0
  }
  const avg = movies.reduce(function (accumulator, number){
    
    if(number.score !== undefined){
      return accumulator + number.score
    } else {
      return accumulator
    }
  }, 0)
  //const avg = movies.reduce((acc, sum) => (acc + sum.score) || acc, 0)
  //movies.reduce(function(acc, sum))
  return parseFloat((avg / movies.length).toFixed(2))
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {

  const dramaFilms = movies.filter(movie => movie.genre.includes('Drama') 
  )
  const totalRate = dramaFilms.reduce(function (accumulator, peli) {
    return accumulator += peli.score
  }, 0)

  if(dramaFilms.length === 0){
    return 0
  }
  return parseFloat((totalRate / dramaFilms.length).toFixed(2))
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  const order = movies.sort((film1, film2) => film1.year - film2.year)
  
  return order
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  const titles = movies.map(filmName => filmName.title)

   const orderByTitle = titles.sort();

  return orderByTitle.slice(0, 20)
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
