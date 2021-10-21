// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.

const movies = require("./data");

// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
    return movies.map((movies) => movies.director)
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  const stevenDramas = movies.filter(el => (el.director==="Steven Spielberg" && el.genre.includes('Drama') ))
    return stevenDramas.length //length will return the amount of movies in the new array
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
    const totalScore = movies.reduce((acc, curr) => {
     return (acc + curr.score) / movies.length;
 }, 0);
}
//unsure why this fails 


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore() {}

//I know I have to filter the drama movies first, then sum the scores and divide by length but this is as far as I got so far. 



// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  const arrayCopy = [...movies];//making a non destructive copy
    return arrayCopy.sort((a, b) => {
      if (a.year > b.year) {
        return 1;
      } else if (a.year < b.year) {
        return -1;
      } else {
        return 0;
      }; //unsure how to sort by alphabetical along with the year sort, perhaps include it in the if loop? 
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  return movies
  .map(movie => movie.title)
  .sort((a, b) => {
 
    if (a > b) {
      return 1;
    } else if (a < b) {
      return -1;
    } else {
      return 0;
    }
  })
  .slice(0, 20); //I think this makes sense but testing is not running anymore...
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
