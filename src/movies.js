// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(moviearray) {
  let newarray = moviearray.map(function (direct) {
    return direct.director;
  });
  return newarray;
}

// https://stackoverflow.com/questions/1960473/get-all-unique-values-in-a-javascript-array-remove-duplicates
function getUniqueDirectors(moviearray) {
  let directors = getAllDirectors(moviearray);
  let uniqueDirectors = directors.filter(function (value, index, self) {
    return self.indexOf(value) === index;
  });
  return uniqueDirectors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(stvarray) {
  let filtered = stvarray.filter(function (movie) {
    return movie.director === "Steven Spielberg" && movie.genre.includes('Drama');
  });
  return filtered.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(avgarray) {
  if (avgarray.length === 0) {
    return 0;
  }

  let total = avgarray.reduce(function (accumulator, currentValue) {
    if (currentValue.score != undefined) {
      return accumulator + currentValue.score;
    }
    return accumulator;
  }, 0);
  return parseFloat((total / avgarray.length).toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(avgarray) {
  if (avgarray.length === 0) {
    return 0;
  }

  let total = avgarray.reduce(function (accumulator, currentValue) {
    if (currentValue.score != undefined && currentValue.genre.includes('Drama')) {
      return accumulator + currentValue.score;
    }
    return accumulator;
  }, 0);
  return parseFloat((total / avgarray.length).toFixed(2));

}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(toSort) {
  let copy = JSON.parse(JSON.stringify(toSort));
  if (copy.length == 0 || copy.length == 1) {
    return copy;
  }
  copy.sort(function (a, b) {
    if (a.year === b.year) {
      if (a.title.toUpperCase() > b.title.toUpperCase()) {
        return 1;
      }
      if (a.title.toUpperCase() < b.title.toUpperCase()) {
        return -1;
      }
      return 0;
    } else {
      return a.year - b.year;
    }
  });
  return copy;
}



// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(strToSort) {
  let copystr = JSON.parse(JSON.stringify(strToSort));
  if (copystr.length == 0) {
    return [];
  }
  if (copystr.length == 1) {
    return copystr.map(function (movie) {
      return movie.title;
    });
  }

  copystr.sort((a, b) => {
    if (a.title.toUpperCase() > b.title.toUpperCase()) {
      return 1;
    }
    if (a.title.toUpperCase() < b.title.toUpperCase()) {
      return -1;
    }
    return 0;
  });

  return copystr.slice(0, 20).map(function (movie) {
    return movie.title;
  });
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
