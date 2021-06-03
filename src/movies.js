// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.

const movies = require("./data")

// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors() {}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

const howManyMovies= movies => {
  let filteredMovies = movies.filter(movie => movie.genre.includes("Drama") 
    && movie.director === "Steven Spielberg")
  return filteredMovies.length
};

// Iteration 3: All scores average - Get the average of all scores with 2 decimals

const scoresAverage = movies => {
  let totalScores = movies.reduce((num, element) => {
    return num + element.score
  }, 0);
  let average = totalScores / movies.length
  return average 
};


// Iteration 4: Drama movies - Get the average of Drama Movies

const dramaMoviesScore = movies => {
  let dramas = movies.filter(movie => movie.genre === "Drama")
  let average = dramas.reduce((num, element) => {
    return num + element.score
  }, 0);
  return average
};

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

const orderByYear = movies => {
  let clonedMovies = JSON.parse(JSON.stringify(movies))
  let sortedMovies = clonedMovies.sort((aMovie, bMovie) => {
    if (aMovie.year > bMovie.year) {
      return 1
    } else if (aMovie.year < bMovie.year) {
      return -1
    } else if (aMovie.title < bMovie.title) {
      return -1 
    } else if (aMovie.title > bMovie.title){
      return 1
    }
  });
  return sortedMovies;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

const orderAlphabetically = movies => {
  let clonedMovies = JSON.parse(JSON.stringify(movies))
  let sortedMovies = clonedMovies.sort((movie1, movie2) => {
    if (movie1.title > movie2.title) {
      return 1
    } else {
      return -1
    }
  });
  let onlyTitles = sortedMovies.map(movie => movie.title)
  console.log(onlyTitles)
  let firstTwenty = onlyTitles.splice(0,20)
  return firstTwenty;
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