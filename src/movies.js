// The `movies` array from the file `src/data.js`.
//console.log('movies: ', movies);

const movies = require('./data');

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(array) {
  return array.map((movie) => movie.director);
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(array) {
  let stevenDrama = array.filter(
    (element) =>
      element.director === 'Steven Spielberg' && element.genre.includes('Drama')
  );

  return stevenDrama.length;

  //return  array.filter((element) => element.director === "Steven Spielberg" && element.genre.includes("Drama")).length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(array) {
  //let sum = 0;
  // return array.map((movie) => sum += movie.score)/movie.score.length
  if (array.length === 0) {
    return 0;
  }
  let sum = array.reduce(function (acc, movie) {
    if (movie.score === 0) {
      acc + 0;
    } else if (!movie.score) {
      return acc;
    } else {
      return acc + movie.score;
    }
  }, 0);

  return Math.round((sum / array.length) * 100) / 100;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(array) {
  let dramaMovies2 = array.filter((element) => element.genre.includes('Drama'));

  return scoresAverage(dramaMovies2);

  //or

  /* let dramaMovies = array.filter((element) => element.genre.includes("Drama"))

    if (dramaMovies.length === 0){
      return 0
    }
   let sum = dramaMovies.reduce (function (acc, movie){
      
      if(movie.score === 0) {
        acc + 0;
      } else if(!movie.score){
       return acc
      } else{
         return acc + movie.score
      }
    },0);

  return Math.round((sum /dramaMovies.length) * 100) / 100 */
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(array) {
  let result = [...array].sort(function (a, b) {
    if (a.year !== b.year) {
      return a.year - b.year;
    } else {
      return a.title.localeCompare(b.title);
    }
  });

  return result;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(array) {
  let titleArray = array.map((element) => element.title);

  let sortedTitles = titleArray.sort(function (a, b) {
    return a.localeCompare(b);
  });

  return sortedTitles.slice(0, 20);
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
    bestYearAvg
  };
}
