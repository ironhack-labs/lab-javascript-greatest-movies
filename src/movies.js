// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

const newArray = [];
function getAllDirectors(moviesArray) {
  const newArray = moviesArray.map((movie) => movie.director);
  return newArray;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

let count = 0;
function howManyMovies(moviesArray) {
  const SpielbergFilms = moviesArray.filter((movie) => {
    if (movie.director === "Steven Spielberg") {
      count++;
    }
  });

  return count;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  }
  let avgScore;

  const scoresCount = moviesArray.reduce((acc, currentMovie) => {
    if (currentMovie.score) {
      return acc + currentMovie.score;
    } else {
      return acc;
    }
  }, 0);
  avgScore = scoresCount / moviesArray.length;
  const roundedScore = Math.round(avgScore * 100) / 100;

  return roundedScore;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {

  let avgScoreDrama;

  const dramaMovies = moviesArray.filter((dramaMovie) => {
    return dramaMovie.genre.includes("Drama");
  });

  const dramaScores = dramaMovies.reduce((acc, currentDramaMovie) => {
    return acc + currentDramaMovie.score;
  }, 0);

  avgScoreDrama = dramaScores / dramaMovies.length;

  const roundedScore = Math.round(avgScoreDrama * 100) / 100;

  if (roundedScore){
    return roundedScore;
  } else {
    return 0;
  }
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
