const movies = require("./data");
// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  const directorsArray = moviesArray.map((movies) => movies.director);
  const uniqueDirectorsArray = [...new Set(directorsArray)];
  return uniqueDirectorsArray;
}

console.log(getAllDirectors(movies));

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  const dramaStevenSpielbergMovies = moviesArray.filter(
    (movies) =>
      movies.genre.includes("Drama") && movies.director === "Steven Spielberg"
  );
  return dramaStevenSpielbergMovies.length;
}

// console.log(howManyMovies(movies));

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  const sum = moviesArray.reduce((accumulator, value) => {
    return accumulator + value.score;
  }, 0);
  return Math.round((sum / moviesArray.length) * 100) / 100;
}

//console.log(scoresAverage(movies));

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const dramaMovies = moviesArray.filter((movies) =>
    movies.genre.includes("Drama")
  );

  const sum = dramaMovies.reduce((accumulator, value) => {
    return accumulator + value.score;
  }, 0);
  return Math.round((sum / dramaMovies.length) * 100) / 100;
}

//console.log(dramaMoviesScore(movies));

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const copyOfMoviesArray = [...moviesArray];
  const yearSortedArray = copyOfMoviesArray.sort((a, b) => {
    if (a.year !== b.year) {
      return a.year - b.year;
    } else {
      if (a.title < b.title) {
        return -1;
      }
      if (a.title > b.title) {
        return 1;
      }
      if (a.title === b.title) {
        return 0;
      }
    }
  });
  return yearSortedArray;
}

//console.log(orderByYear(movies));

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const moviesAlphabeticOrder = moviesArray.map((movies) => movies.title);
  const copyOfMoviesAlphabeticOrder = [...moviesAlphabeticOrder];
  const titleSortedArray = copyOfMoviesAlphabeticOrder.sort((a, b) => {
    if (a < b) {
      return -1;
    }
    if (a > b) {
      return 1;
    }
    if (a === b) {
      return 0;
    }
  });
  return titleSortedArray.slice(0, 20);
}

//console.log(orderAlphabetically(movies));

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  const copyOfMoviesArray = [...moviesArray];
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
