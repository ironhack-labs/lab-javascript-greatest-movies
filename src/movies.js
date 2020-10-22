// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(array) {
  let allDirectors = array.map(function (movie) {
    return movie.director;
  });
  return allDirectors;
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(array) {
  let stevenSpielbergProductions = array.filter(function (movie) {
    return (
      movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
    );
  });
  return stevenSpielbergProductions.length;
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(array) {
  let totalRates = array.reduce(function (acc, val) {
    return acc + val.rate;
  }, 0);

  let average = totalRates / array.length;
  return Number(average.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(array) {
  const orderedMovies = array.sort(function (year1, year2) {
    if (year1.year > year2.year) {
      return 1;
    }
    if (year1.year < year2.year) {
      return -1;
    } else {
      return 0;
    }
  });
  return orderedMovies;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(array) {
  const alphaOrder = array.sort(function (a, b) {
    if (a.title > b.title) {
      return 1;
    }
    if (a.title < b.title) {
      return -1;
    } else {
      return 0;
    }
  });
  return alphaOrder;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
