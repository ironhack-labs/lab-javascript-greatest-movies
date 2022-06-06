// The `movies` array from the file `src/data.js`.
//console.log('movies: ', movies);

//const movies = require("./data")


// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(movies) {

  /* const director = movies.map(function(person){
  const personDirectors = person.director
  return personDirectors
  })

  return director */

  const director = movies.map(person => {
    const personDirectors = person.director
    return personDirectors
  })

  return director
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {

  const stevenMovies = movies.filter(function (eachMovies) {
    const spilbergFilms = eachMovies.director
    return spilbergFilms.includes('Steven Spielberg') && eachMovies.genre.includes('Drama')
  })

  return stevenMovies.length
}


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {

  let averageSum = movies.reduce((acc, eachMovies) => {
    let sumScore = acc + eachMovies.score
    return sumScore / eachMovies.score.length
  }, 0)

  return averageSum
}











// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {

  const stevenMovies = movies.filter(function (eachMovies) {
    const dramaMovies = eachMovies.genre.includes('Drama')
    return dramaMovies
  })
  return scoresAverage(stevenMovies)
}







// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {



}






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
