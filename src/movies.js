// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  const newArray = moviesArray.map((movies) => movies.director);
  return newArray;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  }
  const bySpielberg = moviesArray.filter(
    (movies) =>
      movies.director === "Steven Spielberg" && movies.genre.includes("Drama")
  );
  return bySpielberg.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  }

  let totalScore = 0;
  let movieCount = 0;

  for (let i = 0; i < moviesArray.length; i++) {
    if (moviesArray[i].score) {
      totalScore += moviesArray[i].score;
    }
    movieCount++;
  }

  const averageScore = totalScore / movieCount;
  const roundedAverage = Number(averageScore.toFixed(2));

  return roundedAverage;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  let totalScore = 0;
  let dramaMovieCount = 0;

  for (let i = 0; i < moviesArray.length; i++) {
    const movie = moviesArray[i];
    if (movie.genre.includes("Drama")) {
      totalScore += movie.score;
      dramaMovieCount++;
    }
  }
  if (dramaMovieCount > 0) {
    const calcAverage = totalScore / dramaMovieCount;
    const roundedAverage = Number(calcAverage.toFixed(2));

    return roundedAverage;
  } else {
    return 0;
  }
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const sortedMovies = moviesArray.slice();

  sortedMovies.sort((a, b) => {
    if (a.year !== b.year) {
      return a.year - b.year;
    } else {
      return a.title.localeCompare(b.title);
    }
  });

  return sortedMovies;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const copyOfMovies = moviesArray.slice();
  copyOfMovies.sort((a, b) => a.title.localeCompare(b.title));
  const titles = copyOfMovies.map((movie) => movie.title);
  return titles.slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
