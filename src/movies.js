// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  return [...(new Set(moviesArray.map(({ director }) => director)))];
}
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  const res = moviesArray.reduce((acc, { director, genre }) => {
    if (director === 'Steven Spielberg' && genre.includes('Drama')) {
      return acc + 1;
    }
    return acc;
  }, 0)
  console.log(res);
  return res;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  const rankedMovies = moviesArray.filter(movie => typeof movie.score === 'number');
  if (rankedMovies.length === 0) { return 0; }
  const allScores = rankedMovies.reduce((sum, movie) => sum + movie.score, 0);
  const scoresAverage = allScores / moviesArray.length;
  return parseFloat(scoresAverage.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const rankedMovies = moviesArray.filter(movie => (movie.genre.includes('Drama') && typeof movie.score === 'number'));
  if (rankedMovies.length === 0) { return 0; }
  const allScores = rankedMovies.reduce((sum, movie) => sum + movie.score, 0);
  const scoresAverage = allScores / rankedMovies.length;
  return parseFloat(scoresAverage.toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  return [...moviesArray].sort((a, b) => {

    if (a.year < b.year) {
      return -1;
    }

    if (a.year > b.year) {
      return 1;
    }

    return a.title < b.title ? -1 : 1;

  });
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  return [...moviesArray].sort((a, b) => {
    return a.title < b.title ? -1 : a.title === b.title ? 0 : 1;
  }).map(movie => movie.title).slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  return moviesArray.map(movie => ({
    ...movie, duration: movie.duration.split(' ').reduce((total, time) => total + parseInt(time) * (time.includes('h') ? 60 : 1), 0)
  }))
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
  if (moviesArray.length === 0) { return null };
  const yearTotalScore = moviesArray.reduce((yearTotalScore, { year, score }) => {
    yearTotalScore[year] = yearTotalScore[year] || { totalScore: 0, movies: 0 };
    yearTotalScore[year].totalScore += score;
    yearTotalScore[year].movies += 1;
    return yearTotalScore;
  }, {});
  const yearAvg = Object.entries(yearTotalScore).map(([year, { totalScore, movies }]) => ({ year: Number(year), average: totalScore / movies }));
  const bestYear = yearAvg.reduce((best, current) => current.average > best.average ? current : best);
  return `The best year was ${bestYear.year} with an average score of ${bestYear.average}`;
}
