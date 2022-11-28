// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  const allDirectors = moviesArray.map(function (movie) {
    return movie.director;
  });
  return allDirectors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  let howMany = 0;
  for (let i = 0; i < moviesArray.length; i++) {
    if (
      moviesArray[i].genre.includes("Drama") === true &&
      moviesArray[i].director === "Steven Spielberg"
    ) {
      howMany++;
    }
  }
  return howMany;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  let averageScore = 0;
  const combinedScore = moviesArray.reduce(function (totalScore, currentValue) {
    if (currentValue.hasOwnProperty("score")) {
      totalScore += currentValue.score;
      averageScore = totalScore / moviesArray.length;
    }
    return totalScore;
  }, 0);
  return Number(averageScore.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  let averageScore = 0;
  let howMany = 0;
  const combinedScore = moviesArray.reduce(function (totalScore, currentValue) {
    if (
      currentValue.genre.includes("Drama") &&
      currentValue.hasOwnProperty("score")
    ) {
      totalScore += currentValue.score;
      howMany++;
      averageScore = totalScore / howMany;
    }
    return totalScore;
  }, 0);
  return Number(averageScore.toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
