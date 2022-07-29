// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  const allDirectors = moviesArray.map((movie) => {
    return movie.director;
  });
  return allDirectors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(moviesArray) {
  let sum = 0;
  const moviesSP = moviesArray.filter((movie) => {
    if (
      movie.director === "Steven Spielberg" &&
      movie.genre.includes("Drama")
    ) {
      sum += 1;
    }
  });
  return sum;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  const sum = moviesArray.reduce((acc, movie) => acc + movie.score, 0);

  if (moviesArray.length === 0) {
    return 0;
  }
  const media = parseFloat(sum) / moviesArray.length;

  return parseFloat(media.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const search = moviesArray.filter((movie) => movie.genre.includes("Drama"));
  const media = scoresAverage(search);
  return media;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  return moviesArray
    .map((movie) => movie)
    .sort((a, b) => {
      if (a.year === b.year) {
        return a.title.localeCompare(b.title);
      }
      return a.year - b.year;
    });
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const movies = moviesArray
    .map((movie) => movie.title)
    .sort((a, b) => {
      return a.localeCompare(b);
    });

  return (top20 = movies.splice(0, 20));
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
  if (moviesArray.length < 1) return null;

  const bestMovie = moviesArray
    .map((movie) => movie.year)
    .sort((a, b) => {
      return a.localeCompare(b);
    });
  return bestMovie;
}
