// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(arr) {
  return arr.map((obj) => obj.director);
}

console.log(getAllDirectors);

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(arr) {
  let newArr = arr.filter((obj) => obj.director === "Steven Spielberg");
  let nextArr = newArr.filter((obj) => obj.genre.includes("Drama"));
  return nextArr.length;
}

howManyMovies(movies);

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movies) {
  let average = movies.map((obj) => obj.rate).reduce(function(accum, currVal) {
    return accum + currVal / movies.length;
  }, 0);
  return Number(average.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movies) {
  let dramas = movies.filter((obj) => obj.genre.includes('Drama'));
  let dramasAverage = dramas.map((obj) => obj.rate).reduce(function(accum, currVal) {
   return accum + currVal / movies.length;
 }, 0);
 return Number(dramasAverage.toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
