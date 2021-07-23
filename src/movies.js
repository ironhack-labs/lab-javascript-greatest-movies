// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.

const movies = require('./data');

// console.log(movies);

// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(arr) {
  const moviesDirectors = arr.map((element, index, array) => {
    return element.director;
  });
  return moviesDirectors;
}

/*function getAllDirectors(arr) {
  const moviesDirectors = arr.map((element, index, array) => {
    if (moviesDirectors.indexOf(arr[i]) === -1) {
      return true;
    }
  });

  return moviesDirectors;
}*/





//console.log(getAllDirectors());

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(arr) {
  const dramaSpielbergMovies = arr.filter((element, index, arr) => {
    if (
      element.director === 'Steven Spielberg' &&
      element.genre.includes('Drama')
    ) {
      return true;
    }
  });

  return dramaSpielbergMovies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
/*function scoresAverage(arr) {
  if (arr.length ===0) return 0;
    const totalScores = arr.reduce(function (acc, el) {
    return acc + el.score;
  }, 0); 
  return Math.round((totalScores / arr.length + Number.EPSILON) * 100) / 100;
}
What can I do if the key score exists but without a value ?
if (el.score = undefined or NaN) {
return acc;
};*/

function scoresAverage(arr) {
  if (arr.length === 0) return 0;
  const totalScores = arr.reduce(function (acc, el) {
    if (el.score) {
      return acc + el.score;
    } else {
      return acc;
    }
  }, 0);
  return Math.round((totalScores / arr.length + Number.EPSILON) * 100) / 100;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
/*function dramaMoviesScore(array) {
  const dramaMovies = array.filter((element) => {
    return element.genre.includes('Drama');
  });
}*/

/*function dramaMoviesScore(arr) {
  const dramaMoviesTotalScores = arr.reduce(function (acc, el) {
    if (el.genre.includes('Drama')) {
    return acc + el.score;
  } else {
    return acc;
  }
  }, 0);
  return Math.round((dramaMoviesTotalScores / arr.length + Number.EPSILON) * 100) / 100;
}*/

function dramaMoviesScore(arr) {
  const onlyDramaMovies = arr.filter((el) => {
    return el.genre.includes('Drama');
  });
  const dramaMoviesTotalScores = onlyDramaMovies.reduce(function (acc, el) {
    if (el.score) {
      return acc + el.score;
    } else {
      return acc;
    }
  }, 0);
  return (
    Math.round((dramaMoviesTotalScores / arr.length + Number.EPSILON) * 100) /
    100
  );
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
/*function orderByYear(arr) {
  const sortedYearMoviesArr = arr.slice().sort((movie1, movie2) => {
    return movie1.year - movie2.year;
  });
  return sortedYearMoviesArr;
}
}*/

function orderByYear(arr) {
  const sortedYearMoviesArr = arr.slice().sort((movie1, movie2) => {
    if (movie1.year !== movie2.year) {
      return movie1.year - movie2.year;
    } else {
      return movie1.title.localeCompare(movie2.title);
    }
  });
  return sortedYearMoviesArr;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arr) {
  const sortedAlphaArray = arr
    .slice()
    .sort((movie1, movie2) => {
      return movie1.title.localeCompare(movie2.title);
    })
    .slice(0, 20);
  const topMovies20 = sortedAlphaArray.map((element) => {
    return element.title;
  });
  return topMovies20;
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
