const movies = require('../src/data');
// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  let directors = movies.map((movie) => {
    return movie.director;
  });
  let uniqueDirectors = [...new Set(directors)];
  return uniqueDirectors;
}

// getAllDirectors(movies);
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  let ssMovies = movies.filter((movie) => {
    if (
      movie.director === 'Steven Spielberg' &&
      movie.genre.includes('Drama')
    ) {
      return movie;
    }
  });
  return ssMovies.length;
}

// howManyMovies(movies);
// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  if (!movies || !movies.length) return 0;
  let scoreAvg = movies.reduce((total, movie) => {
    if (movie && movie.score) {
      return total + movie.score;
    } else {
      return total;
    }
  }, 0);
  return Math.round((scoreAvg / movies.length) * 100) / 100;
}
// scoresAverage([{ score: 6 }, { score: '' }, {}]);
// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  if (!movies || !movies.length) return 0;
  let totalOfDramas =
    movies.filter((movie) => {
      if (movie.genre.includes('Drama')) {
        return movie;
      }
    }) || [];
  if (!totalOfDramas.length) return 0;
  let scoreAvg = totalOfDramas.reduce((total, movie) => {
    if (movie && movie.score && movie.genre.includes('Drama')) {
      return total + movie.score;
    } else {
      return total;
    }
  }, 0);
  return Math.round((scoreAvg / totalOfDramas.length) * 100) / 100;
}

// dramaMoviesScore([
//   { genre: ['Action'], score: 8 },
//   { genre: ['Romance'], score: 9 },
//   { genre: ['Sci-Fi'], score: 7 }
// ]);
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  if (!movies || !movies.length) return 0;
  let order = movies.sort((a, b) => {
    if (a.year === b.year) {
      if (a.title < b.title) {
        return -1;
      } else if (a.title > b.title) {
        return 1;
      } else {
        return 0;
      }
    } else {
      return a.year - b.year;
    }
  });

  return order;
}

// orderByYear([
//   { title: 'abc', year: 2002 },
//   { title: 'bac', year: 1982 },
//   { title: 'aab', year: 1982 }
// ]);

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  let order = movies.sort((a, b) => a.title - b.title);
  let nameOfMovies = order.map((movie) => {
    return movie.title;
  });
  if (nameOfMovies.length >= 20) {
    let sort = nameOfMovies.sort().splice(0, 20);
    return sort;
  } else {
    return nameOfMovies.sort();
  }
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {
  const minutesCalc = (duration) => {
    let minutes = Number(duration.split('min')[0].split(' ')[1] || 0);
    let hoursMinutes = Number(duration.split('h')[0].split(' ') || 0) * 60;

    return minutes + hoursMinutes;
  };

  let minutesTotal = movies.map((movie) => {
    return { ...movie, duration: minutesCalc(movie.duration) };
  });

  // let total = minutesTotal.reduce((total, movie) => total + movie, 0);
  return minutesTotal;
}

// turnHoursToMinutes(movies);

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(movies) {
  if (!movies || !movies.length) return null;

  let years = movies.map((movie) => movie.year);

  let scoreMax = 0;
  let yearMax = 0;
  years.forEach((year) => {
    arrAux = movies.filter((movie) => {
      if (movie.year === year) {
        return movie;
      }
    });
    let score = scoresAverage(arrAux);
    if (score >= scoreMax) {
      scoreMax = score;
      yearMax = arrAux[0].year;
    }
  });

  return `The best year was ${yearMax} with an average score of ${scoreMax}`;
}

// bestYearAvg(movies);

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
