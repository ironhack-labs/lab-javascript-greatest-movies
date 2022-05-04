// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.

const movies = require('./data');

// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(arr) {
  const allDirectors = arr.map((currentMovies) => currentMovies.director);
  const directors = allDirectors.filter(
    (director, index) => allDirectors.indexOf(director) == index
  );
  return directors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(arr) {
  const spielberg = arr.filter((currentMovies) => {
    return (
      currentMovies.director === 'Steven Spielberg' &&
      currentMovies.genre.includes('Drama')
    );
  });
  return spielberg.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(arr) {
  const scores = arr.reduce((acc, movie, index, src) => {
    if (!movie.score) {
      movie.score = 0;
    }
    return acc + movie.score;
  }, 0);
  let average;
  arr.length === 0 ? (average = 0) : (average = scores / arr.length);
  return parseFloat(average.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(arrDrama) {
  const dramaMovies = arrDrama.filter((movie) => movie.genre.includes('Drama'));
  return scoresAverage(dramaMovies);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arrYear) {
  clone = [...arrYear];
  return clone.sort((a, b) => {
    const year =
      a.year === b.year ? a.title.localeCompare(b.title) : a.year - b.year;
    return year;
  });
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arrMovies) {
  return arrMovies
    .map((movie) => movie.title)
    .sort((a, b) => a.localeCompare(b))
    .slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(arrMovies) {
  clone = [...arrMovies];
  return clone.map((movie) => {
    const time = movie.duration.split(' ');
    let hours;
    let minutes;
    if (time.length === 2) {
      hours = time[0].replace(/[^0-9]/g, '');
      minutes = time[1].replace(/[^0-9]/g, '');
    } else {
      hours = '0';
      minutes = time[0].replace(/[^0-9]/g, '');
    }
    movie.duration = Number(hours) * 60 + Number(minutes);
    return movie;
  });
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average

function bestYearAvg(arr) {
  let yearsAverage = {};
  let arrYear = arr.reduce((acc, movie) => {
    if (acc[movie.year]) {
      acc[movie.year].push(movie);
    } else {
      Object.assign(acc, { [movie.year]: [movie] });
    }
    return acc;
  }, {});

  const allYears = Object.keys(arrYear);

  allYears.map((year) => {
    let averageYear = arrYear[year].reduce((acc, movie, index, src) => {
      if (index === sourceArray.length - 1) {
        acc += movie.score;

        return acc / sourceArray.length;
      }

      return acc + movie.score;
    });
    yearsAverage[year] = parseFloat(averageYear.toFixed(2));
  });
  let rakingByYear = Object.entries(yearsAverage).sort(
    (a, b) => b[year] - a[year]
  );

  return `The best year was ${rakingByYear[0]} with an average rate of ${rakingByYear[0][year]}`;
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
