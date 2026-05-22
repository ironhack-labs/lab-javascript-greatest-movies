// Iteration 1: All directors? - Get the array of all directors.
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

  const totalScore = moviesArray.reduce((sum, movie) => {
    const score = typeof movie.score === 'number' ? movie.score : 0;
    return sum + score;
  }, 0);

  return Math.round((totalScore / moviesArray.length) * 100) / 100;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const dramaMovies = moviesArray.filter((movie) =>
    movie.genre.includes('Drama')
  );

  if (dramaMovies.length === 0) return 0;

  const totalScore = dramaMovies.reduce((sum, movie) => {
    const score = typeof movie.score === 'number' ? movie.score : 0;
    return sum + score;
  }, 0);

  return Math.round((totalScore / dramaMovies.length) * 100) / 100;
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
    const hoursMatch = movie.duration.match(/(\d+)h/);
    const minsMatch = movie.duration.match(/(\d+)min/);
    const hours = hoursMatch ? parseInt(hoursMatch[1], 10) : 0;
    const minutes = minsMatch ? parseInt(minsMatch[1], 10) : 0;

    return {
      ...movie,
      duration: hours * 60 + minutes,
    };
  });
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
  if (moviesArray.length === 0) return null;

  const scoresByYear = moviesArray.reduce((acc, movie) => {
    if (!acc[movie.year]) {
      acc[movie.year] = { total: 0, count: 0 };
    }
    const score = typeof movie.score === 'number' ? movie.score : 0;
    acc[movie.year].total += score;
    acc[movie.year].count += 1;
    return acc;
  }, {});

  let bestYear = null;
  let bestAvg = -1;

  for (const year in scoresByYear) {
    const { total, count } = scoresByYear[year];
    const avg = Math.round((total / count) * 100) / 100;

    if (
      avg > bestAvg ||
      (avg === bestAvg && Number(year) < bestYear)
    ) {
      bestAvg = avg;
      bestYear = Number(year);
    }
  }

  return `The best year was ${bestYear} with an average score of ${bestAvg}`;
}
