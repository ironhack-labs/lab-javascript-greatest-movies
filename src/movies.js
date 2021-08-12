// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  return moviesArray.map(movie => movie.director) 
}



// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  const stevenDramaMovies = moviesArray.filter(movie => movie.director === "Steven Spielberg" && movie.genre.includes('Drama'))
  return stevenDramaMovies.length
}




// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage() {}    // <---------.reduce









// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore() {}









// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
 function orderByYear(movies) {
  const orderByReleaseYear = movies.slice().sort((movie1,movie2) => {
    if(movie1.year === movie2.year){
      return // (no se que poner aquí)
    } else if ( movie1.year !== movie2.year){
      return movie1.year - movie2.year; 
    }
  });
  return orderByReleaseYear;
}







// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arrayMovies) {
  const titles = arrayMovies.map(movieTitle => movieTitle.title)
  titles.sort((a,b) => {
    if(a < b) return -1;
    if(a > b) return 1;
  })
  return titles.slice(0,20)
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
