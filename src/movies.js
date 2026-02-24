// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  const directors = moviesArray.map((movie) => {
    return movie.director;
  });
  return [...new Set(directors)];
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  const dramaMovies = moviesArray.filter((movie) => {
    return (
      movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
    );
  });
  return dramaMovies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  }

  const sum = moviesArray.reduce((acc, movie) => {
    if (movie.score) {
      return acc + movie.score;
    } else {
      return acc;
    }
  }, 0);

  return Number((sum / moviesArray.length).toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const dramaMovies = moviesArray.filter((movie) => {
    return movie.genre.includes("Drama") && movie.score;
  });

  if (dramaMovies.length === 0) {
    return 0;
  }

  const sum = dramaMovies.reduce((acc, movie) => acc + movie.score, 0);

  return Number((sum / dramaMovies.length).toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const sortedMovies = [...moviesArray].sort((a, b) => {
    if (a.year === b.year) {
      return a.title.localeCompare(b.title);
    }
    return a.year - b.year;
  });
  return sortedMovies;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const sortedMovies = [...moviesArray].sort((a, b) => {
    return a.title.localeCompare(b.title);
  });
  const first20Movies = sortedMovies.slice(0, 20);
  return first20Movies.map((movie) => movie.title);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  return moviesArray.map((movie) => {
    const duration = movie.duration;
    const hours = parseInt(duration.split("h")[0]) || 0;
    const minutes = parseInt(duration.split("m")[0].split("h")[1]) || 0;
    return {
      ...movie,
      duration: hours * 60 + minutes,
    };
  });
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
  if (moviesArray.length === 0) {
    return null;
  }

  const yearScores = {};

  moviesArray.forEach((movie) => {
    if (!yearScores[movie.year]) {
      yearScores[movie.year] = { total: 0, count: 0 };
    }
    yearScores[movie.year].total += movie.score || 0;
    yearScores[movie.year].count += 1;
  });

  let bestYear = null;
  let bestAvg = -Infinity;

  for (const year in yearScores) {
    const avg = yearScores[year].total / yearScores[year].count;

    if (avg > bestAvg || (avg === bestAvg && year < bestYear)) {
      bestAvg = avg;
      bestYear = year;
    }
  }

  return `The best year was ${bestYear} with an average score of ${bestAvg.toFixed(2)}`;
}
