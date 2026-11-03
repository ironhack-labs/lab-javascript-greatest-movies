// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  const directors = moviesArray.map((movie) => movie.director);
  // Bonus: Eliminamos duplicados usando Set
  return [...new Set(directors)];
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  return moviesArray.filter(
    (movie) =>
      movie.director === "Steven Spielberg" && movie.genre.includes("Drama"),
  ).length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) return 0;

  const totalScore = moviesArray.reduce((acc, movie) => {
    return acc + (movie.score || 0);
  }, 0);

  return Number((totalScore / moviesArray.length).toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const dramaMovies = moviesArray.filter((movie) =>
    movie.genre.includes("Drama"),
  );

  if (dramaMovies.length === 0) return 0;

  const totalScore = dramaMovies.reduce((acc, movie) => {
    return acc + (movie.score || 0);
  }, 0);

  return Number((totalScore / dramaMovies.length).toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  // Hacemos una copia para no mutar el array original (restricción del ejercicio)
  const newArray = [...moviesArray];

  return newArray.sort((a, b) => {
    if (a.year !== b.year) {
      return a.year - b.year;
    } else {
      // Si el año es el mismo, ordenamos alfabéticamente por título
      return a.title.localeCompare(b.title);
    }
  });
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const titles = moviesArray.map((movie) => movie.title);

  titles.sort((a, b) => a.localeCompare(b));

  return titles.slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  return moviesArray.map((movie) => {
    let minutes = 0;

    if (movie.duration) {
      if (movie.duration.includes("h")) {
        minutes += parseInt(movie.duration.split("h")[0]) * 60;
      }
      if (movie.duration.includes("min")) {
        const minPart = movie.duration.includes("h")
          ? movie.duration.split("h")[1]
          : movie.duration;
        minutes += parseInt(minPart);
      }
    }

    // Retornamos un nuevo objeto copiando todo el contenido pero sobreescribiendo "duration"
    return {
      ...movie,
      duration: minutes,
    };
  });
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
  if (moviesArray.length === 0) return null;

  const scoresByYear = {};

  // Agrupamos las puntuaciones por año
  moviesArray.forEach((movie) => {
    if (!scoresByYear[movie.year]) {
      scoresByYear[movie.year] = [];
    }
    scoresByYear[movie.year].push(movie.score || 0);
  });

  let bestYear = 0;
  let highestAvg = 0;

  for (const year in scoresByYear) {
    const scores = scoresByYear[year];
    const avg = scores.reduce((acc, score) => acc + score, 0) / scores.length;

    if (avg > highestAvg) {
      highestAvg = avg;
      bestYear = year;
    } else if (avg === highestAvg) {
      // En caso de empate, nos quedamos con el año más antiguo
      if (year < bestYear) {
        bestYear = year;
      }
    }
  }

  return `The best year was ${bestYear} with an average score of ${highestAvg}`;
}
