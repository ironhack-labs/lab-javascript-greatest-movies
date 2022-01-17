// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(arrOfmovies = []) {
  return arrOfmovies.map((movie) => movie.director);
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(arrOfmovies = []) {
  if (arrOfmovies.length === 0) {
    return 0;
  }
  const allMovies = arrOfmovies.filter(
    (movie) => movie.director === 'Steven Spielberg'
  );
  return allMovies.filter((movie) => movie.genre.includes('Drama')).length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(arrOfmovies = []) {
  if (arrOfmovies.length === 0) {
    return 0;
  } else if (arrOfmovies.length === 1) {
    return;
  }

  const scores = arrOfmovies.reduce((acc, movie) => {
    if (movie.score === undefined) {
      return acc;
    } else {
      return acc + movie.score;
    }
  }, 0);
  const scoresAvg = scores / arrOfmovies.length;

  return Number(scoresAvg.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(arrOfmovies = []) {
  if (arrOfmovies.length === 0) {
    return 0;
  }
  let dramaMovies = arrOfmovies.filter((movie) =>
    movie.genre.includes('Drama')
  );
  if (dramaMovies.length === 0) {
    return 0;
  }
  let dramaRateAvg = dramaMovies.reduce(
    (acc, current) => acc + current.score,
    0
  );

  return Number((dramaRateAvg / dramaMovies.length).toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arrOfmovies = []) {
  if (arrOfmovies.length === 0) {
    return 0;
  }

  let newMovies = JSON.parse(JSON.stringify(arrOfmovies));

  return newMovies.sort(function (a, b) {
    if (a.year === b.year) {
      if (a.title < b.title) return -1; //  1 here (instead of -1 for ASC)
      if (a.title > b.title) return 1; // -1 here (instead of  1 for ASC)
      if (a.title === 0) return 0;
    } else {
      return a.year - b.year;
    }
  });
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arrOfmovies = []) {
  if (arrOfmovies.length === 0) {
    return [];
  }

  const sortMovies = arrOfmovies.map((movie) => movie.title).sort();

  if (sortMovies.length > 20) {
    return sortMovies.splice(0, 20);
  } else {
    return sortMovies;
  }
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(arrOfmovies = []) {
  if (arrOfmovies.length === 0) {
    return 0;
  }
  let newMovies = JSON.parse(JSON.stringify(arrOfmovies));

  newMovies.map(function (movie) {
    const hoursToMinutes = Number(movie.duration[0]) * 60;
    const minutesFirstIndex = movie.duration.indexOf(' ');
    const minutesSecondIndex = movie.duration.indexOf('m');
    const minutes = Number(
      movie.duration.slice(minutesFirstIndex, minutesSecondIndex)
    );
    console.log({ ...movie, duration: hoursToMinutes + minutes });

    return { ...movie, duration: hoursToMinutes + minutes };
  });
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(arrOfmovies = []) {
  if (arrOfmovies.length === 0) {
    return 0;
  }
  arrOfmovies.map();
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
