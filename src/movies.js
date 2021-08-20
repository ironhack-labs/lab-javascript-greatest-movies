// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.

const movies = require("./data")

// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  const directors = movies.map (function (movie) {
    return movie.director
  })
  return directors
}
getAllDirectors(movies)

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  const spielbergMovies = movies.filter (function(movie) {
    if (movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')) {
      return true;
    }
  })
  
return spielbergMovies.length

}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  if (movies.length === 0) return 0;
  const average = movies.reduce(function(sum, movie) {
    if (movie.score === '' || movie.score === undefined) {
      movie.score = 0;
    }
    return sum + movie.score
  }, 0)
   average / movies.length;
   return Number(average.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  const dramaMovies = movies.filter(function(movie) {
    return movie.genre.indexOf('Drama') !== -1
  })
  return scoresAverage(dramaMovies);
}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  const sortedMovies = JSON.parse(JSON.stringify(movies)).sort(function (a, b) {
    if (a.year !== b.year) {
      return a.year - b.year;
    } else {
      return a.title.localeCompare(b.title);
    }
  });
  return sortedMovies;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  const movieTitles = movies.map(function (movie) {
    return movie.title
  })
  const sortedMovies = movieTitles.sort(function (a, b) {
    return a.localeCompare(b);
  })
  const result = sortedMovies.slice(0, 20);
  return result;
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
