// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  return moviesArray.map((movie) => {
    return movie.director;
  });
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  const moviesOfSs = moviesArray.filter((movie) => {
    return (
      movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
    );
  }).length;

  return moviesOfSs;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  const moviesWhithScore = moviesArray.filter((movie) => {
    return movie.score;
  });
  if (moviesWhithScore.length === 0) {
    return 0;
  }
  let allScores = moviesWhithScore.reduce((acc, movie) => {
    return acc + movie.score;
  }, 0);

  let allScoreAvg = allScores / moviesArray.length;

  return Number(allScoreAvg.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const dramaArr = moviesArray.filter((movie) => {
    return movie.genre.includes("Drama");
  });
  return scoresAverage(dramaArr);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const ordededByYear = [...moviesArray].sort((a, b) => {
    if (a.year === b.year) {
      return a.title.localeCompare(b.title);
    }
    return a.year - b.year;
  });
  return ordededByYear;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const ordededAlph = moviesArray.sort((a, b) => {
    return a.title.localeCompare(b.title);
  });

  const onlyTitle = ordededAlph.map((movie) => {
    return movie.title;
  });

  if (onlyTitle.length > 19) {
    return onlyTitle.filter((movie, i) => {
      return i < 20;
    });
  }

  return onlyTitle;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  const newMoviesArray = moviesArray.map((movie) => {
    return {
      ...movie,
      duration: eval(
        movie.duration.replace("h", "*60").replace("min", "").replace(" ", "+")
      ),
    };
  });
  return newMoviesArray;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
  if (moviesArray.length === 0) {
    return null;
  }
  const moviesByYear = orderByYear(moviesArray);
}
