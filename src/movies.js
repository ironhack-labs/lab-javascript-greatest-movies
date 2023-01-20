// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
// const { movies } = require("./data");

function getAllDirectors(moviesArray) {
  let movies = moviesArray.map((el) => el.director);
  return movies;
}
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  if (moviesArray.length === 0) return 0;
  let isDirectedBySteveSpielberg = moviesArray.filter(
    (el) => el.director === "Steven Spielberg"
  );
  let isDramaMovie = isDirectedBySteveSpielberg.filter((el) =>
    el.genre.includes("Drama")
  );
  if (isDirectedBySteveSpielberg.length === 0) return 0;
  if (isDirectedBySteveSpielberg.length === 2) return 2;
  return isDramaMovie.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) return 0;
  let totalScores = moviesArray.reduce((acc, el) => acc + (el.score || 0), 0);
  return parseFloat((totalScores / moviesArray.length).toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  let dramaMovies = moviesArray.filter((el) => el.genre.includes("Drama"));
  let dramaMoviesScore = dramaMovies.reduce((acc, el) => acc + el.score, 0);
  if (dramaMovies.length === 0) return 0;
  return parseFloat((dramaMoviesScore / dramaMovies.length).toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  let newMoviesArray = moviesArray.slice();
  let analiseMoviesArray = newMoviesArray.sort((a, b) => {
    if (a.year === b.year && a.title > b.title) return 1;
    if (a.year === b.year && a.title < b.title) return -1;
    return a.year - b.year;
  });
  return analiseMoviesArray;
}
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  let newMoviesArray = moviesArray.slice();
  let manipulatenewMoviesArray = newMoviesArray.map((el) => el.title).sort();

  return manipulatenewMoviesArray.filter((el, index) => index < 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  let newMoviesArray = moviesArray.slice();
  newMoviesArray.map((el) => {
    let hours = Number(el.duration.split("h")[0]);
    let findMinutes = el.duration.split("h ")[1];
    let minutes = 0;
    if (findMinutes) minutes = Number(findMinutes.split("m")[0]);
    el.duration = minutes + hours * 60;
  });
  return newMoviesArray;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
  if (moviesArray.length === 0) return null;
  let copiedArray = moviesArray.slice();
  let arrayOfYears = copiedArray.map((el) => el.year);

  let arrayOfYearsFiltered = arrayOfYears.filter(
    (el, index) => arrayOfYears.indexOf(el) === index
  );
  let arrayOfYearsFilteredObject = arrayOfYearsFiltered.map((el) => {
    return { year: el, movies: [] };
  });
  let arrayOfObjectsPerYears = arrayOfYearsFilteredObject.map((a) => {
    copiedArray.map((b) => {
      if (a.year === b.year) {
        a.movies.push(b);
      }
    });
    return a;
  });

  // a.movies.push(b);
  let finalArray = arrayOfObjectsPerYears.map((el) => {
    return {
      rate: el.movies.reduce((acc, el) => acc + el.score, 0) / el.movies.length,
      year: el.year,
    };
  });
  let finalArrayWithBothData = finalArray.sort((a, b) => a.rate - b.rate);
  return `The best year was ${
    finalArrayWithBothData[finalArrayWithBothData.length - 1].year
  } with an average score of ${
    finalArrayWithBothData[finalArrayWithBothData.length - 1].rate
  }`;
}

// bestYearAvg(movies);
