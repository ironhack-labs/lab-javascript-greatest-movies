// Iteration 1
function getAllDirectors(movies) {
  return movies.map(movie => movie.director);
}

// Iteration 2
function howManyMovies(movies) {
  if (movies.length === 0) return 0;

  return movies.filter(movie =>
    movie.director === "Steven Spielberg" &&
    movie.genre.includes("Drama")
  ).length;
}

// Iteration 3
function scoresAverage(movies) {
  if (movies.length === 0) return 0;

  const sum = movies.reduce((acc, movie) => {
    return acc + (movie.score || 0);
  }, 0);

  return Number((sum / movies.length).toFixed(2));
}

// Iteration 4
function dramaMoviesScore(movies) {
  const drama = movies.filter(movie =>
    movie.genre.includes("Drama")
  );

  if (drama.length === 0) return 0;

  return scoresAverage(drama);
}

// Iteration 5
function orderByYear(movies) {
  const copy = [...movies];

  return copy.sort((a, b) => {
    if (a.year === b.year) {
      return a.title.localeCompare(b.title);
    }
    return a.year - b.year;
  });
}

// Iteration 6
function orderAlphabetically(movies) {
  return movies
    .map(movie => movie.title)
    .sort((a, b) => a.localeCompare(b))
    .slice(0, 20);
}

// Bonus 7
function turnHoursToMinutes(movies) {
  return movies.map(movie => {
    const newMovie = { ...movie };

    let totalMinutes = 0;

    const hoursMatch = newMovie.duration.match(/(\d+)h/);
    const minutesMatch = newMovie.duration.match(/(\d+)min/);

    if (hoursMatch) totalMinutes += parseInt(hoursMatch[1]) * 60;
    if (minutesMatch) totalMinutes += parseInt(minutesMatch[1]);

    newMovie.duration = totalMinutes;

    return newMovie;
  });
}

function bestYearAvg(movies) {
  if (movies.length === 0) return null;

  const yearMap = {};

  // group scores by year
  movies.forEach(movie => {
    if (!yearMap[movie.year]) {
      yearMap[movie.year] = [];
    }
    yearMap[movie.year].push(movie.score);
  });

  let bestYear = 0;
  let bestAvg = 0;

  for (let year in yearMap) {
    const scores = yearMap[year];

    const avg =
      scores.reduce((sum, score) => sum + score, 0) / scores.length;

    const roundedAvg = Number(avg.toFixed(2));

    if (
      roundedAvg > bestAvg ||
      (roundedAvg === bestAvg && Number(year) < bestYear)
    ) {
      bestYear = Number(year);
      bestAvg = roundedAvg;
    }
  }

  return `The best year was ${bestYear} with an average score of ${bestAvg.toFixed(2)}`;
}