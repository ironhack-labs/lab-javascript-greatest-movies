// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.

const movies = require('./data');

// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  let allDirectors = movies.map(function (movie) {
    return movie.director;
  });
  return allDirectors;
}

//Iteration 1 Bones:
function uniqueDirectors(arr) {
  let directorsList = [];
  arr.forEach(function (movie) {
    if (!directorsList.includes(movie.director))
      directorsList.push(movie.director);
  });
  return directorsList;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(arr) {
  const dramaSpielberg = arr.filter(
    (steven) =>
      steven.director === 'Steven Spielberg' && steven.genre.includes('Drama')
  );
  return dramaSpielberg.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(arr) {
  if (arr.length === 0) {
    return 0;
  }
  let averageScore = arr.reduce(function (accum, movie) {
    if (
      movie.score === null ||
      movie.score === '' ||
      movie.score === undefined
    ) {
      movie.score = 0;
    }
    return accum + movie.score;
  }, 0);

  return parseFloat((averageScore / arr.length).toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(arr) {
  let dramaMovies = arr.filter(function (movie) {
    return movie.genre.indexOf('Drama') !== -1;
  });
  if (dramaMovies.length === 0) {
    return 0;
  }
  let dramaScores = dramaMovies.reduce(function (sum, movie) {
    return sum + movie.score;
  }, 0);

  return parseFloat((dramaScores / dramaMovies.length).toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arr) {
  let sortedMovies = [...arr].sort(function (a, b) {
    if (a.year < b.year) return -1;
    if (a.year > b.year) return 1;
    if (a.year === b.year) {
      if (a.title < b.title) {
        return -1;
      } else {
        return 0;
      }
    }
  });
  let newArray = sortedMovies;
  return newArray;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arr) {
  let moviesTitle = arr.map(function (movie) {
    return movie.title;
  });
  let alphabeticalTitles = moviesTitle.sort();

  if (alphabeticalTitles.length < 20) {
    return alphabeticalTitles;
  } else {
    return alphabeticalTitles.slice(0, 20);
  }
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(arr) {
  let copyArray = JSON.parse(JSON.stringify(arr));
  copyArray.forEach((movie, index) => {
    let results = String(movie.duration).match(/\d+/g);

    if (results.length === 1) {
      copyArray[index].duration = Number(results[0]) * 60;
    } else {
      copyArray[index].duration = Number(results[0]) * 60 + Number(results[1]);
    }
  });
  return copyArray;
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
