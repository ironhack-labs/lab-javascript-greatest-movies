// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

const movies = require("./data.js")

function getAllDirectors(anArray) {
  return anArray.map((name) => {return name.director
  });
};

/*function getAllDirectorsUnique(anArray) {
  return Set(getAllDirectors(anArray))
  };
*/

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(anArray) {
  const Spielberg = anArray.filter((name) => {
    return name.director === 'Steven Spielberg'});
  
  const dramaSpielberg = Spielberg.filter((something) => {
    return something.genre.includes("Drama")});
  
return dramaSpielberg.length
};


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(anArray) {
    const hola = anArray.reduce((acc, puntuacion) => {
      return acc + puntuacion.score
    });

const longitud = hola.length
return longitud.toFixed(2)
};

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
