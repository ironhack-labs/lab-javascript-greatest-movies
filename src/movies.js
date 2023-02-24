// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  let directorsArray = moviesArray.map((elem) => elem.director);
  return directorsArray;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  let GenreMovie = moviesArray.filter(function (movie) {
    if (
      movie.genre.includes("Drama") &&
      movie.director === "Steven Spielberg"
    ) {
      return true;
    }
  });
  return GenreMovie.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  // const moviesWithoutScore = movies.filter
  let averageRate =
    moviesArray.reduce((sum, movie) => {
      if (movie.score === undefined) {
        return sum;
      } else {
        return sum + movie.score;
      }
    }, 0) / moviesArray.length;
  averageRate = Math.round(averageRate * 100) / 100;
  return moviesArray.length === 0 ? 0 : averageRate;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const allDrama = moviesArray.filter((movie) => movie.genre.includes("Drama"));
  return scoresAverage(allDrama);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  let cloneArray = JSON.parse(JSON.stringify(moviesArray));
  const ordered = cloneArray.sort((a, b) => {
    if (a.year === b.year) {
      if (a.title > b.title) {
        return 1;
      } else {
        return -1;
      }
    } else {
      return a.year - b.year;
    }
  });
  return ordered;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  let cloneArrayfortitle = JSON.parse(JSON.stringify(moviesArray));
  const orderedTitle = cloneArrayfortitle.sort((a, b) => {
    if (a.title > b.title) {
      return 1;
    } else {
      return -1;
    }
  });

  let onlyTitle = orderedTitle.map((movie) => movie.title);
  onlyTitle.splice(20, onlyTitle.length - 20);
  return onlyTitle;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
