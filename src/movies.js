// The `movies` array from the file `src/data.js`.

// console.log('movies: ', movies);

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  const allDirectors = movies.map((item) => {
    return item.director;
  });
  const allDirectorsNoDuplicates = [];
  for (let director of allDirectors) {
    if (!allDirectorsNoDuplicates.includes(director)) {
      allDirectorsNoDuplicates.push(director);
    }
  }
  return allDirectorsNoDuplicates;
}

// console.log(getAllDirectors(movies));

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  const SteveSpielbergDrama = movies.filter(function (movie) {
    stevenSpielberg = movie.director === 'Steven Spielberg';
    drama = movie.genre.includes('Drama');
    return stevenSpielberg && drama;
  });
  return SteveSpielbergDrama.length;
}

// console.log(howManyMovies(movies));

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  if (movies.length === 0) {
    return 0;
  }
  const moviesWithSocre = movies.map((movie) => {
    if (!movie.socre) {
      return movie;
    }
  });
  const avg = moviesWithSocre.reduce(function (prev, current) {
    return prev + (current.score || 0);
  }, 0);
  return (avg / moviesWithSocre.length).toFixed(2) * 1;
}

// console.log(scoresAverage(movies));

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  const dramaMovies = movies.filter(function (movie) {
    return movie.genre.includes('Drama');
  });
  if (dramaMovies.length === 0) {
    return 0;
  }

  const avgDrama = dramaMovies.reduce(function (prev, current) {
    return prev + current.score;
  }, 0);

  return (avgDrama / dramaMovies.length).toFixed(2) * 1;
}

// console.log(dramaMoviesScore(movies));

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
// function orderByYear(movies) {
//   orderByYearMovies = structuredClone(movies);
//   orderByYearMovies.sort(function (a, b) {
//     if (a.year === b.year) {
//       return a.title.localeCompare(b.title);
//     }
//     return a.year - b.year;
//   });
//   return orderByYearMovies;
// }

function orderByYear(movies) {
  const orderByYearMovies = JSON.parse(JSON.stringify(movies));
  orderByYearMovies.sort(function (a, b) {
    if (a.year === b.year) {
      return a.title.localeCompare(b.title);
    }
    return a.year - b.year;
  });
  return orderByYearMovies;
}

// console.log(orderByYear(movies));

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  orderAlphaMovies = JSON.parse(JSON.stringify(movies));
  orderAlphaMovies.sort(function (a, b) {
    return a.title.localeCompare(b.title);
  });
  const justTitleArray = orderAlphaMovies.map((movie) => {
    return movie.title;
  });
  const justTitleArrayFirst20 = justTitleArray.filter((movie, index) => {
    return index < 20;
  });

  return justTitleArrayFirst20;
}

// console.log(orderAlphabetically(movies));

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}

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
