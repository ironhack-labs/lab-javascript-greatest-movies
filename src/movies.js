// The `movies` array from the file `src/data.js`.
// console.log('movies: ', movies);

//const movies = require('./data');

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(array) {
  const mappedDirectors = array.map(function (movies) {
    return movies.director;
  });
  const cleanMappedDirectors = mappedDirectors.filter(function (
    element,
    index
  ) {
    return mappedDirectors.indexOf(element) === index;
  });
  return cleanMappedDirectors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  if (!movies.length) {
    return 0;
  }
  const dramaMoviesBySpielberg = movies.filter(function (movies) {
    if (
      movies.genre.includes('Drama') &&
      movies.director === 'Steven Spielberg'
    ) {
      return true;
    }
  });

  return dramaMoviesBySpielberg.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  if (!movies.length) {
    return 0;
  }
  const sumScore = movies.reduce(function (acc, value) {
    if (value.score === '' || !value.score) {
      value.score = 0;
    }
    return acc + value.score;
  }, 0);
  const average = sumScore / movies.length;
  return Number(average.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(array) {
  const dramaMoviesArray = array.filter(function (array) {
    if (array.genre.includes('Drama')) {
      return true;
    }
  }, 0);
  return scoresAverage(dramaMoviesArray);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(array) {
  const newArray = array.slice();
  const sortedByYearAndTitle = newArray.sort(function (a, b) {
    if (a.year === b.year) {
      return a.title.toLowerCase().localeCompare(b.title.toLowerCase());
    } else {
      return a.year - b.year;
    }
  });
  return sortedByYearAndTitle;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(array) {
  const sortedByTitle = array.slice().sort(function (a, b) {
    return a.title.toLowerCase().localeCompare(b.title.toLowerCase());
  });
  let finalArray = [];
  const first20Elements = sortedByTitle.filter(function (element, index) {
    if (sortedByTitle.indexOf(element) < 20) {
      return finalArray.push(element.title);
    }
  });
  return finalArray;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(array) {
  const formattedArray = array.map(function (element) {
    const hours = Number(element.duration.slice(0, 1)) * 60;
    const minutes = Number(
      element.duration.substring(3, element.duration.length - 3)
    );
    if (!minutes) {
      return 0;
    }
    return (element.duration = hours + minutes);
  });
  return formattedArray;
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
