// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  const directors = movies.map((movie) => movie.director);

  return directors.filter(
    (director, index) => directors.indexOf(director) === index
  );
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  const dramasSteve = movies.filter(
    (movie) =>
      movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
  );
  return dramasSteve.length;
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(movies) {
  if (!movies || movies.length === 0) {
    return 0;
  }

  const total = movies.reduce((acc, movie) => {
    if (!movie.rate) {
      return acc + 0;
    }
    return acc + movie.rate;
  }, 0);
  const avg = total / movies.length;
  return Math.round(avg * 100) / 100;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(movies) {
  const dramas = movies.filter((movie) => movie.genre.includes("Drama"));

  const avg = ratesAverage(dramas);
  return avg;
}
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  let newMovies = movies.map((movie) => movie);
  newMovies
    .sort((a, b) => {
      if (a.title < b.title) {
        return -1;
      }
      if (a.title > b.title) {
        return 1;
      }
      return 0;
    })
    .sort((a, b) => a.year - b.year);
  return newMovies;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  return movies
    .map((movie) => movie.title)
    .sort()
    .slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {
  let newMovies = movies.map((movie) => cloneObject(movie));
  newMovies = newMovies.map((newMovie) => {
    newMovie.duration = hoursToMinutes(newMovie.duration);
    return newMovie;
  });
  return newMovies;
}

function hoursToMinutes(str) {
  let arr = str.split(" ");
  let min;

  if (arr.length > 1) {
    arr = str.split("min").join("").split("h ");
    arr = arr.map((x) => Number(x));
    min = arr[0] * 60 + arr[1];
    return min;
  }
  if (arr[0].includes("h")) {
    min = Number(arr[0].slice(0, arr.indexOf("h"))) * 60;
    return min;
  }

  if (arr[0].includes("min")) {
    arr = arr[0].split("min");
    min = Number(arr[0]);
    return min;
  }
}

function cloneObject(object) {
  let clone = {};
  for (let prop in object) {
    if (object[prop] != null && typeof object[prop] == "object") {
      clone[prop] = cloneObject(object[prop]);
    } else {
      clone[prop] = object[prop];
    }
  }
  return clone;
}

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
