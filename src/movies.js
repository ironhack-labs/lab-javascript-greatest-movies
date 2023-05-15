// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  return moviesArray.map((movie) => movie.director);
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  let dramaFromSteven = moviesArray.filter((movie) => {
    const isDrama = movie.genre.includes("Drama");
    const isBySteven = movie.director === "Steven Spielberg";
    return isDrama && isBySteven;
  });
  return dramaFromSteven.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  let length = moviesArray.length;
  if (length === 0) {
    return 0;
  }
  let totalScores = moviesArray.reduce((acc, currMovie) => {
    let score = currMovie.score;

    if (score === undefined) {
      return acc;
    }
    return acc + score;
  }, 0);

  let average = totalScores / length;
  let result = parseFloat(average.toFixed(2));
  return result;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  let dramaMoviesArr = moviesArray.filter((movie) =>
    movie.genre.includes("Drama")
  );
  return scoresAverage(dramaMoviesArr);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  let moviesArrayCopy = [...moviesArray];
  moviesArrayCopy.sort((a, b) => {
    if (a.year === b.year) {
      return a.title.localeCompare(b.title);
    } else {
      return a.year - b.year;
    }
  });
  return moviesArrayCopy;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  let moviesArrayCopy = [...moviesArray];
  let moviesTitles = moviesArrayCopy.map((movie) => movie.title);
  moviesTitles.sort((a, b) => {
    return a.localeCompare(b);
  });
  return moviesTitles.filter((movie, index) => {
    if (index < 20) {
      return true;
    }
  });
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
