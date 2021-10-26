const movies = require('./data')
// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?


function getAllDirectors(movies) {
  const director = movies.map(eachDirector => eachDirector.director)
  return director
  // return (moviess.map(function(elemMovie){
  //    return elemMovie.director 
  //   console.log(elemMovie.director)

}

// let dramaMovies = movies.filter((movie) => {

//   return movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')




// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  let dramaMovies = movies.filter((movie) => {

    return movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')
  });
  console.log(dramaMovies.length)
  return dramaMovies.length
}

function largestOfFour(movies) {
  let puntuacion = movies.filter((moviess) => {
    //console.log(puntuacion.score)
    return moviess.score
  });
  //console.log(puntuacion.score)
  console.log(puntuacion.length)

  return puntuacion.length
}
largestOfFour(movies)


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
}





// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore() { }

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear() { }

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically() { }

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() { }

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() { }



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
