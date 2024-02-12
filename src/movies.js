// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  const allDirectors = moviesArray.map((movie) => movie.director);

  return allDirectors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  const stevenMovies = moviesArray.filter((movie) => {
    return (
      movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
    );
  });

  return stevenMovies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  }

  const scoresSum = moviesArray.reduce((acc, movie) => {
    if (movie.score) {
      return acc + movie.score;
    }
    return acc;
  }, 0);

  const avg = scoresSum / moviesArray.length;
  return Number(avg.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const dramaMoviesArr = moviesArray.filter((movie) => {
    return movie.genre.includes("Drama");
  });
  return scoresAverage(dramaMoviesArr);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const sortedArr = [...moviesArray].sort((a, b) => {
    if (a.year === b.year) {
      return a.title.localeCompare(b.title);
    }

    return a.year - b.year;
  });

  return sortedArr;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(moviesArray) {
  const sortedByTitle = [...moviesArray].sort((a, b) => {
    return a.title.localeCompare(b.title);
  });

  const onlyTitlesArray = sortedByTitle.map((movie) => {
    return movie.title;
  });

  const slicedArray = onlyTitlesArray.slice(0, 20);

  return slicedArray;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
