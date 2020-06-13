// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(moviesArr) {
  let result = movies.map(function (el) {
    return el.director;
  });
  return result;
}
getAllDirectors(movies);

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(moviesArr) {
  let dramaSpielberg = moviesArr.filter(function (el) {
    return el.director === "Steven Spielberg" && el.genre.includes("Drama");
  });
  return dramaSpielberg.length;
}

howManyMovies(movies);


// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(array) {
    const sum = array.reduce(function (acc, el) {
        return acc + el.rate // car 0 qui remplace acc.rate
    }, 0);
  return Number((sum/array.length).toFixed(2));
}
let result = ratesAverage(movies);
console.log(result);


// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate (array) {
    return array.reduce(function (acc, el) {
        return acc + el.genre.includes("Drama").rate;
    }, 0) / array.length;
}

dramaMoviesRate(movies);

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear (moviesArr) {
    copyMoviesArr = moviesArr.slice();
    return copyMoviesArr.sort(function (a, b) {
        return a.year - b.year;
    });
}

orderByYear(movies);

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
