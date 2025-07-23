// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  const directors = moviesArray.map(function (movie) {
    return movie.director;
  });
  return directors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  const spielbergDramas = moviesArray.filter(function (movie) {
    return (
      movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
    );
  });

  return spielbergDramas.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  }

  const totalScore = moviesArray.reduce(function (acc, movie) {
    if (typeof movie.score === "number") {
      return acc + movie.score;
    }
    return acc;
  }, 0);

  const numberOfValidScores = moviesArray.filter(
    (movie) => typeof movie.score === "number"
  ).length;

  if (numberOfValidScores === 0) {
    return 0;
  }
  if (numberOfValidScores === 0) {
    return 0;
  }
  const averageScore = totalScore / numberOfValidScores;

  return parseFloat(averageScore.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const dramaMovies = moviesArray.filter(function (movie) {
    return movie.genre.includes("Drama");
  });

  if (dramaMovies.length === 0) {
    return 0;
  }

  const totalScore = dramaMovies.reduce(function (sum, movie) {
    return sum + (movie.score || 0);
  }, 0);

  const average = totalScore / dramaMovies.length;

  return parseFloat(average.toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const moviesCopy = moviesArray.slice();

  moviesCopy.sort(function (a, b) {
    if (a.year !== b.year) {
      return a.year - b.year;
    } else {
      return a.title.localeCompare(b.title);
    }
  });

  return moviesCopy;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const moviesCopy = moviesArray.slice();

  const titles = moviesCopy.map(function (movie) {
    return movie.title;
  });

  titles.sort();

  return titles.slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
