// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
//const movies = require("./data.js");
function getAllDirectors(moviesArray) {
  let res = [];
  moviesArray.forEach(function (movie) {
    if (!res.includes(movie.director)) {
      res.push(movie.director);
    }
  });
  return res;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  const res = moviesArray.filter(
    (movie) =>
      movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
  );

  return res.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  const scoresTab = [];
  if (moviesArray.length === 0) {
    return 0;
  }
  moviesArray.forEach((movie) => {
    if (!movie.score) {
      scoresTab.push(0);
    } else {
      scoresTab.push(movie.score);
    }
  });

  const sum = scoresTab.reduce((previousValue, currentValue) => {
    if (scoresTab.length === 0) {
      return (sum = 0);
    } else {
      return previousValue + currentValue;
    }
  });
  const moy = sum / moviesArray.length;
  return parseFloat(moy.toFixed(2));
}
//console.log(scoresAverage(movies));
// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const dramaMovies = moviesArray.filter((movie) =>
    movie.genre.includes("Drama")
  );
  let moy = scoresAverage(dramaMovies);
  return moy;
}
//console.log(dramaMoviesScore(movies));
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const sortYear = moviesArray.map((movie) => movie);
  sortYear.sort((movie, nextMovie) => {
    if (movie.year === nextMovie.year) {
      if (movie.title < nextMovie.title) {
        return -1;
      } else {
        return 1;
      }
    } else {
      return movie.year - nextMovie.year;
    }
  });
  return sortYear;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const res = [];
  const sortAlpha = moviesArray.map((movie) => movie);
  sortAlpha.sort((movie, nextMovie) => {
    if (movie.title < nextMovie.title) {
      return -1;
    } else {
      return 1;
    }
  });

  for (let i = 0; i < 21; i++) {
    res.push(sortAlpha[i].title);
  }
  //console.log(res);
  return res;
}
//console.log(orderAlphabetically(movies));
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
