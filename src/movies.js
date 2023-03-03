// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  const directorsArray = moviesArray.map(function (key) {
    return key.director;
  });
  return directorsArray;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  const spielbergArray = moviesArray.filter(function (key) {
    if (key.director === "Steven Spielberg" && key.genre.includes("Drama")) {
      return true;
    } else return false;
  });
  return spielbergArray.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  const scoresArray = moviesArray.map(function (key) {
    return key.score;
  });
  const sum = scoresArray.reduce(function (accumulator, currentValue) {
    if (currentValue > 0) {
      return accumulator + currentValue;
    } else return accumulator;
  }, 0);
  if (moviesArray.length === 0) {
    return 0;
  }
  return Math.round((sum / scoresArray.length) * 100) / 100;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const dramaFilms = moviesArray.filter(function (key) {
    if (key.genre.includes("Drama")) {
      return true;
    }
  });
  const scoreDrama = dramaFilms.map(function (key) {
    return key.score;
  });
  const sumDrama = scoreDrama.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
  }, 0);
  if (dramaFilms.length === 0) {
    return 0;
  }
  return Math.round((sumDrama / dramaFilms.length) * 100) / 100;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const copyOfMoviesArray = [].concat(moviesArray);
  const sortedYears = copyOfMoviesArray.sort(function (a, b) {
    if (a.year > b.year) {
      return 1;
    } else if (a.year < b.year) {
      return -1;
    } else if (a.year === b.year) {
      if (a.title > b.title) {
        return 1;
      } else if (a.title < b.title) {
        return -1;
      } else return 0;
    }
  });
  return sortedYears;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const copyOfMoviesArray = [].concat(moviesArray);
  const titles = copyOfMoviesArray.map(function (key) {
    return key.title;
  });
  const sortedTitles = titles.sort();
  return sortedTitles.slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
