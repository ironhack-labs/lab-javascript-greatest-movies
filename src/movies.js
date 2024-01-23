// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.

// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  return moviesArray.map((movie) => movie.director);
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  const moviesCount = moviesArray.reduce((accumulator, movie) => {
    return movie.genre.includes("Drama") &&
      movie.director === "Steven Spielberg"
      ? accumulator + 1
      : accumulator;
  }, 0);
  return moviesCount;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  }
  const scoresSum = moviesArray.reduce(function (acc, movie) {
    return movie.score === " " || movie.score === undefined
      ? acc
      : acc + movie.score;
  }, 0);
  return Number((scoresSum / moviesArray.length).toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const scoresSum = moviesArray.reduce(function (acc, movie) {
    return movie.genre.includes("Drama") ? acc + movie.score : acc;
  }, 0);
  const dramaMovies = moviesArray.filter((movie) =>
    movie.genre.includes("Drama")
  );
  if (dramaMovies.length === 0) {
    return 0;
  }
  return Number((scoresSum / dramaMovies.length).toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const sortedArray = moviesArray
    .slice()
    .sort((a, b) =>
      a.year !== b.year ? a.year - b.year : a.title.localeCompare(b.title)
    );
  return sortedArray;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const movieTitles = moviesArray.map((movie) => movie.title);
  const sortedTitles = movieTitles.sort((a, b) => a.localeCompare(b));

  const firstMovies = sortedTitles.slice(0, 20);
  return firstMovies;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  return moviesArray.map((movie) => {
    const parts = movie.duration.split(" ");
    let hours = 0,
      minutes = 0;

    parts.forEach((part) => {
      if (part.includes("h")) {
        hours = parseInt(part);
      } else if (part.includes("min")) {
        minutes = parseInt(part);
      }
    });
    movie.duration = hours * 60 + minutes;
    return movie;
  });
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
