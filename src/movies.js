// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.

const movies = require('./data');

// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  const directorsArr = movies.map((eachMovie) => {
    return eachMovie.director;
  });
  return directorsArr;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  const spielbergDramaArr = movies.filter((eachMovie) => {
    const spielbergMovie = eachMovie.director === 'Steven Spielberg';

    const dramaMovie = eachMovie.genre.includes('Drama');

    return spielbergMovie && dramaMovie;
  });

  return spielbergDramaArr.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  if (movies.length === 0) {
    return 0;
  }

  const sumScore = movies.reduce((acc, eachMovie) => {
    if (eachMovie.score === undefined) {
      return acc;
    }

    return acc + eachMovie.score;
  }, 0);
  return (avgScore = Number((sumScore / movies.length).toFixed(2)));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  const dramaMovies = movies.filter((eachMovie) => {
    return eachMovie.genre.includes('Drama');
  });

  if (dramaMovies.length === 0) {
    return 0;
  }

  const sumDramaScore = dramaMovies.reduce((acc, eachDramaMovie) => {
    if (eachDramaMovie.score === undefined) {
      return acc;
    }
    return acc + eachDramaMovie.score;
  }, 0);
  return (avgScore = Number((sumDramaScore / dramaMovies.length).toFixed(2)));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  const moviesCopy = JSON.parse(JSON.stringify(movies));
  moviesCopy.sort(function (a, b) {
    if (a.title > b.title) {
      return 1;
    }
    if (a.title < b.title) {
      return -1;
    }
    if (a.title === b.title) {
      return 0;
    }
  });

  moviesCopy.sort(function (a, b) {
    if (a.year > b.year) {
      return 1;
    }
    if (a.year < b.year) {
      return -1;
    }
    if (a.year === b.year) {
      return 0;
    }
  });

  return moviesCopy;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  

  const titleArr = movies.map((eachMovie) => {

    return eachMovie.title;
  });

  titleArr.sort()

  const twentyTitles = titleArr.slice(0, 20)

  return twentyTitles
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
