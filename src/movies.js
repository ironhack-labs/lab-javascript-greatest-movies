// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  const directors = moviesArray.map(movie => movie.director);
  const notDuplicateDirectors = [];
  directors.forEach((director) => {
    if (!notDuplicateDirectors.includes(director)) {
      notDuplicateDirectors.push(director);
    }
  })
  return notDuplicateDirectors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  spielbergDramaMovies = moviesArray.filter(movie => movie.director === 'Steven Spielberg' && movie.genre.includes('Drama'));
  return spielbergDramaMovies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  } else {
    const scores = moviesArray.map(movie => movie.score || 0);
    const sumScores = scores.reduce((acc, movie) => {
      return acc + movie;
    }, 0);
    const average = sumScores / scores.length;
    return Math.round(average * 100) / 100;
  }
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const dramaMovies = moviesArray.filter(movie => movie.genre.includes('Drama'));
  return scoresAverage(dramaMovies);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const moviesArrayCopy = moviesArray.map(movie => movie);
  moviesArrayCopy.sort(function (aMovie, bMovie) {
    if (aMovie.year > bMovie.year) {
      return 1;
    } else if (aMovie.year < bMovie.year) {
      return -1;
    } else if (aMovie.year === bMovie.year) {
      if (aMovie.title.toLowerCase().localeCompare(bMovie.title) < 0) {
        return -1;
      } else if (aMovie.title.toLowerCase().localeCompare(bMovie.title) > 0) {
        return 1;
      }
    }
    return 0;

  });
  return moviesArrayCopy;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const moviesArrayCopy = moviesArray.map(movie => movie.title);
  moviesArrayCopy.sort(function (aMovie, bMovie) {
    if (aMovie.toLowerCase().localeCompare(bMovie) < 0) {
      return -1;
    } else if (aMovie.toLowerCase().localeCompare(bMovie) > 0) {
      return 1;
    }
    return 0;
  });
  return moviesArrayCopy.slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  const moviesArrayCopy = moviesArray.map(movie => {
    const movieCopy = { ...movie }
    const timeString = movieCopy.duration.replace('h', '').replace('min', '').split(' ').map(string => +string);
    const hoursToMins = timeString.length === 1 ? timeString[0] * 60 : (timeString[0] * 60) + timeString[1];
    movieCopy.duration = hoursToMins;
    return movieCopy;
  })
  return moviesArrayCopy;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
  if (moviesArray.length === 0) {
    return null;
  } else {
    const moviesByYearWithScore = moviesArray.map(movie => {
      return {
          year: movie.year,
          score: movie.score
        }      
    });

    const scoresByYear = moviesByYearWithScore.reduce((acc, elem) => {
      let yearString = elem.year.toString();
      if (acc[yearString]) {
        const average = (acc[yearString] + elem.score) / 2;
        acc[yearString] = Math.round(average * 10) / 10;
      } else {
        let score = elem.score;
        acc[yearString] = score;
      } 
      return acc;
    }, {});

    let yearScorePairs = Object.entries(scoresByYear);

    yearScorePairs.sort((yearScoreA, yearScoreB) => yearScoreB[1] - yearScoreA[1]);

    return `The best year was ${yearScorePairs[0][0]} with an average score of ${yearScorePairs[0][1]}`;
  }
}
