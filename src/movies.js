// The `movies` array from the file `src/data.js`.
//console.log('movies: ', movies);

const movies = require("./data");


// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors (movies) {
const directors = movies.map(function (movie) {
return movie.director;
});
  return directors
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  const spielbergDramas = movies.filter(function (movie) {
    return movie.director === 'Steven Spielberg' && movie.genre.includes ('Drama'); 
  });  
  
   return spielbergDramas.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  const totalScore = movies.reduce(function(sum, movie) {
    return sum + movie.score;
  },0);
  let result = (totalScore / movies.length).toFixed(2);
  return parseFloat(result);
}
  

// Iteration 4: Drama movies - Get the average of Drama Movies
// 1. filter arr for drama movies
// 2. get total score for drama movies
// 3. divide total score by drama movies length
function dramaMoviesScore(movies) {
  const dramaMovies = movies.filter(function (movie) {
    return movie.genre.includes ('Drama');
  });
  const dramaMoviesTotalScore = dramaMovies.reduce(function(sum, movie) {
    return sum + movie.score;
  },0);
  let result = dramaMoviesTotalScore / dramaMovies.length;
  return result;
}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  const oldToNew = [...movies];
    oldToNew.sort(function (a, b) {
    return a.year - b.year;
  });
  return oldToNew;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
// 1. get only titles (map)
// 2. sort alphabetically
// 3. print first 20
function orderAlphabetically(movies) {
  const movieTitles = movies.map(function(movie) {
    return movie.title;
  });
  let sortedTitles = movieTitles.sort(function (a, b) {
    return a.localeCompare(b);
  });
  return sortedTitles.slice(0,20);
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
