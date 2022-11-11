// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  const directors = {};

  return moviesArray
    .map((movie) => movie.director)
    .filter((director) => {
      if (!directors[director]) {
        directors[director] = true;

        return true;
      } else {
        return false;
      }
    });
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  return moviesArray.filter((movie) => {
    return (
      movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
    );
  }).length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (!moviesArray.length) return 0;

  return +(
    moviesArray.reduce(
      (total, curr) => total + (curr.score ? curr.score : 0),
      0
    ) / moviesArray.length
  ).toFixed(2);
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const dramaMovies = moviesArray.filter((movie) =>
    movie.genre.includes("Drama")
  );

  if (!dramaMovies.length) return 0;

  const avgScore =
    dramaMovies.reduce((total, curr) => {
      return total + curr.score;
    }, 0) / dramaMovies.length;

  return +avgScore.toFixed(2);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  return [...moviesArray].sort((a, b) =>
    a.year === b.year ? a.title.localeCompare(b.title) : a.year - b.year
  );
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const arrSortedAlphabetically = moviesArray
    .map((movie) => movie.title)
    .sort((a, b) => a.localeCompare(b));

  return arrSortedAlphabetically.length < 20
    ? arrSortedAlphabetically
    : arrSortedAlphabetically.slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  return moviesArray.map((movie) => {
    const splitHoursAndMins = movie.duration.replace(/[a-z]/gi, "").split(" ");

    const duration =
      +splitHoursAndMins[0] * 60 +
      (splitHoursAndMins[1] ? +splitHoursAndMins[1] : 0);

    return { ...movie, duration };
  });
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
  if (!moviesArray.length) return null;

  const scoresPerYear = {};

  for (const movie of moviesArray) {
    if (!scoresPerYear[movie.year]) {
      scoresPerYear[movie.year] = [movie.score];
    } else {
      scoresPerYear[movie.year].push(movie.score);
    }
  }

  let highestAvg = 0;
  let bestYear;

  for (const year in scoresPerYear) {
    const avgForYear =
      scoresPerYear[year].reduce((total, curr) => total + curr, 0) /
      scoresPerYear[year].length;

    if (avgForYear > highestAvg) {
      highestAvg = avgForYear;
      bestYear = year;
    }
  }

  return `The best year was ${bestYear} with an average score of ${highestAvg}`;
}

//
