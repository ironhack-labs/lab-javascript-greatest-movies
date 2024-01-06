// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
/* const getAllDirectors = (moviesArray) => moviesArray.map(movie => movie.director); */

function getAllDirectors(moviesArray) {
  /* const directors = moviesArray.map(function (movie) {
    return movie.director;
  }); */
  const directors = moviesArray.map((movie) => movie.director);
  return directors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  const moviesCount = moviesArray.filter(
    (movie) =>
      movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
  ).length;
  return moviesCount;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) return 0;
  const avg =
    moviesArray
      .filter((movie) => movie.score !== undefined)
      .map((movie) => movie.score)
      .reduce((totalScore, score) => totalScore + score) / moviesArray.length;
  return Math.round(avg * 100) / 100;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const dramaMovies = moviesArray.filter((movie) =>
    movie.genre.includes("Drama")
  );
  if (dramaMovies.length === 0) return 0;
  const avg =
    dramaMovies
      .filter((movie) => movie.score !== undefined)
      .map((movie) => movie.score)
      .reduce((totalScore, score) => totalScore + score) / dramaMovies.length;
  return Math.round(avg * 100) / 100;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  return moviesArray.slice().sort((a, b) => {
    const yearDiff = a.year - b.year;
    if (yearDiff === 0) {
      const orderAlf = a.title.localeCompare(b.title);
      return orderAlf;
    }
    return yearDiff;
  });
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  return moviesArray
    .map((a) => a.title)
    .sort((a, b) => {
      if (a < b) return -1;
      if (a > b) return 1;
      if (a === b) return 0;
    })
    .slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  return moviesArray.map((movie) => {
    const firstChar = movie.duration.slice(0, 1);
    let minutes = Number(firstChar) * 60;
    if (movie.duration.includes("min")) {
      const minutes2 = movie.duration.split(" ")[1];
      minutes += Number(minutes2.slice(0, minutes2.length - 3));
    }
    const movieInMinutes = { ...movie }; // copies the object movie into movieInMinutes
    movieInMinutes.duration = minutes;
    return movieInMinutes;
  });
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
  if (moviesArray.length === 0) return null;
  // Paso 1: Agrupar por property year
  const groupByYear = Object.groupBy(moviesArray, (movie) => {
    return movie.year;
  });
  // Paso 2: Sacar la media por año => Sumar el score de las peliculas del mismo año y dividir entre el el número de peliculas de ese año
}
