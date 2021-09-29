// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.

const movies = require("./data");

// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(arrayOfMovies) {
  let listOfDirectors =[];
    arrayOfMovies.map(movie => listOfDirectors.push(movie.director))
  return listOfDirectors;

}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
 function isSpielberg (movie) {
   const isSpielberMovie = movie.director === "Steven Spielberg";
   const isDramaMovie = movie.genre.includes("Drama");
   if (isSpielberMovie && isDramaMovie) {
     return true
   }
   return false
 }
 const spielbergMovies = movies.filter(isSpielberg);
 return spielbergMovies.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  let scores = [];
  movies.map(movie => scores.push(movie.score))
  let sum = scores.reduce((total, score) => {
    return total + score
  }, 0)
  let average = sum / scores.length;
  return Math.round(average);
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  let dramaMovies = movies.filter(function(movie) {
    return movie.genre.includes('Drama')
  });
  return scoresAverage(dramaMovies);
}
  
  

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  let orderMovies = moviesArray.sort(function(a , b) {return a.year - b.year});
  return orderMovies
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const moviesArr = [...moviesArray];
  sortedMovies = moviesArray.sort((a , b) => {
    return (a.title - b.title)
  })
  .map(sortedMovies => sortedMovies.title).slice(0,20);
  return sortedMovies;
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
