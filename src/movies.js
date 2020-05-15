// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(movies) {
  let directors = movies.map((movie) => movie.director);
  return directors;
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

function reduceRepetDirector(movies) {
  let uniqueList = getAllDirectors(movies);
  const removeDuplicate = new Set(uniqueList);
  return [...removeDuplicate];
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(movies) {
  const moviesSteven = [];
  if (movies.length === 0) {
    return 0;
  }
  movies.filter((movie) => {
    if (
      movie.director === "Steven Spielberg" &&
      movie.genre.includes("Drama")
    ) {
      moviesSteven.push(movie);
    } else {
      return 0;
    }
  });
  return moviesSteven.length;
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movies) {
  if (!movies.length) {
    return 0;
  }
  const total = movies.reduce((acc, value) => {
    return acc + (value.rate || 0);
  }, 0);

  const avarage = total / movies.length;
  return parseFloat(avarage.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movies) {
  if (!movies.length) {
    return 0;
  }
  const moviesDrama = movies.filter((movie) => movie.genre.includes("Drama"));
  const avarageDrama = ratesAverage(moviesDrama);

  return avarageDrama;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(movies) {
  if (!movies.length) {
    return 0;
  }
  const order = movies.sort((a, b) => b.year - a.year);
  return order.reverse();
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

newArrMovies = [];

function orderAlphabetically(movies) {
  if (!movies.length) {
    return {};
  }

  newArrMovies = movies
    .map((a) => a.title)
    .sort((a, b) => a.localeCompare(b))
    .slice(0, 20);

  return newArrMovies;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

function changeDurationMovies(movies) {
  const indexHours = movies.indexOf("h");

  let hours = 0;
  if (indexHours >= 0) {
    hours = parseInt(movies.slice(0, indexHours));
  }
  let minuts = 0;
  if (movies.includes("min")) {
    minuts = parseInt(movies.split(" ").pop());
  }

  return hours * 60 + minuts;
}

function turnHoursToMinutes(movies) {
  let newMovies = [];
  newMovies = movies.map((movie) => {
    const newHour = changeDurationMovies(movie.duration);
    if (movie.duration) {
      movie.duration = newHour;
    }
    return movie;
  });
  return newMovies;
}

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
