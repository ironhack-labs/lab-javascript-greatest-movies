// const { movies } = require("./data");

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(moviesArray) {
  //console.log(moviesArray);
  const allDirectors = moviesArray.map(function (movie) {
    return movie.director;
  });
  return allDirectors;
}

// console.log(getAllDirectors(movies));

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  if (moviesArray === 0) return 0;
  const spielbergDramas = moviesArray.filter(function (movie) {
    return (
      movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
    );
  });
  return spielbergDramas.length;
}

// console.log(howManyMovies(movies));

// Iteration 3: All scores average - Get the average of all scores with 2 decimals

function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) return 0;

  const averageAll = moviesArray.reduce(function (sum, movie) {
    if (movie.score == undefined) {
      return sum;
    } else {
      return sum + movie.score;
    }
  }, 0);

  const averageMath = averageAll / moviesArray.length;
  return Number(averageMath.toFixed(2));
}

// console.log(scoresAverage(movies));

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  if (moviesArray === 0) return 0;

  const drama = moviesArray.filter(function (movie) {
    return movie.genre.includes("Drama");
  });

  if (drama.length === 0) return 0;

  const sumScoreDrama = drama.reduce(function (sum, movie) {
    if (movie.score == undefined) {
      return sum;
    } else {
      return sum + movie.score;
    }
  }, 0);
  const averageDrama = sumScoreDrama / drama.length;
  return Number(averageDrama.toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const sortedMoviesArray = [...moviesArray];

  sortedMoviesArray.sort(function (a, b) {
    if (a.year === b.year) {
      const aTitleToUpperCase = a.title.toUpperCase();
      const bTitleToUpperCase = b.title.toUpperCase();
      if (aTitleToUpperCase < bTitleToUpperCase) {
        return -1;
      }
      if (aTitleToUpperCase > bTitleToUpperCase) {
        return 1;
      }
      return 0;
    }
    return a.year - b.year;
  });
  //console.log(sortedMoviesArray);
  return sortedMoviesArray;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const sortedAlphaMoviesArray = [...moviesArray];

  sortedAlphaMoviesArray.sort(function (a, b) {
    const aTitleToUpperCase = a.title.toUpperCase();
    const bTitleToUpperCase = b.title.toUpperCase();
    if (aTitleToUpperCase < bTitleToUpperCase) return -1;
    if (aTitleToUpperCase > bTitleToUpperCase) return 1;
    return 0;
  });

  const sortedAlphaTitlesArray = sortedAlphaMoviesArray.map(function (movie) {
    return movie.title;
  });

  const twentyTitlesArray = sortedAlphaTitlesArray.slice(0, 20);
  console.log(twentyTitlesArray);
  return twentyTitlesArray;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
