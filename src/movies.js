// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  const mappedArray = movies.map(function (singleMovie){
    return singleMovie.director;
   })
   return mappedArray;
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies){
  const movieDirector = movies.filter( (directorName) => {
    return directorName.director === 'Steven Spielberg';
  })
  for (let i=0; movieDirector === 'Steven Spielberg'; i++){
    const directorDrama = movieDirector.filter( (dramaMovie) => {
      return dramaMovie.genre === 'Drama';
    })
  }
  return directorDrama;

}
// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  let movieScores = movies.reduce(function (accValue, currentValue){
    return accValue.score + currentValue.score
  })
  return movieScores

}
// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore() {}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear (movies) {
  const newArray = movies.map(function (movieYear){
    return movieYear.year
   })
  return newArray.sort();
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  for (let i=0; i<20;i++){
    const newArr = movies.map(function(movieTitle){
     return movieTitle.title
    })
    return newArr.sort();
  }
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
