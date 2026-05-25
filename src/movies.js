function getAllDirectors(moviesArray) {
  return moviesArray.map(movie => movie.director);
}

function getUniqueDirectors(moviesArray) {
  const directors = getAllDirectors(moviesArray);
  return directors.filter((director, index) => directors.indexOf(director) === index);
}

function howManyMovies(moviesArray) {
  return moviesArray.filter(movie => 
    movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')
  ).length;
}

function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) return 0;
  const totalScore = moviesArray.reduce((sum, movie) => {
    if (movie.score) {
      return sum + movie.score;
    }
    return sum;
  }, 0);
  return Number((totalScore / moviesArray.length).toFixed(2));
}

function dramaMoviesScore(moviesArray) {
  const dramaMovies = moviesArray.filter(movie => movie.genre.includes('Drama'));
  return scoresAverage(dramaMovies);
}

function orderByYear(moviesArray) {
  return [...moviesArray].sort((a, b) => {
    if (a.year !== b.year) {
      return a.year - b.year;
    }
    return a.title.localeCompare(b.title);
  });
}

function orderAlphabetically(moviesArray) {
  return moviesArray
    .map(movie => movie.title)
    .sort((a, b) => a.localeCompare(b))
    .slice(0, 20);
}

function turnHoursToMinutes(moviesArray) {
  return moviesArray.map(movie => {
    const newMovie = { ...movie };
    let totalMinutes = 0;
    if (newMovie.duration && typeof newMovie.duration === 'string') {
      const hoursMatch = newMovie.duration.match(/(\d+)h/);
      const minutesMatch = newMovie.duration.match(/(\d+)min/);
      if (hoursMatch) totalMinutes += parseInt(hoursMatch[1]) * 60;
      if (minutesMatch) totalMinutes += parseInt(minutesMatch[1]);
    }
    newMovie.duration = totalMinutes;
    return newMovie;
  });
}

function bestYearAvg(moviesArray) {
  if (moviesArray.length === 0) return null;
  const scoresByYear = {};
  moviesArray.forEach(movie => {
    if (!scoresByYear[movie.year]) scoresByYear[movie.year] = [];
    scoresByYear[movie.year].push(movie.score || 0);
  });
  let bestYear = null;
  let highestAverage = -1;
  for (const year in scoresByYear) {
    const scores = scoresByYear[year];
    const average = scores.reduce((sum, score) => sum + score, 0) / scores.length;
    if (average > highestAverage) {
      highestAverage = average;
      bestYear = year;
    } else if (average === highestAverage && year < bestYear) {
      bestYear = year;
    }
  }
  return `The best year was ${bestYear} with an average score of ${Number(highestAverage.toFixed(1))}`;
}