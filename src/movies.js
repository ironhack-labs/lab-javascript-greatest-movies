// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  const directors = moviesArray.map((movie) => movie.director);
  return directors;
}

// BONUS ITERATION (with the filter for duplicates):
function getAllDirectorsBonus(moviesArray) {
  const directors = moviesArray.reduce((directors, movie) => {
    if (!directors.includes(movie.director)) {
      directors.push(movie.director);
    }
    return directors;
  }, []);
  return directors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  const stevenDramaMovies = moviesArray.filter(
    (movie) =>
      movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
  );
  return stevenDramaMovies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  const scoresSum = moviesArray.reduce(
    (accumulatedScore, movie) =>
      movie.score ? (accumulatedScore += movie.score) : accumulatedScore,
    0
  );

  if (scoresSum === 0) {
    return 0;
  }

  const averageOfScores = scoresSum / moviesArray.length;
  const roundedAverage = Math.round(averageOfScores * 100) / 100;

  return roundedAverage;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const dramaMovies = moviesArray.filter((movie) =>
    movie.genre.includes("Drama")
  );
  const scoresSum = dramaMovies.reduce(
    (accumulatedScore, movie) =>
      movie.score ? (accumulatedScore += movie.score) : accumulatedScore,
    0
  );

  if (scoresSum === 0) {
    return 0;
  }

  const averageOfScores = scoresSum / dramaMovies.length;
  const roundedAverage = Math.round(averageOfScores * 100) / 100;

  return roundedAverage;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  return [...moviesArray].sort((a, b) => {
    if (a.year === b.year) {
      // if year is the same, compare titles instead
      const titleComparison = a.title
        .toLowerCase()
        .localeCompare(b.title.toLowerCase());
      return titleComparison;
    }

    const yearComparison = a.year - b.year;
    return yearComparison;
  });

  return x < y ? -1 : x > y ? 1 : 0;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  return moviesArray
    .map((movie) => movie.title)
    .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))
    .slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  // I tried making a solution that predicts situations in which the duration string only has minutes or
  // only has hours, instead of always counting on the string to have both minutes and hours
  // ej: {duration: "30min"}, {duration: "5h"}
  const fixedMoviesArray = [];

  moviesArray.forEach((movie) => {
    let hours = 0;
    let minutes = 0;
    const movieCopy = { ...movie };

    if (movie.duration) {
      const indexOfHours = movieCopy.duration.indexOf("h");
      if (indexOfHours !== -1) {
        hours = Number(movieCopy.duration.slice(0, indexOfHours));
      }

      const indexOfMinutes = movieCopy.duration.indexOf("min");
      if (indexOfMinutes !== -1) {
        const indexOfHours_ = movieCopy.duration.indexOf("h ");
        if (indexOfHours_ !== -1) {
          minutes = Number(movieCopy.duration.slice(indexOfHours_ + 2, -3));
        } else {
          minutes = Number(movieCopy.duration.slice(0, -2));
        }
      }

      movieCopy.duration = hours * 60 + minutes;
    }

    fixedMoviesArray.push(movieCopy);
  });

  return fixedMoviesArray;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
  const yearScores = {};

  // year: [array of {scores, sum}]
  moviesArray.forEach((movie) => {
    if (yearScores[movie.year]) {
      yearScores[movie.year].scores.push(movie.score);
      yearScores[movie.year].sum += movie.score;
    } else {
      yearScores[movie.year] = { scores: [movie.score], sum: movie.score };
    }
  });

  //   console.log(yearScores);
  let yearWithBiggestAverage = null;
  let biggestAverage = -Infinity;

  for (const year in yearScores) {
    const average = yearScores[year].sum / yearScores[year].scores.length;
    // console.log(average);
    if (average > biggestAverage) {
      biggestAverage = average;
      yearWithBiggestAverage = year;
    } else if (average === biggestAverage) {
      yearWithBiggestAverage =
        year < yearWithBiggestAverage ? year : yearWithBiggestAverage;
    }
  }

  if (yearWithBiggestAverage === null) {
    return null;
  }

  const roundedAverage = Math.round(biggestAverage * 10) / 10;

  return `The best year was ${yearWithBiggestAverage} with an average score of ${roundedAverage}`;
}
