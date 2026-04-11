// Iteration 1: All directors
// We need to get a list of all directors from the movies array
function getAllDirectors(moviesArray) {
  const directors = moviesArray.map(function (movie) {
    return movie.director;
  });
  return directors;
}

// Iteration 2: Steven Spielberg. The best?
// Filter for Spielberg and the genre Drama
function howManyMovies(moviesArray) {
  const spielbergDramas = moviesArray.filter(function (movie) {
    return (
      movie.director === 'Steven Spielberg' && 
      movie.genre.includes('Drama')
    );
  });
  return spielbergDramas.length;
}

// Iteration 3: All scores average
// Use reduce to get the total score and then calculate the average
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) return 0;

  const totalScore = moviesArray.reduce(function (acc, movie) {
    if (movie.score) {
      return acc + movie.score;
    } else {
      return acc;
    }
  }, 0);

  let average = totalScore / moviesArray.length;
  // Rounds to 2 decimal places
  return Math.round(average * 100) / 100;
}

// Iteration 4: Drama movies - Get the average score of all drama movies
function dramaMoviesScore(moviesArray) {
  const dramaMovies = moviesArray.filter(function (movie) {
    return movie.genre.includes('Drama');
  });

  // Reusing our average function from before
  return scoresAverage(dramaMovies);
}

// Iteration 5: Order by year
// Create a copy and sort by year, then alphabetically if years are the same
function orderByYear(moviesArray) {
  const moviesCopy = [...moviesArray];

  moviesCopy.sort(function (a, b) {
    if (a.year !== b.year) {
      return a.year - b.year;
    } else {
      return a.title.localeCompare(b.title);
    }
  });

  return moviesCopy;
}

// Iteration 6: Alphabetic order
// Return titles of the first 20 movies, sorted alphabetically
function orderAlphabetically(moviesArray) {
  const titles = moviesArray.map(function (movie) {
    return movie.title;
  });

  titles.sort(function (a, b) {
    return a.localeCompare(b);
  });

  return titles.slice(0, 20);
}

// BONUS - Iteration 7: Time format
// Change the duration string to minutes (number)
function turnHoursToMinutes(moviesArray) {
  return moviesArray.map(function (movie) {
    let duration = movie.duration;
    let minutes = 0;

    if (duration.includes('h')) {
      minutes += parseInt(duration.split('h')[0]) * 60;
    }

    if (duration.includes('min')) {
      let parts = duration.split(' ');
      let lastPart = parts[parts.length - 1];
      minutes += parseInt(lastPart.replace('min', ''));
    }

    // Creating a copy of the movie object with the new duration
    return { ...movie, duration: minutes };
  });
}

// BONUS - Iteration 8: Best yearly score average
function bestYearAvg(moviesArray) {
  if (moviesArray.length === 0) return null;

  const yearsObj = {};

  moviesArray.forEach(function (movie) {
    if (!yearsObj[movie.year]) {
      yearsObj[movie.year] = [];
    }
    yearsObj[movie.year].push(movie.score);
  });

  let bestYear = 0;
  let highestAverage = 0;

  for (let year in yearsObj) {
    let sum = yearsObj[year].reduce((acc, score) => acc + score, 0);
    let avg = sum / yearsObj[year].length;

    if (avg > highestAverage) {
      highestAverage = avg;
      bestYear = year;
    } else if (avg === highestAverage) {
      if (year < bestYear || bestYear === 0) {
        bestYear = year;
      }
    }
  }

  return `The best year was ${bestYear} with an average score of ${highestAverage}`;
}