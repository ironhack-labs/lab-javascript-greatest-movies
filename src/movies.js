// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  const directors = moviesArray.map(movie => movie.director);
  return directors.filter((director, index) => directors.indexOf(director) === index);
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  return moviesArray.filter(movie => movie.director === "Steven Spielberg" && movie.genre.includes("Drama")).length;
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
  const dramaMovies = moviesArray.filter(movie => movie.genre.includes("Drama"));
  return scoresAverage(dramaMovies);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  return [...moviesArray].sort((a, b) => {
    if (a.year !== b.year) {
      return a.year - b.year;
    }
    return a.title.localeCompare(b.title);
  });
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  return [...moviesArray]
    .map(movie => movie.title)
    .sort((a, b) => a.localeCompare(b))
    .slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  return moviesArray.map(movie => {
    let duration = 0;
    if (movie.duration) {
      const timeStr = movie.duration.toString();
      let hours = 0;
      let minutes = 0;
      if (timeStr.includes("h")) {
        hours = parseInt(timeStr.split("h")[0]);
      }
      if (timeStr.includes("min")) {
        const minStr = timeStr.includes("h") ? timeStr.split("h")[1].trim() : timeStr;
        minutes = parseInt(minStr.split("min")[0]);
      }
      duration = hours * 60 + minutes;
    }
    return { ...movie, duration };
  });
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
  if (moviesArray.length === 0) return null;
  
  const yearScores = {};
  moviesArray.forEach(movie => {
    if (!yearScores[movie.year]) {
      yearScores[movie.year] = [];
    }
    yearScores[movie.year].push(movie.score || 0);
  });

  let bestYear = null;
  let bestAvg = -1;

  for (const year in yearScores) {
    const scores = yearScores[year];
    const avg = scores.reduce((a, b) => a + b, 0) / scores.length;
    
    if (avg > bestAvg) {
      bestAvg = avg;
      bestYear = year;
    } else if (avg === bestAvg) {
      if (Number(year) < Number(bestYear) || bestYear === null) {
        bestYear = year;
      }
    }
  }

  return `The best year was ${bestYear} with an average score of ${bestAvg}`;
}
