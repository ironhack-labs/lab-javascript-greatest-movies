// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?


function getAllDirectors(movies) {
  return movies.map((directorFilm) => directorFilm.director);
}
 


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  return movies.filter((dramaMovies) => (dramaMovies.director === "Steven Spielberg" && dramaMovies.genre.includes("Drama"))).length
}




// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  const moviesScore = movies.map((scoreMovie) => scoreMovie.score);

  if (!movies.length) {
    return 0;
  }

  const totalScore = moviesScore.reduce((accumulator, score) => {
    if(!score) {
      return accumulator;
    }
    return accumulator + score;
  }, 0);

  const result = (totalScore / moviesScore.length).toFixed(2);
  return result * 1;
}




// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  const dramaScore = movies.filter((drama) => drama.genre.includes("Drama"))
                            .map((mov) => mov.score)

  if (dramaScore.length === 0) {
    return 0
  }

  const dramaResult = dramaScore.reduce((accumulator, score) => {
    return accumulator + score;
  }, 0);

  const dramaAverage = (dramaResult / dramaScore.length).toFixed(2);
  return dramaAverage * 1;
}




// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  const orderMovies = movies.sort((movieYear1, movieYear2) => {
    if (movieYear1.year > movieYear2.year) {
      return 1;
    } else if (movieYear1.year < movieYear2.year) {
      return -1;
    } else {
      return 0;
    }
  });

  return orderMovies.map((theYear) => theYear)
}




// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {

  const onlyTitle = movies.map((movie) => movie.title);
  const sortedMovies = onlyTitle.sort((titleMovie1, titleMovie2) => {
    if (titleMovie1 > titleMovie2) {
      return 1;
    } else if (titleMovie1 < titleMovie2) {
      return -1;
    } else {
      return 0;
    }
  });

  const twentyMovies = sortedMovies.slice(0, 20);  
  return twentyMovies
}




// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {
  const moviesDuration = movies.map((timeMovie) => timeMovie.duration);
  return moviesDuration;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(movies) {
  let puntuation = 0;

  if (movies.length === 0) {
    return null;
  }

  const orderMoviesByYear = movies.sort((yearFilm1, yearFilm2) => {
    if (yearFilm1.year > yearFilm2.year) {
      return 1
    } else if (yearFilm1.year < yearFilm2.year) {
      return -1
    } else {
      return 0
    }
  });

  const yearOfMovie = orderMoviesByYear.map((movieYear) => movieYear.year);
  const scoreOfMovie = orderMoviesByYear.map((movieScore) => movieScore.score);

  for (let i = 0; i < orderMoviesByYear.length; i++) {
    if (orderMoviesByYear[i].year === yearOfMovie[i]) {
      moviePuntuation = scoreOfMovie[i] + orderMoviesByYear[i].score;
      return `The best year was ${orderMoviesByYear[i].year} with an average score of ${moviePuntuation}`;
    }
  };
}



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
