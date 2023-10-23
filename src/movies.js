// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  const directors = moviesArray.map((movie) => movie.director);
  return directors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  const spielbergMovies = moviesArray.filter(
    (selector) =>
      selector.director === "Steven Spielberg" &&
      selector.genre.includes("Drama")
  );

  return spielbergMovies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  }

  const totalScore = moviesArray.reduce((acc, movie) => {
    if (movie.score) {
      return acc + movie.score;
    } else {
      return acc;
    }
  }, 0);

  const averageScore = totalScore / moviesArray.length;
  const roundedAverage = Math.round(averageScore * 100) / 100;
  return roundedAverage;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const dramaMovies = moviesArray.filter((movie) =>
    movie.genre.includes("Drama")
  );

  if (dramaMovies.length === 0) {
    return 0;
  }
  const totalScore = dramaMovies.reduce((acc, movie) => {
    return acc + (movie.score || 0);
  }, 0);
  const averageScore = totalScore / dramaMovies.length;
  return Math.round(averageScore * 100) / 100;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const sortedMovies = [...moviesArray];

  sortedMovies.sort((a, b) => {
    if (a.year !== b.year) {
      return a.year - b.year;
    }

    if (a.title < b.title) {
      return -1;
    } else if (a.title > b.title) {
      return 1;
    }
    return 0;
  });

  return sortedMovies;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const sortedMovies = [...moviesArray];

  sortedMovies.sort((a, b) => {
    if (a.title < b.title) return -1;
    if (a.title > b.title) return 1;
    return 0;
  });

  const topMovies = sortedMovies.slice(0, 20);

  return topMovies.map((movie) => movie.title);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
