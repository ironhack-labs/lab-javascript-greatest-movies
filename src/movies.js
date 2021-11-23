/* Notas rápidas

Function Expression - const welcomeMessage = function (message) {console.log(message)}



*/


// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

movies = [
  {
    title: 'The Shawshank Redemption',
    year: 1994,
    director: 'Francis Ford Coppola',
    duration: '2h 22min',
    genre: ['Crime', 'Drama'],
    score: 9.3
  },
  {
    title: 'The Godfather',
    year: 1972,
    director: 'Francis Ford Coppola',
    duration: '2h 55min',
    genre: ['Crime'],
    score: 9.2
  }]

function getAllDirectors(arrayOfMovies) {
  let arrayOfDirectors = arrayOfMovies.map(movie => movie.director)
  return arrayOfDirectors
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(arrayGiven) {

  let arraySpielberg = arrayGiven.filter(movie => movie.director === "Steven Spielberg")

  let arraySpielbergDramaMovies = []

  for (let i = 0; i < arraySpielberg.length; i++) {
    let arrayHasDramaGenre = arraySpielberg[i].genre.filter(genreOfMovie => genreOfMovie === "Drama")

    if (arrayHasDramaGenre.length > 0) {
      arraySpielbergDramaMovies.push(arraySpielberg[i])
    }
  }
  
  return arraySpielbergDramaMovies.length
}

console.log(howManyMovies(movies))

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage() {}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore() {}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear() {}

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