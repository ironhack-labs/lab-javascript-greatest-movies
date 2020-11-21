// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(movieArray) {
  return movieArray.map((elem) => elem.director);
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(arr) {
  let howMovies = arr.filter(function (elem) {
    return (
      elem.director.includes("Steven Spielberg") && elem.genre.includes("Drama")
    );
  });
  return howMovies.length;
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(arr) {
  if (arr.length === 0) {
    return 0;
  }
  const sumRate = arr.reduce(function (acc, elem) {
    if (elem.rate === undefined) {
      return acc;
    }
    return acc + elem.rate;
  }, 0);

    
// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(arr) {
  let dramaMovies = arr.filter(function (elem) {
    return elem.genre.includes("Drama");
  });
  if (dramaMovies.length === 0) {
    return 0;
  }
  const sumRate = dramaMovies.reduce(function (acc, elem) {
    if (elem.rate === undefined) {
      return acc;
    }
    return acc + elem.rate;
  }, 0);

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
