// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.

const movies = require("./data");


// How could you "clean" a bit this array and make it unified (without duplicates)?
// function getAllDirectors (filmes) 
//  const novoArray = filmes.map(function(cadaElemento, index, arrayCompleto){
  //  return cadaElemento.director;
   //   });
 // return novoArray;;
// } 

function getAllDirectors (moviesArr){
  return moviesArr.map((movie) => movie.director)
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArr) {
 const DramaSpielberg = moviesArr.filter(movie => 
    (movie.director === "Steven Spielberg")
    && (movie.genre.indexOf("Drama") !== -1));
  
  return DramaSpielberg.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArr) {
  if (moviesArr.length === 0) {return 0};

  const scoresArray = moviesArr.map((movie) => {
    if (!movie.score){
      return 0;
      }
   return movie.score
    });

  const totalScore = scoresArray.reduce((accumulator, currentValue) => accumulator + currentValue);
  return Math.round((totalScore/ scoresArray.length) * 100) / 100;
  }

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArr) {
  const dramaMovies = moviesArr.filter(movie => 
    (movie.genre.indexOf("Drama") !== -1 ));

    if (dramaMovies.length === 0) {return 0}; 

    const scoresDramaArr = dramaMovies.map((movie) => movie.score);
    const totalDramaScore = scoresDramaArr.reduce((accumulator, currentValue) => accumulator + currentValue);
    
    return Math.round((totalDramaScore/ scoresDramaArr.length) *100) /100;
}
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArr) {
  let orderByYearArr = moviesArr.sort((movie1, movie2) => {
   return movie1.year - movie2.year;
 })
}

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
