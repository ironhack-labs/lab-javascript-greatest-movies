// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  return movies.map(function (movie) {
    return movie.director;
  });
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
//Find all movies by Spielberg
//In that list, find all of those which are drama
function howManyMovies(movies) {
  const spielbergMovies = movies.filter(function (movie) {
    if (movie.director === 'Steven Spielberg') {
      return movie;
      console.log(typeof spielbergMovies.genre);
    }
  });
  const spielbergDramas = spielbergMovies.filter(function (movie) {
    if (movie.genre.includes('Drama')) {
      return movie;
    }
  });
  return spielbergDramas.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  if (movies.length === 0) {
    return 0;
  }
  const allScores = movies.map(function (movie) {
    if (movie.hasOwnProperty('score') === false) {
      movie.score = 0;
    }
    if (movie.score === '') {
      movie.score = 0;
    }
    return movie.score;
  });
  const sumScores = allScores.reduce(function (acc, val) {
    return acc + val;
  });
  const average = sumScores / movies.length;
  return Number(average.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  if (movies.length === 0) {
    return 0;
  }
  const dramaMovies = movies.filter(function (movie) {
    if (movie.genre.includes('Drama')) {
      return movie;
    }
  });
  if (dramaMovies.length === 0) {
    return 0;
  }
  const allDramaScores = dramaMovies.map(function (movie) {
    if (dramaMovies === 0) {
      return 0;
    }
    return movie.score;
  });
  const dramaSum = allDramaScores.reduce(function (acc, val) {
    return acc + val;
  });
  const dramaAvg = dramaSum / dramaMovies.length;
  return Number(dramaAvg.toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  const moviesCopy = movies.map((x) => x);
  moviesCopy.sort(function (a, b) {
    if (a.year === b.year){
      if (a.title < b.title){
        return -1;
      }
    }
    return a.year - b.year;
  });
  return moviesCopy;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  const moviesCopy = movies.map((x) => x);
  const titles = moviesCopy.map(function (movie) {
    return movie.title;
  });
  //console.log(titles);
  titles.sort(function (a, b) {
    if (a === b) {
      return 0;
    }
    if (a < b) {
      return -1;
    }
  });
  //console.log(titles);
  const first20 = titles.slice(0, 20);
  return first20;
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
