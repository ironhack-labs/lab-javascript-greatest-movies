// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  return movies.map((movie) => {
    return movie.director;
  });
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  let spielbergMovies = movies.filter(
    (movie) =>
      movie.genre.includes('Drama') && movie.director === 'Steven Spielberg'
  );
  return spielbergMovies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  if (!movies.length) {
    return 0;
  }
  const sumScores = movies.reduce(function (acc, scores) {
    if (scores.score) {
      return acc + scores.score;
    } else {
      return acc;
    }
  }, 0);
  const average = sumScores / movies.length;
  const roundAvg = Number(average.toFixed(2));
  return roundAvg;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  let dramaMovies = movies.filter((movie) => movie.genre.includes('Drama'));

  return scoresAverage(dramaMovies);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  debugger;
  let orderedMovies = movies
    .map((movies) => movies)
    .sort((movie1, movie2) => {
      if (movie1.year === movie2.year) {
        if (movie1.title < movie2.year) return 1;
        else return -1;
      }
      if (movie1.year > movie2.year) return 1;
      if (movie1.year < movie2.year) return -1;
    });

  return orderedMovies;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  let alphaOrderedMovies = movies
    .map((movies) => movies)
    .sort((movie1, movie2) => {
      if (movie1.title > movie2.title) return 1;
      if (movie1.title < movie2.title) return -1;
      if (movie1.title === movie2.title) return 0;
    });

  let topTwenty = alphaOrderedMovies.splice(0, 20);

  console.log(topTwenty);

  let topTwentyNames = [];

  for (let name of topTwenty) {
    topTwentyNames.push(name.title);
  }

  console.log(topTwentyNames);

  return topTwentyNames;
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
