// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(arr) {
  let directorsArray = arr.map((el) => {
    return el.director;
  });
  return directorsArray;
}
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
let howManyMovies = (movies) => {
  let dramaMovies = movies.filter((el) => {
    return el.director === "Steven Spielberg" && el.genre.includes("Drama");
  });
  return dramaMovies.length;
};
howManyMovies(movies);
// Iteration 3: All rates average - Get the average of all rates with 2 decimal
function ratesAverage(arr) {
  if (arr.length === 0) {
    return 0;
  }
  let ratesValue = arr.map((el) => {
    return el.rate;
  });
  let ratesSum = ratesValue.reduce((acc, el) => {
    return acc + el;
  }, 0);
  let totalAv = ratesSum / ratesValue.length;
  return Math.round(totalAv * 100) / 100;
}
// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(arr) {
  let dramaMovies = arr.filter((el) => {
    return el.genre.includes("Drama");
  });
  if (dramaMovies === 0 || arr.length < 0) {
    return 0;
  }
  let dramaRate = dramaMovies.map((el) => {
    return el.rate;
  });
  let dramaSum = dramaRate.reduce((acc, el) => {
    acc += el / dramaRate.length;
    return acc;
  }, 0);
  return Math.round(dramaSum * 100) / 100;
}
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arr) {
  let movYear = arr.map((el) => {
    return el;
  });
  let sortedYears = movYear.sort((el1, el2) => {
    if (el1.year === el2.year) {
      if (el1.title < el2.title) {
        if (el1.title < el2.title) {
          return -1;
        }
      } else if (el1.title > el2.title) {
        return 1;
      }
      return 0;
    } else if (el1.year > el2.year) {
      return 1;
    } else {
      return -1;
    }
  });
  return sortedYears;
}
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arr) {
  let movTitle = arr.map((el) => {
    return el.title;
  });
  let sortedTitle = movTitle.sort((el1, el2) => {
    if (el1 === el2) {
      return 0;
    } else if (el1 > el2) {
      return 1;
    } else {
      return -1;
    }
  });
  return sortedTitle.slice(0, 20);
}
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
