// Iteration 1: All directors? - Get the array of all directors.

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  return moviesArray.map(movie => movie.director);
}
console.log(howManyMovies(movies));

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  }
  const stevenDramaMovies = moviesArray.filter(movie => {
    return (
      movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')
    );
  });
  return stevenDramaMovies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  }
  const sum = moviesArray.reduce((acc, currMovie) => {
    if (currMovie.score) {
      return acc + currMovie.score;
    } else {
      return acc;
    }
  }, 0);
  const average = sum / moviesArray.length;
  const roundedAverage = Number(average.toFixed(2));
  return roundedAverage;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  }
  const dramaMovies = moviesArray.filter(movie =>
    movie.genre.includes('Drama')
  );
  if (dramaMovies.length === 0) {
    return 0;
  }
  const sum = dramaMovies.reduce((acc, currMovie) => {
    return acc + currMovie.score;
  }, 0);
  const average = sum / dramaMovies.length;
  const roundedAverage = Number(average.toFixed(2));
  return roundedAverage;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const copyArray = [...moviesArray];
  copyArray.sort((a, b) => {
    if (a.year === b.year) {
      return a.title.localeCompare(b.title);
    } else {
      return a.year - b.year;
    }
  });
  return copyArray;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const titleArray = moviesArray.map(movie => movie.title);
  const copyArray = [...titleArray];
  copyArray.sort((a, b) => a.localeCompare(b));
  if (copyArray.length > 20) {
    return copyArray.slice(0, 20);
  } else {
    return copyArray;
  }
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  const movieDurations = moviesArray.map(movie => {
    const duration = movie.duration;
    const parts = duration.split(' ');
    let hours = 0;
    let minutes = 0;
    for (const part of parts) {
      if (part.includes('h')) {
        hours = parseInt(part.replace('h', ''));
      } else if (part.includes('min')) {
        minutes = parseInt(part.replace('min', ''));
      }
    }
    return { ...movie, duration: hours * 60 + minutes };
  });
  const copyArray = [...movieDurations];
  copyArray.sort((a, b) => a.duration - b.duration);
  return copyArray;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
  if (moviesArray.length === 0) {
    return null;
  }
  const yearStats = {};

  moviesArray.forEach(movie => {
    if (movie.year && movie.score) {
      if (!yearStats[movie.year]) {
        yearStats[movie.year] = { totalScore: 0, count: 0 };
      }
      yearStats[movie.year].totalScore += movie.score;
      yearStats[movie.year].count++;
    }
  });

  let bestYear = null;
  let bestAverage = 0;

  for (const year in yearStats) {
    const average = yearStats[year].totalScore / yearStats[year].count;
    if (average > bestAverage || (average === bestAverage && year < bestYear)) {
      bestYear = year;
      bestAverage = average;
    }
  }

  return `The best year was ${bestYear} with an average score of ${bestAverage}`;
}
