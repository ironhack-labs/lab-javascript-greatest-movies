// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.

const movies = require("./data");

// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  return movies.map(movie => movie.director)
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  const howMany = movies.filter(movie => 
    movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')
  )
  return howMany.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  if(movies.length === 0){
    return 0;
  }
  const sum = movies.reduce((acc, movie) => {
    if(movie.score){
      return acc += movie.score;
    }
    return acc;
  }, 0);
  const average = sum / movies.length;
  return parseFloat(average.toFixed(2));
} 

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesScore(movies) {
  const dramaMovies = movies.filter((movie) => movie.genre.includes('Drama'));
  averageDrama = scoresAverage(dramaMovies);
  return averageDrama;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  const sortedMovies = [...movies];
  sortedMovies.sort((firstYear, secondYear) => {
    if (firstYear.year < secondYear.year) {
      return -1;
    } else if(firstYear.year > secondYear.year){
      return 1;
    }else{
      return firstYear.title.localeCompare(secondYear.title);
    }
  })
  return sortedMovies;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  const allmoviesTitle = movies.map(movie => movie.title);
  const moviesAlphabeticOrdered = allmoviesTitle.sort((firstTilte, secondTitle) => firstTilte.localeCompare(secondTitle));
  const twentyFirstMovies = moviesAlphabeticOrdered.slice(0, 20);
  return twentyFirstMovies;
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
