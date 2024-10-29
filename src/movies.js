// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  const directors = moviesArray.map((dirNames) => {
    return dirNames.director;
  });
  return directors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  if (moviesArray.length === 0) return 0;
  const stevenFilms = moviesArray.filter(
    (movie) =>
      movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')
  );
  return stevenFilms.length;
}

// having an include function is like writing an if statement

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) return 0;

  const scores = moviesArray.reduce((acc, movie) => {
    if (typeof movie.score === 'number') {
      return acc + movie.score;
    } else {
      return acc;
    }
  }, 0);
  const avgScores = scores / moviesArray.length;
  return parseFloat(avgScores.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  let genreDrama = moviesArray.filter((drama) => drama.genre.includes('Drama'));
  if (genreDrama.length === 0) return 0;

  const dramaScore = moviesArray.reduce((acc, movie) => {
    if (movie.genre == 'Drama' && typeof movie.score === 'number') {
      return acc + movie.score;
    }
    return acc;
  }, 0);
  const avgDramaScores = dramaScore / genreDrama.length;
  return parseFloat(avgDramaScores.toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const sortedArray = [...moviesArray].sort((a, b) => {
    if (a.year < b.year) {
      return -1;
    }
    if (a.year > b.year) {
      return 1;
    }
    if (a.title < b.title) {
      return -1;
    }
    if (a.title > b.title) {
      return 1;
    }
    return 0;
  });
  return sortedArray;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const sortedArray = [...moviesArray].sort((a, b) => {
    if (a.title < b.title) {
      return -1;
    }
    if (a.title > b.title) {
      return 1;
    }
    if (a.score < b.score) {
      return -1;
    }
    if (a.score > b.score) {
      return 1;
    }
    return 0;
  });
  return sortedArray.slice(0, 20).map((movie) => movie.title);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
