// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

// const movies = require("./data");

function getAllDirectors(moviesArray) {
  const newTabDirector = moviesArray.map((element) => {
    return element.director;
  });
  return newTabDirector;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  const filterStevenDrama = moviesArray.filter((element) => {
    if (
      element.director === "Steven Spielberg" &&
      element.genre.includes("Drama")
    ) {
      return element.genre;
    }
  });

  return filterStevenDrama.length;
}

console.log(howManyMovies(movies));

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (!moviesArray.length) {
    return 0;
  }
  const average =
    moviesArray.reduce((acc, val) => acc + val.score, 0) / moviesArray.length;
  return Number(average.toFixed(2));
}

console.log(scoresAverage(movies));

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const drama = moviesArray.filter((element) => {
    if (element.genre.includes("Drama")) {
      return element.score;
    }
  });
  const dramaScore = drama.reduce((acc, val) => {
    acc += val.score;
    return acc;
  }, 0);

  return Number((dramaScore / moviesArray.length).toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const sort = moviesArray.sort((a, b) => {
    if (a.year < b.year) return -1;
    if (a.year > b.year) return 1;
    return 0;
  });
  return (newArray = [...sort]);
}

console.log(orderByYear(movies));

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const order = moviesArray.map((element) => {
    return element;
  });
  return (newArray = [...order.slice(0, 21)]);
}

console.log(orderAlphabetically(movies));

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
