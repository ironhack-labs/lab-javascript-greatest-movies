// Iteration 1: All directors
function getAllDirectors(moviesArray) {
  return moviesArray.map(movie => movie.director);
}

// Iteration 2: Steven Spielberg. The best?
function howManyMovies(moviesArray) {
  if (moviesArray.length === 0) return 0;
  const spielbergDramas = moviesArray.filter(
    movie => movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')
  );
  return spielbergDramas.length;
}

// Iteration 3: All scores average
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) return 0;
  const totalScore = moviesArray.reduce((acc, movie) => {
    return acc + (typeof movie.score === 'number' ? movie.score : 0);
  }, 0);
  const average = totalScore / moviesArray.length;
  return Math.round(average * 100) / 100;
}

// Iteration 4: Drama movies
function dramaMoviesScore(moviesArray) {
  const dramaMovies = moviesArray.filter(movie => movie.genre.includes('Drama'));
  if (dramaMovies.length === 0) return 0;
  const totalScore = dramaMovies.reduce((acc, movie) => {
    return acc + (typeof movie.score === 'number' ? movie.score : 0);
  }, 0);
  const average = totalScore / dramaMovies.length;
  return Math.round(average * 100) / 100;
}

// Iteration 5: Ordering by year
function orderByYear(moviesArray) {
  const newArray = [...moviesArray]; // Copia para no mutar el original
  return newArray.sort((a, b) => {
    if (a.year === b.year) {
      return a.title.localeCompare(b.title);
    }
    return a.year - b.year;
  });
}

// Iteration 6: Alphabetic Order
function orderAlphabetically(moviesArray) {
  const newArray = [...moviesArray];
  return newArray
    .sort((a, b) => a.title.localeCompare(b.title))
    .map(movie => movie.title)
    .slice(0, 20);
}

// BONUS - Iteration 7: Time Format
function turnHoursToMinutes(moviesArray) {
  return moviesArray.map(movie => {
    const newMovie = { ...movie }; // Copia del objeto
    let totalMinutes = 0;
    if (typeof newMovie.duration === 'string') {
      const hoursMatch = newMovie.duration.match(/(\d+)h/);
      if (hoursMatch) totalMinutes += parseInt(hoursMatch[1], 10) * 60;
      const minsMatch = newMovie.duration.match(/(\d+)min/);
      if (minsMatch) totalMinutes += parseInt(minsMatch[1], 10);
    }
    newMovie.duration = totalMinutes;
    return newMovie;
  });
}

// BONUS - Iteration 8: Best yearly score average
function bestYearAvg(moviesArray) {
  if (!moviesArray || moviesArray.length === 0) return null;

  const yearsMap = {};
  moviesArray.forEach(movie => {
    if (!yearsMap[movie.year]) yearsMap[movie.year] = [];
    yearsMap[movie.year].push(movie.score);
  });

  let bestYear = null;
  let bestAverage = 0;

  for (const year in yearsMap) {
    const scores = yearsMap[year];
    const sum = scores.reduce((acc, s) => acc + s, 0);
    const avg = sum / scores.length;

    if (avg > bestAverage || (avg === bestAverage && (bestYear === null || parseInt(year) < bestYear))) {
      bestAverage = avg;
      bestYear = parseInt(year);
    }
  }

  return `The best year was ${bestYear} with an average score of ${bestAverage}`;
}