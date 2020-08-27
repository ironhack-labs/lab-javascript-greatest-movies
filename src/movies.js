// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  const directors = movies.map((movie) => movie.director);

  return directors;
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
