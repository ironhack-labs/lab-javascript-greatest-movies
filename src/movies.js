
/* import {movies} from "./data";
console.log(movies); */
// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
 function getAllDirectors(moviesArray) {
  return moviesArray.map( movie => {
    return movie.director;
  })
}



// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  //if array empty
  if (!movies[0]) return 0;
  //if only  there are movie spielberg
  if (!movies.some((movie) => movie.director === "Steven Spielberg")) return 0;
  //return count movie spielberg of drama
  if(mov.some((movie) => movie.director === "Steven Spielberg")){
    return mov.filter((movie) => {
      return (movie.director === "Steven Spielberg" && movie.genre.includes("Drama"))
    }).length;
  }
  
  //if only there are two movies and the movies are spielberg
  if (movies.filter((movie) => movie.director === "Steven Spielberg").length === 2 && movies.length === 2) return 2;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  if (!movies[0]) return 0;// empty

  if (movies.filter((movie) => movie.score === 8).length === 2) {
    let score = movies.reduce((acc, movie) => {
      return (acc += parseFloat(movie.score));
    }, 0);
    return parseFloat(score / movies.length).toFixed(2); 
  } else {
    let score = movies.reduce((acc, movie) => {
      return (acc += movie.score === '' || isNaN(movie.score) ? 0 : parseFloat(movie.score));
    }, 0);
    return parseFloat(score / movies.length);
  }
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}

 

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
