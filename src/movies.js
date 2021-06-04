// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.

const movies = require('./data');

// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(allFilms) {
  let mappedDirectors = allFilms.map((film) => {
    return film.director;
  });
  return mappedDirectors;
}

/*
function toCleanDirectors(directors) {
  let unifiedDirectors = [];
  let cleanedList = directors.forEach((oneDirector) => {
    if (!unifiedDirector.includes(oneDirector)) {
      unifiedDirector.push(oneDirector);
    }
  });
  return unifiedDirector;
}
*/

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(allMovies) {
  let filteredMovies = allMovies.filter((movie) => {
    return (
      movie.genre.includes('Drama') && movie.director == 'Steven Spielberg'
    );
  });
  return filteredMovies.length;
}
// Hi TA, also tried with the code below, including the if condition
// let filteredMovies = drama.filter((movie) => {
// if (movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')) {
// return true;
// } else {
// return false;
// }
// })
// return filteredMovies.length;

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(allMovies) {
  if (allMovies.length == 0) {
    return 0;
  }
  let scoringMovie = allMovies.reduce((sum, movie) => {
    if (movie.score == '' || !('score' in movie)) {
      return sum;
    }
    return sum + movie.score;
  }, 0);
  return parseFloat((scoringMovie / allMovies.length).toFixed(2));
}
// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(allFilms) {
  let dramaMovies = allFilms.filter((movie) => {
    return movie.genre.includes('Drama');
  });
  let averageScore = scoresAverage(dramaMovies);
  return averageScore;
}
// if (dramaMovies.length == 0) {
//   return 0;
// }

// let allDramas = dramaMovies.reduce((sum, movie) => {
//   if (!movie.genre == 'Drama') {
//     return 0;
//   }
// }, 0);

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(allMovies) {
  let cloneYear = JSON.parse(JSON.stringify(allMovies));
  cloneYear.sort((first, second) => {
    if (first.year > second.year) {
      return 1;
    } else if (first.year < second.year) {
      return -1;
    } else if (first.year == second.year) {
      if (first.title > second.title) {
        return 1;
      } else if (first.title < second.title) {
        return -1;
      } else return 0;
    } else {
      return 0;
    }
  });
  return cloneYear;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(allMovies) {
  let cloneMovies = JSON.parse(JSON.stringify(allMovies));

  cloneMovies.sort((first, second) => {
    if (first.title > second.title) {
      return 1;
    } else if (first.title < second.title) {
      return -1;
    } else {
      return 0;
    }
  });
  let twentyTop = cloneMovies.map((movie) => {
    return movie.title;
  });
  if (twentyTop.length < 20) {
    return twentyTop;
  } else return twentyTop.slice(0, 20);
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
