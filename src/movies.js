// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
// const movies = [
//   {
//     title: 'The Shawshank Redemption',
//     year: 1994,
//     director: 'Frank Darabont',
//     duration: '2h 22min',
//     genre: ['Crime', 'Drama'],
//     score: 9.3
//   },
//   {
//     title: 'The Godfather',
//     year: 1972,
//     director: 'Francis Ford Coppola',
//     duration: '2h 55min',
//     genre: ['Crime', 'Drama'],
//     score: 9.2
//   },] 

const movies = require("./data");

 
function getAllDirectors(movies) {
  return movies.map( movie => movie.director );
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  let spielbergMovies = movies.filter(movie => movie.director === 'Steven Spielberg' && movie.genre.includes('Drama'));
  return spielbergMovies.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  if (!movies.length) return 0;
  return parseFloat((movies.reduce((acc, movie ) => {
    if (movie.score && typeof movie.score === "number"){
      return acc + movie.score;
    }
    return acc
  }, 0) / movies.length).toFixed(2)); 
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  let dramaMovies = movies.filter(movie => movie.genre.includes('Drama'));
  return scoresAverage(dramaMovies);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  let slicedMovies = movies.slice()
  return slicedMovies.sort((a, b) => {
    if (a.year < b.year) return -1
    if (a.year > b.year) return 1
    if (a.year === b.year) {
      let titleA = a.title.toUpperCase()
      let titleB = b.title.toUpperCase()
      if (titleA < titleB) return -1
      if (titleA > titleB) return 1
      if (titleA === titleB) return 0      
    }
  })
}
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  let slicedMovies = movies.slice()
  let alphabeticallyMovies = slicedMovies.sort((a, b) => {
      let titleA = a.title.toUpperCase()
      let titleB = b.title.toUpperCase()
      if (titleA < titleB) return -1
      if (titleA > titleB) return 1
      if (titleA === titleB) return 0      
    }
  )
  let onlyTitles = alphabeticallyMovies.map(movie => movie.title)
  let only20 = onlyTitles.slice(0, 20)
  return only20
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
