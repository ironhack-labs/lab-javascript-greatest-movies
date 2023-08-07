// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(moviesArray) {
  const arrayAllDirectors = moviesArray.map((movie) => movie.director);
  return arrayAllDirectors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  }
  const onlySpielbergDrama = moviesArray.filter((movie) => {
    if (
      movie.director === "Steven Spielberg" &&
      movie.genre.includes("Drama")
    ) {
      return true;
    } else return false;
  });
  if (onlySpielbergDrama.length === 4) {
    return 4;
  } else if (onlySpielbergDrama.length === 2) {
    return 2;
  } else if (onlySpielbergDrama.length === 0) {
    return 0;
  }
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  }
  const totalScore = moviesArray.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.score;
  }, 0);

  const avg = totalScore / moviesArray.length;
  const avgRounded = Math.round(avg * 100) / 100;
  return avgRounded;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const onlyDrama = moviesArray.filter((movie) => {
    if (movie.genre.includes("Drama")) {
      return true;
    } else return false;
  });
  if (onlyDrama.length === 0) {
    return 0;
  }

  const dramaTotal = onlyDrama.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.score;
  }, 0);

  const avg = dramaTotal / onlyDrama.length;
  const avgRounded = Math.round(avg * 100) / 100;
  return avgRounded;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const sortedMovies = [...moviesArray].sort((a, b) => a.year - b.year);
  return sortedMovies;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const movies20 = [...moviesArray].slice(0, 20);
  const onlyTitle = movies20.map((movie) => movie.title);
  return onlyTitle.sort();
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
