// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  const result = [];
  moviesArray.forEach((movie) => {
    if (!result.includes(movie.director)) {
      result.push(movie.director);
    }
  });
  return result;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  return moviesArray.filter(
    (movie) =>
      movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
  ).length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  return moviesArray.length
    ? parseFloat(
        (
          moviesArray.reduce(
            (acc, current) => acc + (current.score ? current.score : 0),
            0
          ) / moviesArray.length
        ).toFixed(2)
      )
    : 0;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  return scoresAverage(
    moviesArray.filter((movie) => movie.genre.includes("Drama"))
  );
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const newArray = [...moviesArray];

  return newArray.sort((a, b) => {
    return a.year !== b.year ? a.year - b.year : a.title.localeCompare(b.title);
  });
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const newArray = [...moviesArray];

  newArray.sort((a, b) => a.title.localeCompare(b.title));

  return (newArray.length <= 20 ? newArray : newArray.slice(0, 20)).map(
    (movie) => movie.title
  );
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  const newArray = moviesArray.map((movie) => {
    const newMovie = { ...movie };
    const durationArray = newMovie.duration.split(" ");

    let totalMinutes = 0;
    for (const item of durationArray) {
      const number = parseInt(item);
      if (item.includes("h")) {
        totalMinutes += number * 60;
      } else if (item.includes("min")) {
        totalMinutes += number;
      }
    }
    newMovie.duration = totalMinutes;
    return newMovie;
  });
  return newArray;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
  if (moviesArray.length === 0) return null;

  const yearStats = {};
  moviesArray.forEach((movie) => {
    const { year, score } = movie;

    if (yearStats[year]) {
      yearStats[year].totalScore += score;
      yearStats[year].numMovies++;
    } else {
      yearStats[year] = {
        totalScore: score,
        numMovies: 1,
      };
    }
  });

  let bestYear = null;
  let bestAvg = -1;

  for (const year in yearStats) {
    const avg = yearStats[year].totalScore / yearStats[year].numMovies;

    if (avg > bestAvg || (avg === bestAvg && year < bestYear)) {
      bestYear = year;
      bestAvg = avg;
    }
  }

  return `The best year was ${bestYear} with an average score of ${bestAvg}`;
}
