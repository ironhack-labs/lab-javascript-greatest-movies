// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  const directors = movies.map((movie) => movie.director);
  const filteredDirectors = directors.filter(
    (director, i) => !directors.includes(director, i + 1)
  );
  return filteredDirectors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  const dramaSpielbergMovies = movies.filter(
    (eachMovie) =>
      eachMovie.director === 'Steven Spielberg' &&
      eachMovie.genre.includes('Drama')
  );

  return dramaSpielbergMovies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  if (movies.length <= 0) return 0;

  const sumScores = movies.reduce((acc, movie) => {
    if (movie.score) return acc + movie.score;
    else return acc + 0;
  }, 0);

  return Number((sumScores / movies.length).toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  if (movies.length <= 0) return 0;

  const dramaMovies = movies.filter((eachMovie) =>
    eachMovie.genre.includes('Drama')
  );

  if (dramaMovies.length <= 0) return 0;

  const sumScores = dramaMovies.reduce((acc, movie) => {
    if (movie.score) return acc + movie.score;
    else return acc + 0;
  }, 0);

  return Number((sumScores / dramaMovies.length).toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  const moviesCopy = [...movies];

  moviesCopy.sort((a, b) => {
    if (b.year !== a.year) return b.year - a.year;
    else return -a.title.localeCompare(b.title); //negative because we're gonna reverse the sorted array afterwards
  });

  return moviesCopy.reverse();
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  const moviesCopy = [...movies];

  moviesCopy.sort((a, b) => a.title.localeCompare(b.title));

  const orderedMovies = moviesCopy.filter((movie, i, moviesCopy) => {
    return i < 20;
  });

  return orderedMovies.map((movie) => movie.title);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {
  const moviesCopy = movies.map((movie) => {
    let hours = 0;
    let minutes = 0;
    const movieCopy = { ...movie };

    const time = movieCopy.duration.split(/[\shmin]+/);

    hours += Number(time[0]);
    minutes += Number(time[1]);

    movieCopy.duration = hours * 60 + minutes;
    return movieCopy;
  });

  return moviesCopy;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(movies) {
  if (movies.length <= 0) return null;

  const orderedMovies = [];
  const arrayDates = movies.filter(
    (movie, i) => !movies.includes(movie.year, i + 1)
  );
  const dates = arrayDates.map((movie) => movie.year);
  dates.forEach((year) => orderedMovies.push({ year }));
  dates.forEach((el, index) => {
    let tmp = movies.filter((movie) => {
      if (movie.year === dates[index]) return movie;
    });

    orderedMovies[index].score =
      tmp.reduce((acc, movie) => acc + movie.score, 0) / tmp.length;
  });

  orderedMovies.sort((a, b) => {
    if (a.score < b.score) {
      return -1;
    }
    if (a.score > b.score) {
      return 1;
    }
    return 0;
  });

  orderedMovies.reverse(); // we reverse for legibility at the returned string

  return `The best year was ${orderedMovies[0].year} with an average score of ${orderedMovies[0].score}`;
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
