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
      movie.director === 'Steven Spielberg' &&
      movie.genre.includes('Drama')
  ).length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) return 0;

  const total = moviesArray.reduce(
    (sum, movie) => sum + (movie.score || 0),
    0
  );

  return Math.round((total / moviesArray.length) * 100) / 100;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const dramaMovies = moviesArray.filter((movie) =>
    movie.genre.includes('Drama')
  );

  if (dramaMovies.length === 0) return 0;

  const total = dramaMovies.reduce(
    (sum, movie) => sum + (movie.score || 0),
    0
  );

  return Math.round((total / dramaMovies.length) * 100) / 100;
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
    .map((movie) => movie.title)
    .slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  return moviesArray.map((movie) => {
    const parts = movie.duration.match(/\d+/g) || [];
    const hours = parseInt(parts[0], 10) || 0;
    const minutes = parts[1] ? parseInt(parts[1], 10) : 0;

    return {
      ...movie,
      duration: hours * 60 + minutes
    };
  });
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
  if (moviesArray.length === 0) return null;

  const yearStats = moviesArray.reduce((stats, movie) => {
    if (!stats[movie.year]) {
      stats[movie.year] = { total: 0, count: 0 };
    }
    stats[movie.year].total += movie.score || 0;
    stats[movie.year].count += 1;
    return stats;
  }, {});

  let bestYear = null;
  let bestAvg = -1;

  for (const year in yearStats) {
    const avg =
      Math.round(
        (yearStats[year].total / yearStats[year].count) * 100
      ) / 100;
    const yearNum = Number(year);

    if (
      avg > bestAvg ||
      (avg === bestAvg && (bestYear === null || yearNum < bestYear))
    ) {
      bestAvg = avg;
      bestYear = yearNum;
    }
  }

  return `The best year was ${bestYear} with an average score of ${bestAvg}`;
}
