// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  if (!movies) return [];
  let directors = [];
  movies.forEach((movie) => {
    if (!directors.includes(movie.director)) {
      directors.push(movie.director);
    }
  });
  return directors;
}
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  let counter = 0;
  movies.forEach((movie) => {
    if (
      movie.director === 'Steven Spielberg' &&
      movie.genre.includes('Drama')
    ) {
      counter++;
    }
  });
  return counter;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  if (movies.length === 0) return 0;
  if (movies.length === 1 && movies[0].score) return movies[0].score;
  let scoreSum = movies.reduce((counter, movie) => {
    if (typeof movie.score !== 'number') {
      return counter;
    } else {
      return counter + movie.score;
    }
  }, 0);
  if (scoreSum === 0) return scoreSum;
  let avg = scoreSum / movies.length;
  return Number(avg.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  let dramaMovies = movies.filter((movie) => {
    return movie.genre.includes('Drama');
  });
  let dramaAvg = scoresAverage(dramaMovies);
  return dramaAvg;
}
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  if (movies.length === 0) return [];
  if (movies.length === 1) return [{ year: movies[0].year }];

  let isSameYear = false;

  let orderedMovies = movies.sort((a, b) => {
    if (a.year < b.year) return -1;
    if (a.year > b.year) return 1;

    isSameYear = true;

    if (a.title < b.title) return -1;
    if (a.title > b.title) return 1;

    return 0;
  });

  if (!isSameYear) {
    return orderedMovies.map((movie) => {
      return { year: movie.year };
    });
  }

  return orderedMovies.map((movie) => {
    return {
      year: movie.year,
      title: movie.title
    };
  });
}
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  if (movies.length === 0) return [];
  let first20Movies = [];
  let moviesToOrder = movies.map((item) => item.title);
  let orderedMoviesByTitle = moviesToOrder.sort((a, b) => {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  });
  if (orderedMoviesByTitle.length <= 20) return orderedMoviesByTitle;
  for (let i = 0; i < 20; i++) {
    first20Movies.push(orderedMoviesByTitle[i]);
  }
  return first20Movies;
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
