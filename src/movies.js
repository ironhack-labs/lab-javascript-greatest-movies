const movies = require(`./data`);
// The `movies` array from the file `src/data.js`.
// console.log('movies: ', movies);


// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  const uniqueDirectors = [];

  movies.map(movie => movie.director)
    .forEach(director => {
      if (!uniqueDirectors.includes(director)) {
        uniqueDirectors.push(director);
      }
    });

  return uniqueDirectors;
}

// console.log(getAllDirectors(movies));

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  return movies.filter(movie => movie.director === `Steven Spielberg` && movie.genre.includes(`Drama`)).length;
}

// console.log(howManyMovies(movies));

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  if (!movies.length) {
    return 0;
  }

  return +(movies.reduce((total, movie) => {
    if (!movie.score) {
      return total;
    }
    return total + movie.score

  }, 0) / movies.length).toFixed(2);
}

// console.log(scoresAverage(movies));

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  const dramas = movies.filter(movie => movie.genre.includes(`Drama`));

  return scoresAverage(dramas);
}

// console.log(dramaMoviesScore(movies));

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  const moviesClone = JSON.parse(JSON.stringify(movies));

  return moviesClone.sort((a, b) => {
    if (a.year - b.year) {
      return a.year - b.year;
    }

    return a.title < b.title ? -1 : 1
  });
}

// console.log(orderByYear(movies));

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  const moviesClone = JSON.parse(JSON.stringify(movies));

  return moviesClone.sort((a, b) => a.title < b.title ? -1 : 1)
    .slice(0, 20)
    .map(movie => movie.title);
}

// console.log(orderAlphabetically(movies));

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {
  return movies.map(movie => {
    if (typeof movie.duration === `string` && movie.duration.length) {
      const hoursArr = movie.duration.match(/\d+h/),
        minutesArr = movie.duration.match(/\d+m/),
        hours = hoursArr ? hoursArr : 0,
        minutes = minutesArr ? minutesArr : 0;


      movie.duration = parseInt(hours) * 60 + parseInt(minutes);
      return movie;
    }
  });
}

// console.log(turnHoursToMinutes(movies));

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(movies) {
  if (!movies.length) {
    return null;
  }

  const movieScoresByYear = {};
  let bestYear;
  let bestAvg = 0;


  movies.forEach(movie => {
    const movieYear = movie.year;

    if (movieScoresByYear[movieYear]) {
      movieScoresByYear[movieYear].push(movie.score);
    } else {
      movieScoresByYear[movieYear] = [movie.score];
    }
  });

  for (let year in movieScoresByYear) {
    const yearAvg = movieScoresByYear[year].reduce((total, currentScore) => total + currentScore) / movieScoresByYear[year].length;

    if (yearAvg > bestAvg) {
      bestAvg = yearAvg;
      bestYear = year;
    }
  }

  return `The best year was ${bestYear} with an average score of ${bestAvg}`
}

// console.log(bestYearAvg(movies));

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
