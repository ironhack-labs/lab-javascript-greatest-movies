// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  return moviesArray
    .filter((moviesArray) => moviesArray.director)
    .map((moviesArray) => moviesArray.director);
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
  if (!moviesArray.length) {
    return 0;
  }
  const sumMovies = moviesArray.reduce((sum, movie) => sum + movie.score, 0);
  const average = Number.parseFloat(sumMovies) / moviesArray.length;
  return Number(average.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const dramaMovies = [];
  moviesArray.map((movie) => {
    if (movie.genre.includes("Drama")) {
      dramaMovies.push(movie);
    }
    return dramaMovies;
  });
  if (!moviesArray.length) {
    return 0;
  }
  let averageScore = scoresAverage(dramaMovies);
  return Number.parseFloat(averageScore.toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  if (!moviesArray.length) {
    return [];
  }
  const order = [
    ...moviesArray.sort((a, b) => {
      if (a.year - b.year) {
        return a.year - b.year;
      }
      return a.title.localeCompare(b.title);
    }),
  ];
  return order;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  if (!moviesArray.length) {
    return [];
  }
  const movies = [...moviesArray];
  const order = [...orderByYear(movies)];
  const list = Math.min(20, order.length);
  const firstMovies = [];
  for (let i = 0; i < list; i++) {
    firstMovies.push(order[i].title);
  }
  return firstMovies;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
