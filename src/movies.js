// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  return moviesArray.map((m) => m.director);
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  }
  let total = 0;
  for (let index = 0; index < moviesArray.length; index++) {
    if (moviesArray[index].director === "Steven Spielberg") {
      for (let i = 0; i < moviesArray[index].genre.length; i++) {
        if (moviesArray[index].genre[i] === "Drama") {
          total++;
        }
      }
    }
  }
  return total;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  }
  let total = 0;
  for (let index = 0; index < moviesArray.length; index++) {
    if (moviesArray[index].score !== undefined) {
      total += moviesArray[index].score;
    }
  }
  let result = total / moviesArray.length;
  return Math.round(result * 100) / 100;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  if (moviesArray.length === 1) {
    return moviesArray[0].score;
  }
  let totalDrama = 0;
  let count = 0;
  for (let index = 0; index < moviesArray.length; index++) {
    let movie = moviesArray[index];
    for (let i = 0; i < movie.genre.length; i++) {
      if (movie.genre[i] === "Drama") {
        count++;
        totalDrama += movie.score;
      }
    }
  }
  if (count === 0) {
    return 0;
  }
  let result = totalDrama / count;

  return Math.round(result * 100) / 100;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const copy = moviesArray.slice();
  return copy.sort((a, b) => {
    if (a.year !== b.year) {
      return a.year - b.year;
    }
    return a.title.localeCompare(b.title);
  });
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  return moviesArray
    .slice()
    .sort((a, b) => a.title.localeCompare(b.title))
    .map((m) => m.title)
    .slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
