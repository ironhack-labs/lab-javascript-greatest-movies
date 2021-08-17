// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.

const movies = require('./data')

// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {

   const director = movies.map(eachMovi => {
     return eachMovi.director
   });
  return director  
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  
  const howMovies = movies.filter(eachMovie => {
  const red = eachMovie.genre.includes('Drama')
  const blue = eachMovie.director.includes('Steven Spielberg')
    if (red && blue) {
      return eachMovie
    } 
    
})
    return howMovies.length
}
// Iteration 3: All scores average - Get the average of all scores with 2 decimals

function scoresAverage(movies) {
  


    let sum = movies.reduce((valorAnterior, valorActual) => {
      return valorAnterior + valorActual.score
    }, 0)
    let avg = Number((sum/movies.length).toFixed(2));
    
      return avg
}


  





// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore() {}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(date) {

    
      movies.sort( (a, b) => {
        if (a.year > b.year) {
          return 1;
        }
        if (a.year < b.year){
          return -1;
        }

      });




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
