// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  return moviesArray.map(function (movie) {
    return movie.director;
  });
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  return moviesArray.filter(function (movie) {
    return (
      movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
    );
  }).length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals

function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  } else {
    let filteredMovies = moviesArray.filter((movie) => movie.score);
    let totalScore = filteredMovies.reduce(function (sum, movie) {
      return sum + movie.score;
    }, 0);

    let averageScore = totalScore / moviesArray.length;
    return Number(averageScore.toFixed(2));
  }
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  let dramaMovies = moviesArray.filter(function (movie) {
    return movie.genre.includes("Drama");
  });

  if (dramaMovies.length === 0) {
    return 0;
  } else {
    let totalScore = dramaMovies.reduce(function (sum, movie) {
      return sum + movie.score;
    }, 0);

    let scoresAverage = totalScore / dramaMovies.length;

    let floatedNum = Number(scoresAverage.toFixed(2));
    return floatedNum;
  }
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {}
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  let newArray = moviesArray.map(function (movie) {
    return (movies.title = newArray.sort());
  });
  if (newArray.length > 20) {
    return newArray.slice(0, 20);
  } else return newArray;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
  if (moviesArray.length === 0) {
    return null;
  }
}
