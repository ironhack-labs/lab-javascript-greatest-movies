//const movies = require('./data'); //zum Importieren

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(moviesArray) {
  return [...new Set(moviesArray.map((movie) => movie.director))];
}

//2) function how many
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  let count = 0;
  moviesArray.forEach((movie) => {
    movie.director = movie.director.toUpperCase();
    movie.genre = movie.genre.map((g) => g.toUpperCase());

    if (
      movie.director === `STEVEN SPIELBERG` &&
      movie.genre.includes(`DRAMA`)
    ) {
      count++;
    }
  });
  return count;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) return 0;
  const sum = moviesArray.reduce((acc, movie) => {
    if (typeof movie.score !== "number") return acc;
    return acc + movie.score;
  }, 0);

  const average = sum / moviesArray.length;
  return Number(average.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  let sum = 0;
  let count = 0;
  moviesArray.forEach((movie) => {
    if (
      Array.isArray(movie.genre) &&
      movie.genre.includes("Drama") &&
      typeof movie.score === "number"
    ) {
      sum += movie.score;
      count++;
    }
  });

  if (count === 0) {
    return 0;
  }

  return Number((sum / count).toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const moviesCopy = [...moviesArray];
  moviesCopy.sort((a, b) => {
    if (a.year === b.year) {
      return a.title.localeCompare(b.title);
    }
    return a.year - b.year;
  });
  return moviesCopy;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const sorted20Movies = [...moviesArray]
    .sort((a, b) => a.title.localeCompare(b.title))
    .slice(0, 20)
    .map((movie) => movie.title);
  console.log(
    `Hier die ersten 20 Titel des alphabetisch sortierten Film-Arrays: ${sorted20Movies.join("\n")}`,
  );
  return sorted20Movies;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  return moviesArray.map((movie) => {
    const duration = movie.duration;
    let hours = 0;
    let minutes = 0;

    //Stunden finden
    // hourmatch zB = ["2h", "2"]
    const hourMatch = duration.match(/(\d+)h/); //gesucht eine Zahl direkt vor "h"
    if (hourMatch) {
      hours = Number(hourMatch[1]);
    }

    // Minuten finden
    const minMatch = duration.match(/(\d+)min/);
    if (minMatch) {
      minutes = Number(minMatch[1]);
    }
    const totalMinutes = hours * 60 + minutes;
    return {
      ...movie,
      duration: totalMinutes,
    };
  });
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(movies) {
  if (!movies || movies.length === 0) {
    return null;
  }

  // Scores nach Jahr gruppieren
  const yearScores = {};
  movies.forEach((movie) => {
    if (!yearScores[movie.year]) {
      yearScores[movie.year] = [];
    }

    yearScores[movie.year].push(movie.score);
  });

  // Durchschnitt pro Jahr berechnen und bestes Jahr finden
  let bestYear = null;
  let bestAvg = 0;
  for (const year in yearScores) {
    const scores = yearScores[year];
    const avg = scores.reduce((sum, s) => sum + s, 0) / scores.length;

    if (avg > bestAvg || (avg === bestAvg && Number(year) < Number(bestYear))) {
      bestAvg = avg;
      bestYear = year;
    }
  }

  const rounded = Math.round(bestAvg * 100) / 100;
  return `The best year was ${bestYear} with an average score of ${rounded}`;
}
