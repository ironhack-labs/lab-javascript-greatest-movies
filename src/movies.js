// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.


// // Función tradicional
// function bob(a) {
//   return a + 100;
// }

// // Función flecha
// let bob = a => a + 100;









const { filter } = require("./data");
const movies = require("./data");

// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(bestMovies) {

  const allDirectors = bestMovies.map(eachmovie => {
    return eachmovie.director
  })
  return allDirectors
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(drama) {
  const steven = drama.filter(eachgenre =>
    eachgenre.genre.filter(genre => genre == 'Drama').length == 1
  )

  const spielberg = steven.filter(film => film.director == 'Steven Spielberg')
  return spielberg.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(top) {
  if (top.length === 0)
    return 0
  const notScore = top.filter(eachFilm =>
    eachFilm.score !== undefined)

  const media = notScore.reduce((acc, eachScore) => {
    // if (
    //   eachScore.score !== undefined
    // ) {
    return acc + eachScore.score
    // }

  }, 0)


  // const dec = (media / top.length).toFixed(2) "No sé porque así no vale D:"
  // return dec


  return Math.round((media / top.length) * 100) / 100
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(comparative) {


  const drama = comparative.filter(eachgenre =>
    eachgenre.genre.filter(genre => genre == 'Drama').length == 1
  )

  console.log('*******************************************************************************')
  console.log('*******************************************************************************')
  console.log('*******************************************************************************')
  console.log(drama)
  console.log('*******************************************************************************')
  console.log('*******************************************************************************')

  if (comparative.length === 0)
    return 0


  const media = comparative.reduce((acc, eachScore) => {
    return acc + eachScore.score
  }, 0)

  return Math.round((media / comparative.length) * 100) / 100
}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(sort) {

  // const byYear = JSON.parse(JSON.stringify(sort))

  // byYear.sort(a, b) => { return a - b })

  // return byYear
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(alpha) {

  const alphabetic = SON.parse(JSON.stringify(alpha))

}

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
