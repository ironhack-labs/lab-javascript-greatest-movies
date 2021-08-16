// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

const movies = require('./data');

function getAllDirectors(films) {
  const directors = new Set(films.map((film) => film.director));
  return [...directors];
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(films) {
  const spielbergDrama = films
    .filter((film) => film.director === 'Steven Spielberg')
    .filter((film) => film.genre.includes('Drama'));

  return spielbergDrama.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(films) {
  if (films.length === 0) return 0;

  const totalScore = films
    .map((film) => {
      if (!film.score) return 0;
      else return film.score;
    })
    .reduce((current, n) => current + n);

  return Number((totalScore / films.length).toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(films) {
  if (films.length === 0) return 0;

  const drama = films.filter((film) => film.genre.includes('Drama'));

  if (drama.length === 0) return 0;

  const totalScoreDrama = drama
    .map((film) => {
      if (!film.score) return 0;
      else return film.score;
    })
    .reduce((current, n) => current + n);

  return Number((totalScoreDrama / drama.length).toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(films) {
  const filmCopy = [...films];
  const sortedByYear = filmCopy.sort((a, b) => {
    if (a.year > b.year) return 1;
    if (a.year < b.year) return -1;
    if (a.title > b.title) return 1;
    if (a.title < b.title) return -1;
    return 0;
  });

  return sortedByYear;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(films) {
  const sortedTitles = films
    .map((film) => film.title)
    .sort((a, b) => {
      if (a > b) return 1;
      if (a < b) return -1;
      return 0;
    });

  return sortedTitles.filter((film, i) => i < 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
// too much crazy stuff down here

function turnHoursToMinutes(films) {
  const duration = films.map((film) => {
    const filmDuration = film.duration.split(' ').map((time) => {
      if (time.includes('h')) {
        return Number(time.replace('h', '')) * 60;
      }

      if (time.includes('min')) {
        return Number(time.replace('min', ''));
      }
      return 0;
    });

    return {
      ...film,
      duration: filmDuration.reduce((acc, value) => acc + value)
    };
  });

  return duration;
}

// This was my initial idea on how to solve the above

// function turnHoursToMinutes(films) {
//   const filmsCopy = [...films];

//   const changeDuration = filmsCopy.map((film) => {
//     film.duration = film.duration.split(' ');

//     if (film.duration[0].includes('h'))
//       film.duration[0] = Number(film.duration[0].replace('h', '')) * 60;
//     if (film.duration[1])
//       if (film.duration[1].includes('min'))
//         film.duration[1] = Number(film.duration[1].replace('min', ''));

//     film.duration = film.duration[0] + film.duration[1];

//     return film;
//   });

//   return changeDuration;
// }

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(films) {
  if (films.length === 0) return null;

  // I need to investigate about this stuff below
  // const sameYear = films.reduce((acc, n) => {
  //   acc[n.year] = acc[n.year] || [];
  //   acc[n.year].push(n);
  //   return r;
  // }, Object.create(null));
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
