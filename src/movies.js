// The `movies` array from the file `src/data.js`.
// console.log('movies: ', movies);

// ###############################################################################
// ############################# DONE!!! #########################################
// ###############################################################################

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(arr) {
  const allDirectors = arr.map(function (obj) {
    return obj.director;
  });
  return allDirectors;
}

// ###############################################################################
// ############################# DONE!!! #########################################
// ###############################################################################

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(arr) {
  const stevenSpielberg = arr.filter(function (obj) {
    return obj.director === 'Steven Spielberg' && obj.genre.includes('Drama');
  });
  return stevenSpielberg.length;
}

// ###############################################################################
// ############################# DONE!!! #########################################
// ###############################################################################
// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(arr) {
  if (arr.length === 0) {
    return 0;
  } else {
    const newArr = arr.map(function (obj) {
      if (typeof obj.score === 'undefined')
        return {
          title: obj.title,
          year: obj.year,
          director: obj.director,
          genre: obj.genre,
          score: ''
        };
      return obj;
    });
    const totalSum = newArr.reduce(function (acc, value) {
      return acc + value.score;
    }, 0);
    return Number((totalSum / arr.length).toFixed(2)); // esto esta bien
  }
}

// ###############################################################################
// ############################# DONE!!! #########################################
// ###############################################################################

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesScore(arr) {
  const drama = arr.filter(function (obj) {
    return obj.genre.includes('Drama');
  });
  if (drama.length === 0) {
    return 0;
  } else {
    return scoresAverage(drama);
  }
}

// ###############################################################################
// ############################# DONE!!! #########################################
// ###############################################################################
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arr) {
  const newArr = arr.map(function (obj) {
    return obj;
  });
  const orderingByYear = newArr.sort(function (a, b) {
    return a.year - b.year || a.title.localeCompare(b.title);
  });
  return orderingByYear;
}

// ###############################################################################
// ############################# DONE!!! #########################################
// ###############################################################################

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arr) {
  const newArr = orderByYear(arr);
  const alpha = newArr.sort(function (a, b) {
    return a.title.localeCompare(b.title);
  });
  const title = alpha.map(function (obj) {
    return obj.title;
  });
  return title.slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(arr) {}
//   const toMinutes = arr.map(function (obj) {
//     const minutes = (obj.duration
//     return
//   })
// }
//   function hoursTominutes() {
//     if
//   }
//   const toMinutes = arr.map(function (all) {
//     return {title: all.title, year: all.year, director: all.director, duration:
//   });

// {
//   "title":"The Shawshank Redemption",
//   "year":1994,
//   "director":"Frank Darabont",
//   "duration":"2h 22min",
//   "genre":["Crime","Drama"],
//   "score":9.3
// }

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
