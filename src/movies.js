// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.

const movies = require("./data");

// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  const movieDirectors = Array.from(new Set(movies.map(function (movie) {
    return movie.director;
  })));
  return movieDirectors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  const selectedDirector = "Steven Spielberg";
  const selectedGenre = "Drama";
  const spDramaNumberOfMovies = movies.filter(function (movie) {
    return movie.director.toLowerCase() === selectedDirector.toLowerCase() && movie.genre.includes(selectedGenre);
  });

  return spDramaNumberOfMovies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  if (!movies.length) return 0;

  const moviesScoreAverage = movies.reduce(function (accumulator, movie) {
    if (!movie) return accumulator + 0;

    return accumulator += movie.score || 0;
  }, 0);
  return +(moviesScoreAverage / movies.length).toFixed(2);
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  const selectedGenre = "Drama";
  const dramaMovies = movies.filter(function (movie) {
    return movie.genre.includes(selectedGenre);
  });
  return scoresAverage(dramaMovies);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  const result = movies.sort(function (a, b) {
    if (a.year === b.year) {
      if (a.title > b.title) {
        return 1;
      } else {
        return -1
      }
    } else if (a.year > b.year) {
      return 1;
    } else {
      return -1;
    }

  });
  return [...result];
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  const result = [...movies].sort(function (a, b) {
    if (a.title > b.title) {
      return 1;
    } else {
      return -1;
    }
  });
  const slicedArray = result.slice(0, 20);
  const movieTitleSorted = slicedArray.map(function (item) {
    return item.title;
  });
  return movieTitleSorted;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {
  return [...movies].map(function (movie) {
    const minutesFromHour = parseInt(movie.duration.split(' ')[0].split('')[0]) * 60;
    const minutes = parseInt(movie.duration.split(' ')[1]?.split('min')[0]) || 0;
    const duration = minutesFromHour + minutes

    return {
      ...movie,
      duration: duration
    }
  });
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(movies) {
  if (!movies.length) return null;

  const masterObject = {};

  movies.forEach(function (eachMovie) {
    if (!masterObject[eachMovie.year]) {
      masterObject[eachMovie.year] = [eachMovie];
    } else {
      masterObject[eachMovie.year].push(eachMovie);
    }
  });

  let highestScore = 0;
  let theActualYear;
  for (let theYear in masterObject) {
    if (scoresAverage(masterObject[theYear]) > highestScore) {
      highestScore = scoresAverage(masterObject[theYear]);
      theActualYear = theYear;
    }
  }
  return `The best year was ${theActualYear} with an average score of ${highestScore}`;
}

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
