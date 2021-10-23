// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  return movies.map((item) => item.director) 
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {

  return movies.filter((item) => item.director === 'Steven Spielberg' && item.genre.includes('Drama')
  ).length
}


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {

  if (movies.length === 0)
  return 0

 const scoresSum = movies.reduce(function(accu, movie) {
   if (movie.score) {
       return accu + movie.score
  } else {
       return accu
  }
 }, 0)

  return parseFloat((scoresSum / movies.length).toFixed(2))
}



// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {

if (movies.length === 0)
return 0

const scoresSum = movies.reduce(function(accu, movie) {
 if (movie.score && movie.genre.includes('Drama')) {
     return accu + movie.score
  } else {
     return accu
  }
}, 0)

return parseFloat((scoresSum / movies.length).toFixed(2))
}



// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {

  const sortedMovies = movies.sort(function(a, b) {
    if (a.year > b.year) return 1
    else if (a.year < b.year) return -1
    else /*(a.year === b.year)*/ return 0 //{ //ordenando alfabéticamente me da fallo!!!!! ¿?
      if (a.title > b.title) return 1
      else if (a.title < b.title) return -1
      else /*(a.title === b.title)*/ return 0
    // }
  })

return sortedMovies  //me dice que el objeto que recibe es =, que no es un "new array" ¿?. .sort no da un new array?
}




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
