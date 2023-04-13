// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  let newArray = [];
  newArray = moviesArray.map((movies) => {
    return movies.director;
  });
  return newArray;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  const numberOfMovies = moviesArray.filter(
    (
      movie //pq nao pode por a chaveta?
    ) => movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
  );
  return numberOfMovies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  }
  const moviesAdded = moviesArray.reduce((accumulator, movie) => {
    if (movie.score === undefined) {
      return accumulator;
    }
    return accumulator + movie.score;
  }, 0);
  return Math.round((moviesAdded / moviesArray.length) * 100) / 100;
}

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesScore(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  }
  const dramaMovie = moviesArray.filter((movie) => {
    return movie.genre.includes("Drama");
  });
  return scoresAverage(dramaMovie);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  let sortedArray = [];
  let copyMoviesArray = moviesArray.slice();

  sortedArray = copyMoviesArray.sort(function (a, b) {
    if (a.year === b.year) {
      // dont forget 3 equal signs!!
      return a.title.localeCompare(b.title);
    }
    return a.year - b.year;
  });
  return sortedArray;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  let movieTitles = moviesArray.map((element) => element.title);
  movieTitles = movieTitles.sort();
  return movieTitles.slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
