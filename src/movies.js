// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  return moviesArray.map((movie) => {});
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  }
  const spielbergDramas = moviesArray.filter(
    (movie) => movie.director === "Steven Spielberg" && movie.genre === "Drama"
  );
  return spielbergDramas.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  }

  const validScores = moviesArray.filter((movie) => typeof movie === "number");
  const average =
    validScores.reduce((sum, movie) => sum + movie, 0) / validScores.length;

  return Math.round(average * 100) / 100;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  if (movies.length === 0) {
    return 0;
  }

  const dramaMovies = movies.filter((movie) => movie.genre === "Drama");

  if (dramaMovies.length === 0) {
    return 0;
  }

  const totalRating = dramaMovies.reduce((sum, movie) => sum + movie.rating, 0);

  const averageRating = totalRating / dramaMovies.length;
  return averageRating;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const newArray = [...moviesArray];
  newArray.sort((a, b) => {
    if (a.year !== b.year) {
      return a.year - b.year;
    } else {
      return a.title.localeCompare(b.title);
    }
  });

  return newArray;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const orderedMovies = moviesArray.sort((a, b) => {
    return a.title.localeCompare(b.title);
  });

  const portionTitles = moviesArray.slice(0, 20);

  return portionTitles.map((movie) => {
    return movie.title;
  });
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
