// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  //   let newestArray = movies.map((place) => place.director);
  //     return newestArray;

  const newArray = movies.map(function (value) {
    console.log(value.director);
    return value.director;
  });
  return newArray;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(moviesArray) {
  const stevenSpielberg = movies.filter(function (zz) {
    if (zz.director === "Steven Spielberg" && zz.genre.includes === "Drama") {
      return stevenSpielberg.length;
    } else {
      return;
    }
  });
  // return zz.director === "Steven Spielberg" && zz.genre.includes ===("Drama");
  //   });
  return stevenSpielberg.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  let newScoreArray = movies.reduce(function (total, current) {
    return total.score + current.score;
  });
  Math.round(newScoreArray);
  return newScoreArray;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const newestScoreArray = movie.reduce(function (total, current) {
    if (movies.genre.includes("Drama")) {
      return total.score + current.score;
    } else {
      return 0;
    }
  });
  return newestScoreArray;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
