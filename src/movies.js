// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 1 with bonus
function getAllDirectors(moviesArray) {
  const set = new Set(moviesArray.map((movie) => movie.director));
  return Array.from(set);
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  const filteredArray = moviesArray.filter(
    (item) => item.genre.includes("Drama") && item.director === "Steven Spielberg"
  );
  return filteredArray.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  } else {
    const sumScore = moviesArray.reduce((acc, cur) => acc + (cur.score || 0), 0);
    return Math.round((sumScore / moviesArray.length) * 100) / 100;
  }
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const dramaArray = moviesArray.filter((item) => item.genre.includes("Drama"));
  return scoresAverage(dramaArray);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const sortedMovies = [...moviesArray];
  return sortedMovies.sort((a, b) => {
    if (a.year !== b.year) {
      return a.year - b.year;
    }
    return a.title.localeCompare(b.title);
  });
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const sortedMovies = [...moviesArray];
  return sortedMovies
    .sort((a, b) => a.title.localeCompare(b.title))
    .slice(0, 20)
    .map((item) => item.title);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {
  return movies.map((movie) => {
    if (movie.duration.includes("h") && movie.duration.includes("min")) {
      // Split the duration into hours and minutes and convert them to numbers
      const [hours, minutes] = movie.duration.split("h ").map((part) => parseInt(part));
      return {
        ...movie,
        duration: hours * 60 + minutes,
      };
    } else if (movie.duration.includes("h")) {
      // Convert the hours to minutes
      const hours = parseInt(movie.duration.match(/(\d+)h/)[1]);
      return {
        ...movie,
        duration: hours * 60,
      };
    } else if (movie.duration.includes("min")) {
      // Extract the minutes and convert them to a number
      const minutes = parseInt(movie.duration.match(/(\d+)min/)[1]);
      return {
        ...movie,
        duration: minutes,
      };
    }
  });
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(movies) {
  if (movies.length === 0) {
    return null;
  }

  // Create an object to store the scores for each year
  const scores = movies.reduce((acc, movie) => {
    if (!acc[movie.year]) {
      acc[movie.year] = { total: 0, count: 0 };
    }
    acc[movie.year].total += movie.score;
    acc[movie.year].count += 1;
    return acc;
  }, {});

  // Calculate the average score for each year
  for (const year in scores) {
    scores[year].avg = scores[year].total / scores[year].count;
  }

  // Find the year with the highest average score
  let bestYear = null;
  let bestScore = 0;
  for (const year in scores) {
    if (scores[year].avg > bestScore) {
      bestYear = year;
      bestScore = scores[year].avg;
    }
  }

  // Return a string with the best year and average score
  return `The best year was ${bestYear} with an average score of ${bestScore}`;
}
