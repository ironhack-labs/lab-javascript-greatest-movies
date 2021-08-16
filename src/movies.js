// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(array) {
  return array.map((movie) => {
    return movie.director;
  });
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(array) {
  const spielbergMovies = array.filter((movie) => {
    return (
      movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')
    );
  });
  return spielbergMovies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function roundDecimals(number) {
  return parseFloat(number.toFixed(2));
}

function scoresAverage(arr) {
  //Filter the movies that have a score
  const scoredFilms = arr.filter((movie) => movie.score);

  //Uses a reduce to get the average
  if (scoredFilms.length > 0) {
    const average =
      scoredFilms.reduce((acc, curr) => {
        if (curr.score !== undefined) {
          return acc + curr.score;
        } else {
          return;
        }
      }, 0) / arr.length;
    return roundDecimals(average);
  } else {
    return 0;
  }
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(arr) {
  const scoredDramaFilms = arr.filter(
    (movie) => movie.score != undefined && movie.genre.includes('Drama')
  );

  if (scoredDramaFilms.length > 0) {
    const average =
      scoredDramaFilms.reduce((acc, curr) => {
        if (curr.score !== undefined) {
          return acc + curr.score;
        } else {
          return;
        }
      }, 0) / scoredDramaFilms.length;
    return roundDecimals(average);
  } else {
    return 0;
  }
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arr) {
  const deepCopy = JSON.parse(JSON.stringify(arr));
  const sortedByYear = deepCopy.sort((a, b) => {
    return a.year - b.year;
  });

  return sortedByYear.sort((a, b) => {
    if (a.year === b.year) {
      if (a.title.toLowerCase() > b.title.toLowerCase()) {
        return 1;
      }
      if (a.title.toLowerCase() < b.title.toLowerCase()) {
        return -1;
      }
      // a must be equal to b
      return 0;
    }
  });
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically() {}

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
