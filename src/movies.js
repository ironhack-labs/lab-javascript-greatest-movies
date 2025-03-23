// Iteration 1: All directors
function getAllDirectors(moviesArray) {
  const directors = moviesArray.map((movie) => movie.director);
  return [...new Set(directors)];
}

// Iteration 2: Steven Spielberg's Drama Movies
function howManyMovies(moviesArray) {
  return moviesArray.filter(
    (movie) =>
      movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
  ).length;
}

// Iteration 3: All scores average
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) return 0;

  const totalScore = moviesArray.reduce((sum, movie) => {
    return sum + (movie.score || 0);
  }, 0);

  return Number((totalScore / moviesArray.length).toFixed(2));
}

// Iteration 4: Drama Movies average score
function dramaMoviesScore(moviesArray) {
  const dramaMovies = moviesArray.filter((movie) =>
    movie.genre.includes("Drama")
  );
  return scoresAverage(dramaMovies);
}

// Iteration 5: Order by year
function orderByYear(moviesArray) {
  return [...moviesArray].sort((a, b) => {
    if (a.year === b.year) return a.title.localeCompare(b.title);
    return a.year - b.year;
  });
}

// Iteration 6: Alphabetical order
function orderAlphabetically(moviesArray) {
  return moviesArray
    .map((movie) => movie.title)
    .sort((a, b) => a.localeCompare(b))
    .slice(0, 20);
}

// BONUS - Iteration 7: Time Format
function turnHoursToMinutes(moviesArray) {
  return moviesArray.map((movie) => {
    const duration = movie.duration;
    const hours = parseInt(duration.match(/(\d+)h/)?.[1] || 0) * 60;
    const minutes = parseInt(duration.match(/(\d+)min/)?.[1] || 0);
    return { ...movie, duration: hours + minutes };
  });
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
