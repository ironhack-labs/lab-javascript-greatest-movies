// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  const mappedArr = moviesArray.map((movie) => {
    return movie.director;
  });
  return mappedArr;
}
// test does that: getAllDirectors(movies);

function cleanDirectors(moviesArray) {
  const cleanArr = moviesArray.reduce((accumulator, movie) => {
    if (!accumulator.includes(movie.director)) {
      accumulator.push(movie.director);
    }
    return accumulator;
  }, []);
  return cleanArr;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  }
  const filteredMap = moviesArray.filter((movie) => {
    return (
      movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
    );
  });
  return filteredMap.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  }
  const sumScores = moviesArray.reduce((accumulator, movie) => {
    if (!movie.score) {
      return accumulator;
    }
    return accumulator + movie.score;
  }, 0);
  return Math.round((sumScores / moviesArray.length) * 100) / 100;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const dramas = moviesArray.filter((movie) => {
    return movie.genre.includes("Drama");
  });
  if (dramas.length === 0) {
    return 0;
  }
  const sumScores = dramas.reduce((accumulator, movie) => {
    if (movie.score) {
      return accumulator + movie.score;
    }
    return accumulator;
  }, 0);
  return Math.round((sumScores / dramas.length) * 100) / 100;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
