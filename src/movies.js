// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray = []) {
  const allDirectors = moviesArray.map((movie) => movie.director);
  return allDirectors.filter(
    (director, pos) => allDirectors.indexOf(director) === pos
  );
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray = []) {
  if (moviesArray.length === 0) return 0;
  return moviesArray.filter(
    (movie) =>
      movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
  ).length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) return 0;
  const sum = moviesArray
    .filter((movie) => movie.score)
    .reduce((acc, movie) => acc + movie.score, 0);
  const avg = sum / moviesArray.length;
  return Math.round(avg * 100) / 100;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  if (moviesArray.length === 0) return 0;
  const dramaMovies = moviesArray.filter((movie) =>
    movie.genre.includes("Drama")
  );
  return scoresAverage(dramaMovies);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  return [...moviesArray].sort(
    (a, b) => a.year - b.year || a.title.localeCompare(b.title)
  );
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const moviesOrdered = [...moviesArray]
    .map((movie) => movie.title)
    .sort((a, b) => a.localeCompare(b))
    .slice(0, 20);
  return moviesOrdered;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  const movies = moviesArray.map((movie) => Object.assign({}, movie));
  movies.forEach((movie) => {
    const minutes = movie.duration.split(" ").reduce((acc, time) => {
      if (time.indexOf("h") > -1) {
        return acc + Number(time.replace("h", "")) * 60;
      } else {
        return acc + Number(time.replace("min", ""));
      }
    }, 0);

    movie.duration = minutes;
  });
  return movies;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
  if (moviesArray.length === 0) return null;
  console.log(`The best year was <YEAR> with an average score of <RATE>`);
}
