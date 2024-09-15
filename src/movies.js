const moves = require("./data");

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  const newArr = moviesArray.map((movies) => movies.director);
  return newArr;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  const newArr = moviesArray.filter(
    (movies) =>
      movies.director === "Steven Spielberg" && movies.genre.includes("Drama")
  );
  return newArr.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (!moviesArray.length) return 0;
  const newAvrgArr =
    moviesArray.reduce((accumulator, value) => {
      if (!value.score) {
        return accumulator;
      }
      return accumulator + value.score;
    }, 0) / moviesArray.length;
  return Math.round(newAvrgArr * 100) / 100;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const dramaArr = moviesArray.filter((movies) =>
    movies.genre.includes("Drama")
  );
  if (!dramaArr.length) {
    return 0;
  } else {
    const dramaArrAvrg = dramaArr.reduce((accumulator, value) => {
      return accumulator + value.score;
    }, 0);
    return Math.round((dramaArrAvrg / dramaArr.length) * 100) / 100;
  }
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const orderArr = [...moviesArray];

  const orderArrYear = orderArr.sort(function (a, b) {
    if (a.year !== b.year) {
      return a.year - b.year;
    } else {
      if (a.title < b.title) {
        return -1;
      }
      if (a.title > b.title) {
        return 1;
      }
      if (a.title === b.title) {
        return 0;
      }
    }
  });
  return orderArrYear;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const newArr = [...moviesArray];

  const orderByAlpha = newArr.map((movies) => movies.title);

  const orderByAlphaTwenty = orderByAlpha.sort(function (a, b) {
    if (a < b) {
      return -1;
    }
    if (a > b) {
      return 1;
    }
    if (a === b) {
      return 0;
    }
  });
  return orderByAlphaTwenty.slice(0, 20);
}

console.log(orderAlphabetically(movies));

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
