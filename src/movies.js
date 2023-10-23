// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  const directors = moviesArray.map(function (directorsObj) {
    return directorsObj.director;
  });
  return directors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  const stevenMovies = moviesArray.filter(function (movies) {
    return movies.director === "Steven Spielberg" && movies.genre.includes("Drama");
  });
  return stevenMovies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  }
  const calcAvg = moviesArray.reduce(function (acc, movies) {
    return acc + movies.score;
  }, 0);
  return Math.round(calcAvg / moviesArray.length * 100) / 100;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const dramaMovies = moviesArray.filter(function (movies) {
    return movies.genre.includes("Drama");
  });
  const dramaScore = dramaMovies.reduce(function (acc, movie) {
    return acc + movie.score;
  }, 0);
  if (dramaMovies.length === 0) {
    return 0;
  }
  return Math.round(dramaScore / dramaMovies.length * 100) / 100;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const sortedYear = moviesArray.slice();
  sortedYear.sort(function (movie1, movie2) {
    if (movie1.year < movie2.year) {
      return -1;
    }
    if (movie1.year > movie2.year) {
      return 1;
    }
    if (movie1.title < movie2.title) {
      return -1;
    }
    if (movie1.title > movie2.title) {
      return 1;
    }
  });
  return sortedYear;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const sortedTitle = moviesArray.slice();
  sortedTitle.sort(function (movie1, movie2) {
    if (movie1.title < movie2.title) {
      return -1;
    }
    if (movie1.title > movie2.title) {
      return 1;
    }
    if (movie1.title === movie2.title) {
      return 0;
    }
  });
  return sortedTitle;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) { }

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) { }
