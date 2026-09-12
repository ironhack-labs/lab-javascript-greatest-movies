// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(moviesArray) {
  const directors = moviesArray.map((movie) => movie.director);
  return directors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  const spielbergDramas = moviesArray.filter((movie) => {
    return (
      movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
    );
  });
  return spielbergDramas.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  }

  const totalScore = moviesArray.reduce((accumulator, movie) => {
    if (movie.score) {
      return accumulator + movie.score;
    } else {
      return accumulator;
    }
  }, 0);

  const average = totalScore / moviesArray.length;
  return Number(average.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const dramaMovies = moviesArray.filter((movie) =>
    movie.genre.includes("Drama"),
  );

  if (dramaMovies.length === 0) {
    return 0;
  }

  const totalScore = dramaMovies.reduce((accumulator, movie) => {
    return movie.score ? accumulator + movie.score : accumulator;
  }, 0);

  const average = totalScore / dramaMovies.length;
  return Number(average.toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const sortedArray = [...moviesArray];

  sortedArray.sort((a, b) => {
    if (a.year === b.year) {
      return a.title.localeCompare(b.title);
    }
    return a.year - b.year;
  });

  return sortedArray;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const sortedMovies = [...moviesArray].sort((a, b) => {
    return a.title.localeCompare(b.title);
  });

  const titlesArray = sortedMovies.map((movie) => movie.title);

  return titlesArray.slice(0, 20);
}
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  return moviesArray.map((movie) => {
    let totalMinutes = 0;
    const durationStr = movie.duration;

    if (durationStr.includes("h")) {
      const hours = parseInt(durationStr.split("h")[0], 10);
      totalMinutes += hours * 60;
    }

    if (durationStr.includes("min")) {
      // Extraemos la parte de los minutos manejando posibles espacios
      const minPart = durationStr.split("h ")[1] || durationStr;
      const minutes = parseInt(minPart, 10);
      totalMinutes += minutes;
    }

    return {
      ...movie,
      duration: totalMinutes,
    };
  });
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
  if (!moviesArray || moviesArray.length === 0) {
    return null;
  }

  const yearsObj = {};

  moviesArray.forEach((movie) => {
    if (!yearsObj[movie.year]) {
      yearsObj[movie.year] = [];
    }
    yearsObj[movie.year].push(movie);
  });

  let bestYear = null;
  let highestAvg = -1;

  for (let year in yearsObj) {
    const moviesInYear = yearsObj[year];

    const totalScore = moviesInYear.reduce(
      (acc, movie) => acc + movie.score,
      0,
    );
    const avg = totalScore / moviesInYear.length;

    if (avg > highestAvg) {
      highestAvg = avg;
      bestYear = year;
    } else if (avg === highestAvg) {
      if (Number(year) < Number(bestYear)) {
        bestYear = year;
      }
    }
  }

  return `The best year was ${bestYear} with an average score of ${highestAvg}`;
}
