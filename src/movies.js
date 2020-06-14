
// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(arr) {
  let newArr = arr.map(function (movie) {
    return movie.director;
  });
  return newArr;
}

// // _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// // Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

const howManyMovies = function (array) {
  let nbOfMovies = 0;
  nbOfMovies = array.reduce(function (accumulator, movie) {
    if (
      movie.director === "Steven Spielberg" &&
      movie.genre.includes("Drama")
    ) {
      nbOfMovies = accumulator + 1;
    } else nbOfMovies = accumulator;
    return nbOfMovies;
  }, 0);
  return nbOfMovies;
};

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

const sumRates = function (array) {
  let sumOfRates = 0;
  sumOfRates = array.reduce(function (accumulator, movie) {
    if (
      movie.rate
      // &&
      // movie.rate.toString().length===4
    ) {
      sumOfRates = accumulator + movie.rate;
    } else sumOfRates = accumulator;
    return sumOfRates;
  }, 0);
  return sumOfRates;
};

// console.log(`The sum of the rates is ${sumRates(movies)}`);

const nbRates = function (array) {
  let numberOfRates = 0;
  numberOfRates = array.reduce(function (accumulator, movie) {
    if (
      movie.rate
      // && movie.rate.toString().length===4
    ) {
      numberOfRates++;
    } else numberOfRates = accumulator;
    return numberOfRates;
  }, 0);
  return numberOfRates;
};

// console.log(`The number of rates is ${nbRates(movies)}`);

const ratesAverage = function (array) {
  if (array.length > 0) {
    let averageOfRates = 0;
    let numberOfRates = nbRates(array);
    let sumOfRates = sumRates(array);
    averageOfRates = sumOfRates / numberOfRates;
    return Math.round(averageOfRates * 100) / 100;
  } else return 0;
};

// console.log(`The average of the rates is ${ratesAverage(movies)}`);

// Ajouter une condition dans le reduce pour avoir les films qui ont des notes.

// Iteration 4: Drama movies - Get the average of Drama Movies

const dramaMoviesArray = function (array) {
  let dramaMovies = [];
  dramaMovies = array.filter(function (movie) {
    return movie.genre.includes("Drama");
  });
  return dramaMovies;
};

const dramaMoviesRate = function (array) {
  let dramaMovies = [];
  dramaMovies = dramaMoviesArray(array);
  return ratesAverage(dramaMovies);
};

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

const orderByYear = function (array) {
  let orderYear = [];
  orderYear = array.sort(function (a, b) {
    if (a.year === b.year) {
      return a.year - b.year;
    } else return a.title - b.title;
  });
  return orderYear;
};

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

const orderAlphabetically = function (array) {
  let orderAlph = array.sort(function (a, b) {
    return a.title - b.title;
  });
  return orderAlph;
};

const print20Alphabetically = function (array) {
  for (let i = 0; i < 20; i++) {
    console.log(orderAlphabetically(array)[i].title.toString());
  }
};

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
