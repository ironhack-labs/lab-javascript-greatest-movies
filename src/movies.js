// The `movies` array from the file `src/data.js`.

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(arr) {
  const directors = arr.map((el) => el.director);
  return directors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(arr) {
  let moviesBySteven = arr.filter(
    (el) => el.director === 'Steven Spielberg' && el.genre.includes('Drama')
  );
  return moviesBySteven.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(arr) {
  if (arr.length === 0) {
    return 0;
  }
  const allScores = arr.reduce((previous, current) => {
    if (typeof current.score !== 'number') {
      return previous;
    } else {
      return previous + current.score;
    }
  }, 0);

  return +(allScores / arr.length).toFixed(2);
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(arr) {
  const dramaMovies = arr.filter((el) => el.genre.includes('Drama'));
  if (dramaMovies.length === 0) {
    return 0;
  }
  const avgDramas = dramaMovies.reduce((prev, curr) => {
    return prev + curr.score;
  }, 0);
  return +(avgDramas / dramaMovies.length).toFixed(2);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arr) {
  const moviesSorted = arr.slice(0).sort((prev, curr) => {
    if (prev.year > curr.year) {
      return 1;
    } else if (curr.year > prev.year) {
      return -1;
    } else if (prev.title > curr.title) {
      return 1;
    } else {
      return -1;
    }
  });
  return moviesSorted;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arr) {
  const titles = arr.map((el) => el.title);

  titles.sort();

  return titles.slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(arr) {
  const output = arr.map((movie) => {
    const currentDuration = movie.duration;
    const currentDurationArr = currentDuration.split(' ');
    const nums = currentDurationArr.map((el) => +el.replace(/\D/g, ''));
    const hoursToMinutes = nums[0] * 60;
    const minutes = nums[1] ? nums[1] : 0;
    const totalMinutes = hoursToMinutes + minutes;

    return {
      ...movie,
      duration: totalMinutes
    };
  });
  return output;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(arr) {
  if (arr.length === 0) {
    return null;
  }

  const allYearsData = {};
  arr.map((movie) => {
    if (allYearsData[movie.year]) {
      allYearsData[movie.year].push(movie.score);
    } else {
      allYearsData[movie.year] = [movie.score];
    }
  });

  let bestYear = '';
  let bestYearAverage = 0;
  for (const [year, scores] of Object.entries(allYearsData)) {
    const sum = scores.reduce((prev, curr) => prev + curr, 0);
    const average = sum / scores.length;
    if (average > bestYearAverage) {
      bestYearAverage = average;
      bestYear = year;
    }
  }

  return `The best year was ${bestYear} with an average score of ${bestYearAverage}`;
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
