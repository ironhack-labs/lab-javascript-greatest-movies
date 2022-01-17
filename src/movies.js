const movies = require('./data.js');
// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  return movies.map((movie) => movie.director);
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  let count = 0;
  movies.filter((movie) =>
    movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')
      ? count++
      : count
  );
  return count;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  if (movies.length === 0) {
    return 0;
  } else {
    let totalScore = movies.reduce((sum, movie) => {
      if (movie.score === undefined || !movie.score) {
        return sum;
      } else {
        return (sum += movie.score);
      }
    }, 0);
    return +(totalScore / movies.length).toFixed(2);
  }
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  const dramas = movies.filter((movie) => movie.genre.includes('Drama'));
  return scoresAverage(dramas);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(array) {
  const sortedAsc = [];
  array.sort((a, b) => {
    if (a.year === b.year) {
      return a.title.localeCompare(b.title);
    }
    return a.year - b.year;
  });
  for (let movie of array) {
    sortedAsc.push(movie);
  }
  return sortedAsc;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  const titles = [...movies.map((movie) => movie.title.toLowerCase())];
  const titlesSorted = titles.sort((a, b) => {
    if (a > b) {
      return 1;
    } else if (b > a) {
      return -1;
    } else {
      return 0;
    }
  });
  if (titlesSorted.length >= 20) {
    do {
      titlesSorted.pop();
    } while (titlesSorted.length > 20);
  }
  return titlesSorted;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {
  const numbersDuration = JSON.parse(JSON.stringify(movies));
  numbersDuration.map((movie) => {
    if (movie.duration.length === 8) {
      movie.duration =
        60 * +movie.duration.charAt(0) + Number(movie.duration.substring(3, 5));
    } else {
      movie.duration =
        60 * +movie.duration.charAt(0) + +movie.duration.substring(3, 4);
    }
    return movie;
  });
  return numbersDuration;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(movies) {
  const averageYears = [];
  // Find average score for films with the same year
  // https://stackoverflow.com/questions/30735465/how-can-i-check-if-the-array-of-objects-have-duplicate-property-values

  // Puch result and year to a nested array in array

  // Loop through array and find highest score

  // return the score and the year
}

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
