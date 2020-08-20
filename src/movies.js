// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(movieArray) {
  let dir = movieArray.map((item) => item.director);
  return dir;

  // Bonus 1.1 Clean the array of directors

  let dirUnique = [];
  dirUnique = dir.map(function (item) {
    if (!dirUnique.includes(item)) {
      dirUnique.push(item);
    }
  });
  return dirUnique;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(movieArray) {
  if (movieArray.length == 0) {
    return 0;
  }
  let movieAmount = movieArray.filter(
    (item) =>
      item.director == "Steven Spielberg" && item.genre.includes("Drama")
  );
  return movieAmount.length;
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movieArray) {
  if (movieArray.length == 0) {
    return 0;
  }
  let onlyRatedMovies = movieArray.filter((item) => item.rate);
  let allRates = onlyRatedMovies.map((item) => item.rate);
  let total = allRates.reduce((sum, item) => sum + item);
  return Math.round((total / movieArray.length) * 100) / 100;
}

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movieArray) {
  let onlyDramaMovies = movieArray.filter((item) =>
    item.genre.includes("Drama")
  );
  return ratesAverage(onlyDramaMovies);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(movieArray) {
  if (movieArray.length == 0) {
    return 0;
  }
  movieArray.sort((a, b) => a.title - b.title);
  movieArray.sort((a, b) => a.year - b.year);

  // Não está retornando ordem alfabética

  return movieArray;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movieArray) {
  if (movieArray.length == 0) {
    return [];
  }
  let movieTitles = movieArray.map((item) => item.title);
  movieTitles.sort().splice(20);
  return movieTitles;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(movieArray) {}

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average

function bestYearAvg(movieArray) {
  if (movieArray.length == 0) {
    return null;
  }
}
