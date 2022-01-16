// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.

const movies = require('./data');

// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  const allDirectors = movies.map((film) => film.director);
  return allDirectors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  const dramaSpielberg = movies.filter(function (film) {
    return film.director === 'Steven Spielberg' && film.genre.includes('Drama');
  });
  if (dramaSpielberg.length === 0) {
    return 0;
  } else {
    return dramaSpielberg.length;
  }
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  if (movies.length === 0) {
    return 0;
  } else {
    // new array with scores (--> filter)
    const scoresArray = movies.filter(function (film) {
      return film.score;
    });

    const totalScores = scoresArray.reduce(function (acc, film) {
      if (typeof film.score === 'number' && 'score' in film) {
        return acc + film.score;
      }
    }, 0);

    const averageScore = Math.round((totalScores * 100) / movies.length) / 100;

    return averageScore;
  }
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  const dramaMovies = movies.filter(function (film) {
    return film.genre.includes('Drama');
  });
  return scoresAverage(dramaMovies);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  if (movies.length === 0) {
    movies = [];
  }
  // new array sorted by year
  const moviesSortedByYear = movies.sort((a, b) => a.year - b.year);

  // check if two movies have the same year, then sort by title
  const moviesSortedByTitle = moviesSortedByYear.sort((a, b) => {
    if (a.year > b.year) {
      return 1;
    } else if (a.year < b.year) {
      return -1;
    } else {
      return a.title.localeCompare(b.title);
    }
  });

  return moviesSortedByTitle;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  // array with all titles (--> map)
  const titleArray = movies.map(function (film) {
    return film.title;
  });

  // sort titleArray alphabetically
  const titlesByAlphabet = titleArray.sort(function (a, b) {
    return a.toLowerCase().localeCompare(b.toLowerCase());
  });

  // reduce array to first 20 with slice
  let first20Titles = [];
  if (titlesByAlphabet.length > 20) {
    first20Titles = titlesByAlphabet.slice(0, 20);
  } else {
    return titlesByAlphabet;
  }

  return first20Titles;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {
  if (movies.duration.includes('h') && movies.duration.includes('min')) {
    let hoursSplit = movies.duration.split(/[h]/);
    let hours = hoursSplit[0];

    let minutesSplit = movies.duration.split(/['h ', 'min']/);
    let minutes = minutesSplit[2];

    let durationInMinutes = hours * 60 + minutes;
    return durationInMinutes;
  }
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
