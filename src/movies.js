// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(moviesArray) {
  const allDirectors = moviesArray.map((movie) => {
    return movie.director;
  });
  return allDirectors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  }

  const filterMovies = moviesArray.filter((movies) => {
    return (
      movies.director === "Steven Spielberg" && movies.genre.includes(`Drama`)
    );
  });

  return filterMovies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  }
  const averageScore = moviesArray.map((movie) => {
    return movie.score;
  });

  const sumScores = averageScore.reduce((acc, score) => {
    if (score) {
      return acc + score;
    } else {
      return acc;
    }
  }, 0);

  const mediaTotal = sumScores / moviesArray.length;
  return Number(mediaTotal.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  }

  const onlyDramas = moviesArray.filter((movie) =>
    movie.genre.includes("Drama")
  );

  if (onlyDramas.length === 0) {
    return 0;
  }

  const sumScoresDrama = onlyDramas.reduce((acc, movie) => {
    return acc + movie.score;
  }, 0);

  const average = sumScoresDrama / onlyDramas.length;

  return Number(average.toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  return [...moviesArray].sort((a, b) => {
    if (a.year === b.year) {
      return a.title.localeCompare(b.title);
    }
    return a.year - b.year;
  });
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const newMOviesArray = [...moviesArray];

  newMOviesArray.sort((a, b) => a.title.localeCompare(b.title));
  const titlesArray = newMOviesArray.slice(0, 20).map((movie) => movie.title);
  return titlesArray;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
