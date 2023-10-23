// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(moviesArray) {
  const directors = movies.map((movie) => movie.director);

  return directors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  if (movies.length === 0) {
    return 0;
  }

  const spielbergDramaMovies = movies.filter((movie) => {
    return (
      movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
    );
  });

  return spielbergDramaMovies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  if (movies.length === 0) {
    return 0; // Return 0 if the array is empty.
  }

  const validMovies = movies.filter((movie) => typeof movie.score === "number");

  if (validMovies.length === 0) {
    return 0; // Return 0 if there are no valid scores.
  }

  const totalScore = validMovies.reduce(
    (accumulator, movie) => accumulator + movie.score,
    0
  );
  const averageScore = totalScore / validMovies.length;
  const roundedAverage = Math.round(averageScore * 100) / 100; // Round to 2 decimal places

  return roundedAverage;
}
// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  const dramaMovies = movies.filter((movie) => movie.genre.includes("Drama"));

  if (dramaMovies.length === 0) {
    return 0; // Return 0 if there are no drama movies.
  }

  const totalScore = dramaMovies.reduce(
    (accumulator, movie) => accumulator + (movie.score || 0),
    0
  );
  const averageScore = totalScore / dramaMovies.length;
  const roundedAverage = Math.round(averageScore * 100) / 100; // Round to 2 decimal places

  return roundedAverage;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  // Create a shallow copy of the original array to avoid mutation
  const sortedMovies = [...movies];

  // Sort the copy based on release year and then by title
  sortedMovies.sort((a, b) => {
    if (a.year === b.year) {
      // If release years are the same, sort by title alphabetically
      return a.title.localeCompare(b.title);
    } else {
      // Sort by release year in ascending order
      return a.year - b.year;
    }
  });

  return sortedMovies;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  // Create a shallow copy of the original array to avoid mutation
  const sortedMovies = [...movies];

  // Sort the copy by movie titles alphabetically
  sortedMovies.sort((a, b) => a.title.localeCompare(b.title));

  // Extract the titles and return the first 20 (or all if less than 20)
  const top20Titles = sortedMovies.slice(0, 20).map((movie) => movie.title);

  return top20Titles;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
