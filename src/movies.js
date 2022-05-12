// The `movies` array from the file `src/data.js`.
// console.log('movies: ', movies);

// const movies = require("./data");


// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

//   Mi función original, funciona bien, pero la de abajo creo que es el bonus... me sale con el console.log bien al menos...
// function getAllDirectors(list) {
//   return list.map(direct => direct.director)
// }
function getAllDirectors(list) {
  let directors = list.map(direct => direct.director);
  return directors.filter((element, index) => directors.indexOf(element)===index);
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(list) {
  return list.filter(movie => movie.genre.includes("Drama") && movie.director === "Steven Spielberg").length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals

function scoresAverage(movies) {
  let averageScoreMovies = movies.reduce ((score, movie) => {
    if (typeof movie.score !== 'number'){
      score = score
    } else {
      score += movie.score
    }
    return score
            }, 0 ) / movies.length;  
  return Math.round(averageScoreMovies * 100) / 100
}

// function scoresAverage(list) {
// let scoreAvg = list.reduce((scores, movie) => scores + movie.score, 0) /list.length;
// return scoreAvg = Math.round(scoreAvg*100)/100;

// }
//si pongo return scoreAvg.toFixed(2) me devuelve mas fallos!!! pero en console.log lo devuelve bien!

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(list) {
  let listOfDramas = list.filter(genre => genre.genre.includes("Drama") === "Drama")

   
}

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
