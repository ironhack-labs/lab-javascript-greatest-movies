// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  const directorsList = moviesArray.map(function (element) {
    return element.director;
  }, 0);

  return directorsList;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  const spielbergDramas = moviesArray.filter(function (element) {
    return (
      element.director === "Steven Spielberg" && element.genre.includes("Drama")
    );
  });

  return spielbergDramas.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  /*if (moviesArray === []) {
    return 0;
  }*/

  const expungedScore = moviesArray.filter(function (element) {
    return element.score;
  });

  const cumulatedScore = expungedScore.reduce(function (accumulator, element) {
    return accumulator + element.score;
  }, 0);

  let rawScore = cumulatedScore / moviesArray.length;
  //  let rawScore = cumulatedScore / expungedScore.length;

  if (moviesArray.length != 0) {
    return Math.round(rawScore * 100) / 100;
  } else {
    return 0;
  }
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const dramasWithScore = moviesArray.filter(function (element) {
    return element.score !== undefined && element.genre.includes("Drama");
  });

  const dramaCumulatedScore = dramasWithScore.reduce(function (
    accumulator,
    element
  ) {
    return accumulator + element.score;
  },
  0);

  let dramasRawScore = dramaCumulatedScore / dramasWithScore.length;

  if (moviesArray.length != 0 && dramasWithScore.length != 0) {
    return Math.round(dramasRawScore * 100) / 100;
  } else {
    return 0;
  }
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const moviesArraySorted = moviesArray.slice(0).sort(function (a, b) {
    return a.year - b.year;
  });
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
