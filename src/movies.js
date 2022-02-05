// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
const movies = require('./data.js');

function getAllDirectors(movies) {
  const directorsName = movies.map((movie) => {
    return movie.director;
  });
  return directorsName;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  const stevenFilms = movies.filter(function (movie) {
    if (
      movie.genre.includes('Drama') &&
      movie.director.includes('Steven Spielberg')
    ) {
      return true;
    }
  });
  return stevenFilms.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  if (!movies.length) {
    return 0;
  }
  const avgScore = movies.reduce((accumulator, moviescore) => {
    if (typeof moviescore.score === 'undefined' || moviescore.score === '') {
      return accumulator;
    } else {
      return accumulator + moviescore.score / movies.length;
    }
  }, 0);

  let averageFinalScore = Math.round(avgScore * 100) / 100;
  return averageFinalScore;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
// use filter , not equal undefined
function dramaMoviesScore(movies) {
  const dramaMovies = movies.filter((movie) => movie.genre.includes('Drama'));
  const averageScoreOfDramaMovies = scoresAverage(dramaMovies);
  return averageScoreOfDramaMovies;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  const result = movies.slice().sort((a, b) => {
    if (a.year < b.year || a.year === b.year) {
      return -1;
    } else {
      return 0;
    }
  });
  return result;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  const alphabetOrder = movies.map((movie) => {
    return movie.title;
  });
  alphabetOrder.sort((a, b) => {
    const oneMovie = a.toLowerCase();
    const twoMovies = b.toLowerCase();

    if (oneMovie > twoMovies) {
      return 1;
    } else if (oneMovie < twoMovies) {
      return -1;
    }
    return 0;
  });
  return alphabetOrder.slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {
  const convertDurationIntoMinutes = (duration) => {
    return duration.split(' ').reduce((sum, value) => {
      return (
        sum + (value.includes('h') ? parseInt(value) * 60 : parseInt(value))
      );
    }, 0);

    return movies.map((movie) => {
      const minutesCount = convertDurationIntoMinutes(movie.duration);
    });
  };
}

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
