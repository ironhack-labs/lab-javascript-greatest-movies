// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  return moviesArray.map((movie) => movie.director);
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  return moviesArray.filter(
    (movie) =>
      movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
  ).length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length > 0) {
    let sum = moviesArray.reduce(function (acc, movie) {
      if (movie.score) {
        return acc + movie.score;
      } else {
        return acc;
      }
    }, 0);
    return Math.round((sum / moviesArray.length) * 100) / 100;
  } else {
    return 0;
  }
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const drama = moviesArray.filter((movie) => movie.genre.includes("Drama"));
  return scoresAverage(drama);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  let moviesClone = moviesArray.map((movies) => movies);
  moviesClone.sort((a, b) => {
    if (a.year === b.year) {
      if (a.title > b.title) {
        return 1;
      } else {
        return -1;
      }
    } else {
      return a.year - b.year;
    }
  });
  return moviesClone;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  let moviesClone = moviesArray.map((movies) => movies);
  moviesClone.sort((a, b) => {
    if (a.title > b.title) {
      return 1;
    } else {
      return -1;
    }
  });
  let print = moviesClone.map((movies) => movies.title);
  return print.slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  let moviesClone = moviesArray.map((movies) => movies);
  console.log(moviesClone);
  moviesClone.map((movie) => {
    let movieDuration = movie.duration;
    let hour = parseInt(movieDuration.slice(0, movieDuration.indexOf("h")));
    let min = parseInt(
      movieDuration.slice(
        movieDuration.indexOf(" ") + 1,
        movieDuration.indexOf("m")
      )
    );
    console.log(hour);
    let timeInMin = hour * 60 + min;
    movie.duration = timeInMin;
  });
  console.log(moviesClone);
  return moviesClone;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
