// The `movies` array from the file `src/data.js`.
// console.log('movies: ', movies);

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  const directors = movies.map((movie) => movie.director);
  return directors.filter(
    (director, index) => directors.indexOf(director) === index
  );
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  const stevenDramaMovies = movies.filter(
    (movie) =>
      movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')
  );
  return stevenDramaMovies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  const aveScore = movies.reduce((acc, movie) => {
    if (isNaN(movie.score)) {
      return acc + 0 / movies.length;
    } else {
      return acc + movie.score / movies.length;
    }
  }, 0);
  return parseFloat(aveScore.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  const dramaMovies = movies.filter((movie) => movie.genre.includes('Drama'));
  return scoresAverage(dramaMovies);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  return [...movies].sort((a, b) => (a.year > b.year ? 1 : -1));
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  const orderByTitle = movies
    .map((movie) => movie.title)
    .sort((a, b) => a.localeCompare(b));
  return orderByTitle.slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {
  movies = JSON.parse(JSON.stringify(movies));
  const newMoviesArray = movies.map((movie) => {
    const durationSplit = movie.duration.split('h');
    const hours = Number(durationSplit[0] && durationSplit[0]);
    const minutes = Number(durationSplit[1] && durationSplit[1].slice(1, -3));
    totalMinutes = hours * 60 + minutes;
    movie.duration = totalMinutes;
    return movie;
  });
  return newMoviesArray;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(movies) {
  // step 1: create an array of objects that store all movies by Year
  // step 2: create an array of objects that stores {year - average score}, and return the year with the highest average score
  if (!movies?.length) {
    return null;
  }

  const moviesByYear = movies.reduce((moviesByYear, movie) => {
    if (moviesByYear[movie.year]) {
      moviesByYear[movie.year].push(movie);
    } else {
      moviesByYear[movie.year] = [movie];
    }
    return moviesByYear;
  }, {});

  const bestYear = Object.keys(moviesByYear).reduce(
    (bestYear, year) => {
      const aveScore = scoresAverage(moviesByYear[year]);
      if (bestYear.aveScore < aveScore) {
        bestYear = { year: year, aveScore: aveScore };
      }
      return bestYear;
    },
    { year: 0, aveScore: 0 }
  );

  return `The best year was ${bestYear.year} with an average score of ${bestYear.aveScore}`;
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg
  };
}
