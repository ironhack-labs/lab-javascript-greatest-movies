// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  const directors = moviesArray.map((movie) => movie.director);
  return [...new Set(directors)];
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  return moviesArray.filter(
    (movie) =>
      movie.director === "Steven Spielberg" && movie.genre.includes("Drama"),
  ).length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) return 0;
  const total = moviesArray.reduce((acc, movie) => acc + (movie.score || 0), 0);
  return parseFloat((total / moviesArray.length).toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const dramaMovies = moviesArray.filter((movie) =>
    movie.genre.includes("Drama"),
  );
  return scoresAverage(dramaMovies);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  return [...moviesArray].sort((a, b) => {
    if (a.year !== b.year) return a.year - b.year;
    return a.title.localeCompare(b.title);
  });
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  return [...moviesArray]
    .sort((a, b) => a.title.localeCompare(b.title))
    .slice(0, 20)
    .map((movie) => movie.title);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  return moviesArray.map((movie) => {
    const hoursMatch = movie.duration.match(/(\d+)h/);
    const minsMatch = movie.duration.match(/(\d+)min/);
    const hours = hoursMatch ? parseInt(hoursMatch[1]) : 0;
    const minutes = minsMatch ? parseInt(minsMatch[1]) : 0;
    return { ...movie, duration: hours * 60 + minutes };
  });
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
  if (moviesArray.length === 0) return null;

  const byYear = moviesArray.reduce((acc, movie) => {
    if (!acc[movie.year]) acc[movie.year] = [];
    acc[movie.year].push(movie.score);
    return acc;
  }, {});

  const bestYear = Object.entries(byYear).reduce(
    (best, [year, scores]) => {
      const avg = scores.reduce((s, n) => s + n, 0) / scores.length;
      return avg > best.avg ? { year, avg } : best;
    },
    { year: null, avg: -Infinity },
  );

  return `The best year was ${bestYear.year} with an average score of ${parseFloat(bestYear.avg.toFixed(2))}`;
}
