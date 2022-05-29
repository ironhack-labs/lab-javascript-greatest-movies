const movies = require('./data');

// The `movies` array from the file `src/data.js`.
console.log('movies: ', movies);

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(arr) {
  const directors = arr.map(function (movie) {
    return movie.director;
  });
  return directors.filter(function (director, index) {
    return directors.indexOf(director) === index;
  });
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(arr) {
  const countOfMovies = arr.filter(function (movie) {
    if (
      movie.director === 'Steven Spielberg' &&
      movie.genre.includes('Drama')
    ) {
      return movie;
    }
  });
  return countOfMovies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(arr) {
  if (arr.length === 0) {
    return 0;
  }
  const allScores = arr.reduce(function (acc, movie) {
    if (movie.score) {
      return acc + movie.score;
    }
    return acc;
  }, 0);
  const averageScore = Number((allScores / arr.length).toFixed(2));
  return averageScore;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(arr) {
  const dramaMovies = arr.filter(function (movie) {
    if (movie.genre.includes('Drama')) {
      return movie;
    }
  });
  if (dramaMovies.length === 0) {
    return 0;
  }

  const dramaScore = dramaMovies.reduce(function (acc, movie) {
    if (movie.score) {
      return acc + movie.score;
    }
    return acc;
  }, 0);

  return Number((dramaScore / dramaMovies.length).toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arr) {
  const sortedByYear = arr.slice().sort(function (a, b) {
    if (a.year === b.year) {
      return a.title.localeCompare(b.title);
    }
    return a.year - b.year;
  });
  return sortedByYear;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arr) {
  let movieTitles = [];
  arr.map(function (movie) {
    movieTitles.push(movie.title);
  });

  const sortedAlphabetically = movieTitles.slice().sort(function (a, b) {
    return a.localeCompare(b);
  });
  return sortedAlphabetically.slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(arr) {
  if (!arr.length) {
    return null;
  }
  const modifyTimeFormat = arr.map(function (item) {
    const duration = item.duration;

    const hours = Number(duration.slice(0, duration.indexOf('h')));
    const minutes = Number(
      duration.slice(duration.indexOf(' '), duration.indexOf('m'))
    );

    item.duration = hours * 60 + minutes;
    return item;
  });

  return modifyTimeFormat;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(arr) {
  if (!arr.length) {
    return null;
  }
  const allYears = arr.reduce(function (acc, movie) {
    if (acc[movie.year]) {
      acc[movie.year].count++;
      acc[movie.year].score += movie.score;
    } else {
      acc[movie.year] = {
        count: 1,
        score: movie.score
      };
    }
    return acc;
  }, []);

  const avgYears = allYears.reduce(function (acc, movie, index) {
    acc[index] = {
      year: index,
      average: movie.score / movie.count
    };
    return acc;
  }, []);

  const bestYear = avgYears.sort(function (a, b) {
    return b.average - a.average;
  })[0];

  return `The best year was ${bestYear.year} with an average score of ${bestYear.average}`;
}
// console.log(bestYearAvg(movies));
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
