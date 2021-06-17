// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
const movies = require("./data")

function getAllDirectors(moviesArr) {
  const directorsArr = moviesArr.map((movie) => {
    return movie.director;
  })
  return directorsArr;
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(moviesArr) {
  const spielbergMovies = moviesArr.filter((movie) => {
    return movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
  })
  return spielbergMovies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArr) {
  if (moviesArr.length === 0) {
    return 0;
  }
  const totalScore = moviesArr.filter((movie) => {
    return movie.score !== undefined
  }).reduce((acc, movieScore) => {
    return acc + movieScore.score
  }, 0)
  return Math.round(100 * (totalScore / moviesArr.length)) / 100
}



// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArr) {
  if (moviesArr.length === 0) {
    return 0;
  }

  const dramaMovies = moviesArr.filter((movie) => {
    return movie.score !== undefined;
  }).filter((movie) => {
    return movie.genre.includes("Drama");
  });

  if (dramaMovies.length === 0) {
    return 0;
  }

  const averageDrama = dramaMovies.reduce((acc, movie) => {
    return acc + movie.score;
  }, 0)
  return Math.round(100 * (averageDrama / dramaMovies.length)) / 100
}



// // Iteration 4: Drama movies - Get the average of Drama Movies

// function average(arr) {
//   return arr.reduce((acc, el) => acc + el, 0) / arr.length
// }

// function dramaMoviesScore(moviesArr) {
//   if (moviesArr.length === 0) {
//     return 0;
//   }

//   const dramaMovies = moviesArr.filter((movie) => {
//     return movie.score !== undefined;
//   }).filter((movie) => {
//     return movie.genre.includes("Drama");
//   });

//   if (dramaMovies.length === 0) {
//     return 0;
//   }

//   return Math.round(100 * average(dramaMovies.map(movie => movie.score))) / 100
// }

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArr) {
  const movieYears = moviesArr.filter((movie) => {
    return movie.year !== undefined;
  }).sort((a, b) => {
    if (a.year < b.year) {
      return -1;
    } else if (a.year > b.year) {
      return 1;
    } else if (a.year === b.year) {
      if (a.title < b.title) {
        return -1;
      } else if (a.title > b.title) {
        return 1;
      } else if (a.title === b.title) {
        return 0;
      }
    }
  }, 0);

  return movieYears;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(_movieArr) {
  const movieArr = _movieArr.slice(0);
  return movieArr.sort((a, b) => {
    if (a.title < b.title) {
      return -1;
    } else if (a.title > b.title) {
      return 1;
    } else if (a.title === b.title) {
      return 0;
    }
  }).slice(0, 20).map((movie) => {
    return movie.title;
  })
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() { }

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() { }



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
