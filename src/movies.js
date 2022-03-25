// The `movies` array from the file `src/data.js`.
// console.log('movies: ', movies);

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(arr) {
  const directors = arr.map(function(movie){
    return movie.director
  })
  return directors
}
//console.log(getAllDirectors(movies))

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(arr) {
  const stevenSpielberg = arr.filter(function(findSteven){
    return findSteven.director === 'Steven Spielberg'
  })
  
  const onlyDrama = stevenSpielberg.filter(function(isItDrama){
    return isItDrama.genre.includes('Drama')
  })
  return onlyDrama.length
}
//console.log(howManyMovies(movies))

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(arr) {
  const sum = arr.reduce(function(acc, val){ 
    return acc + val.score
  }, 0) 
  
  const averageRounded = (Math.round((sum / arr.length)*100)/100)
   return averageRounded
}
//console.log(scoresAverage(movies))

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(arr) {
  // sort drama movies
  // sum drama score 
  // divide by entry amount
  const dramaMovies = arr.filter(function(dramaMovie){
    return dramaMovie.genre.includes('Drama')
  }) 
  return scoresAverage(dramaMovies)
}
//console.log(dramaMoviesScore(movies))

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arr) {
  // new array
  // sort by year
  const sorted = [...arr]
  const sortedArray = sorted.sort(function(a, b){
    if (a.year === b.year){
      if (a.title < b.title){
        return -1;
      } if (a.title > b.title){
        return 1;
      }
    }
    return a.year - b.year
  })
  return sorted
}
//console.log(orderByYear(movies))

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arr) {
 const sliced = arr.slice(0,20)
 const onlyTitles = sliced.map(function(movieTitle){
   return movieTitle.title
 })

 const titleOrdered = onlyTitles.sort(function(a,b){
   if (a < b) {
     return -1;
   } else if (a > b){
     return 1;
   }
   })
   return titleOrdered
}
//console.log(orderAlphabetically(movies))

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
