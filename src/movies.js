// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(array) {
  const director = array.map(function(movie){
    return movie.director
  })
  return director
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(array) {
  const moviesDramaSpielberg = array.reduce((acc, movie)=>{
    if(movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')){
      return acc + 1
    }else {
      return acc
    }
  }, 0)
  return moviesDramaSpielberg
}
// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(array) {
  if(!array.length){
    return 0
  }
  const averageScore = array.reduce((acc, movie)=>{
    if(!movie.score){
      return acc 
    }
    return acc + movie.score
  }, 0)
  return Number.parseFloat((averageScore / array.length).toFixed(2))
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(array) {
  const moviesDrama = array.filter((movie)=>{
    return movie.genre.includes('Drama')
  })
  if(!moviesDrama.length){
    return 0
  }
  const averageDramaMovies = moviesDrama.reduce((acc, movie)=>{
    return acc + movie.score
  },0)
  return Number.parseFloat((averageDramaMovies / moviesDrama.length).toFixed(2))
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(array) {
  const orderFilms = array.map((movie)=>{
    return movie
  })
  orderFilms.sort((a, b)=>{
    if(a.year > b.year){
      return 1
    }else if(a.year < b.year){
      return -1
    }else if(a.title > b.title){
      return 1
    }else if(a.title < b.title){
      return -1
    }
  })
  return orderFilms
}


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(array) {
  const filmsByOrder = array.map((movie)=>{
    return movie.title
  })
  filmsByOrder.sort()
  if(filmsByOrder.length > 20){
    return filmsByOrder.slice(0, 20)
  }
  return filmsByOrder
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
