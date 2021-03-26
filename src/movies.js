// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(arr) {
  return arr.map((item) => item.director);
}
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(arr) {
  return arr.filter(
    (item) =>
      item.director === "Steven Spielberg" && item.genre.includes("Drama")
  ).length;
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(arr) {
  const arrRate = arr.map((item) => item.rate);
  const arrAvg = arrRate.reduce((a, b) => a + b / arrRate.length, 0);
  return Math.round(arrAvg * 100) / 100;
}

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(arr) {
  let arrDrama = arr.filter((item) => item.genre.includes("Drama"));
  let arrRate = arrDrama.map((item) => item.rate);
  let arrAvg = arrRate.reduce((a, b) => a + b / arrDrama.length, 0);
  return Math.round(arrAvg * 100) / 100;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(arr) {
  let arrYear = arr.sort((a, b) => {
    if (a.year === b.year) {
      return a.title.localeCompare(b.title);
    } else {
      return a.year - b.year;
    }
  });
  return arrYear;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(arr) {
  return arr
    .map((item) => item.title)
    .sort()
    .slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
