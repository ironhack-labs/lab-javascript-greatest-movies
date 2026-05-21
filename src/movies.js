// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  return moviesArray.map((movie) => movie.director);
}

// BONUS - Iteration 1.1: Clean the array of directors (no duplicates)
function getAllDirectorsClean(moviesArray) {
  return [...new Set(getAllDirectors(moviesArray))];
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  return moviesArray.filter(
    (movie) =>
      movie.director === 'Steven Spielberg' &&
      movie.genre &&
      movie.genre.includes('Drama')
  ).length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) return 0;

  const total = moviesArray.reduce((sum, movie) => {
    const score = movie.score;
    if (score === '' || score === undefined || score === null) return sum;
    return sum + Number(score);
  }, 0);

  return Number((total / moviesArray.length).toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const dramaMovies = moviesArray.filter(
    (movie) => movie.genre && movie.genre.includes('Drama')
  );

  if (dramaMovies.length === 0) return 0;

  const total = dramaMovies.reduce((sum, movie) => sum + Number(movie.score), 0);
  return Number((total / dramaMovies.length).toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const copy = [...moviesArray];

  return copy.sort((a, b) => {
    if (a.year !== b.year) return a.year - b.year;
    return a.title.localeCompare(b.title);
  });
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const copy = [...moviesArray];

  return copy
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

    return { ...movie, duration: hours * 60 + minutes };
  });
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
  if (moviesArray.length === 0) return null;

  const scoresByYear = moviesArray.reduce((acc, movie) => {
    if (!acc[movie.year]) {
      acc[movie.year] = { sum: 0, count: 0 };
    }
    acc[movie.year].sum += movie.score;
    acc[movie.year].count += 1;
    return acc;
  }, {});

  let bestYear = null;
  let bestAvg = -1;

  Object.keys(scoresByYear).forEach((year) => {
    const yearNum = Number(year);
    const avg = Number(
      (scoresByYear[year].sum / scoresByYear[year].count).toFixed(2)
    );

    if (
      bestYear === null ||
      avg > bestAvg ||
      (avg === bestAvg && yearNum < bestYear)
    ) {
      bestYear = yearNum;
      bestAvg = avg;
    }
  });

  return `The best year was ${bestYear} with an average score of ${bestAvg}`;
}
