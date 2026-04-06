// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  return moviesArray.map((movie) => movie.director);
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  return moviesArray.filter((movie) => {
    return movie.director === "Steven Spielberg" && movie.genre.indexOf("Drama") !== -1;
  }).length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  }

  const totalScore = moviesArray.reduce((acc, movie) => {
    return acc + (movie.score || 0);
  }, 0);

  return Number((totalScore / moviesArray.length).toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const dramaMovies = moviesArray.filter((movie) => {
    return movie.genre.indexOf("Drama") !== -1;
  });

  if (dramaMovies.length === 0) {
    return 0;
  }

  return scoresAverage(dramaMovies);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const moviesCopy = [...moviesArray];

  return moviesCopy.sort((a, b) => {
    if (a.year === b.year) {
      if (a.title < b.title) {
        return -1;
      } else if (a.title > b.title) {
        return 1;
      } else {
        return 0;
      }
    }

    return a.year - b.year;
  });
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const moviesCopy = [...moviesArray];

  return moviesCopy
    .sort((a, b) => {
      if (a.title < b.title) {
        return -1;
      } else if (a.title > b.title) {
        return 1;
      } else {
        return 0;
      }
    })
    .map((movie) => movie.title)
    .slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  return moviesArray.map((movie) => {
    let hours = 0;
    let minutes = 0;

    if (movie.duration.indexOf("h") !== -1) {
      hours = parseInt(movie.duration);
    }

    if (movie.duration.indexOf("min") !== -1) {
      const durationParts = movie.duration.split(" ");
      for (let i = 0; i < durationParts.length; i++) {
        if (durationParts[i].indexOf("min") !== -1) {
          minutes = parseInt(durationParts[i]);
        }
      }
    }

    return {
      title: movie.title,
      year: movie.year,
      director: movie.director,
      duration: hours * 60 + minutes,
      genre: movie.genre,
      score: movie.score,
    };
  });
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
  if (moviesArray.length === 0) {
    return null;
  }

  const years = [];

  moviesArray.forEach((movie) => {
    if (years.indexOf(movie.year) === -1) {
      years.push(movie.year);
    }
  });

  let bestYear = years[0];
  let bestAverage = 0;

  for (let i = 0; i < years.length; i++) {
    const currentYear = years[i];

    const moviesOfYear = moviesArray.filter((movie) => {
      return movie.year === currentYear;
    });

    const average = scoresAverage(moviesOfYear);

    if (average > bestAverage) {
      bestAverage = average;
      bestYear = currentYear;
    } else if (average === bestAverage && currentYear < bestYear) {
      bestYear = currentYear;
    }
  }

  return `The best year was ${bestYear} with an average score of ${bestAverage}`;
}