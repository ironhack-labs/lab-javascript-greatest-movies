// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(arr) {
  const dirArray = arr.map((director) => {
    return director.director;
  });
  return dirArray;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(arr) {
  const spielberg = arr.filter((movie) => {
    if (
      movie.director === 'Steven Spielberg' &&
      movie.genre.includes('Drama')
    ) {
      return true;
    }
  });
  return spielberg.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(arr) {
  if (arr.length === 0) {
    return 0;
  }
  const average = arr.reduce((acc, val) => {
    if (!val.score) {
      return acc;
    }
    return acc + val.score;
  }, 0);
  return JSON.parse((average / arr.length).toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(arr) {
  const drama = arr.filter((movie) => {
    return movie.genre.includes('Drama');
  });
  if (drama.length === 0) {
    return 0;
  }
  const average = drama.reduce((acc, val) => {
    return acc + val.score;
  }, 0);
  return JSON.parse((average / drama.length).toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arr) {
  let sortedArr = [];
  sortedArr = [...arr];
  const sorted = sortedArr.sort((a, b) => {
    if (a.year === b.year) {
      return -1;
    }
    return a.year - b.year;
  });
  return sortedArr;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arr) {
  let sortedArr = [];
  sortedArr = [...arr];
  const sorted = sortedArr
    .sort((a, b) => {
      if (a.title < b.title) {
        return -1;
      } else if (a.title > b.title) {
        return 1;
      }
      return 0;
    })
    .map((movie) => {
      return movie.title;
    });

  return sorted.slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(arr) {}

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
