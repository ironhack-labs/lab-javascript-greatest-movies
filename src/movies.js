var { movies } = require("./data.js");
// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(movies) {
  return movies.map((movie) => movie.director);
}
console.log(getAllDirectors(movies));

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(movies) {
  return movies.filter(
    (movie) =>
      movie.director === "Steven Spielberg" &&
      movie.genre.indexOf("Drama") !== -1
  ).length;
}
console.log(howManyMovies(movies));

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movies) {
  if (movies.length <= 0) {
    return 0;
  }
  const total = movies.reduce(function (totalRates, currentMovie) {
    if (typeof currentMovie.rate !== "number") {
      return totalRates;
    }
    return (totalRates += currentMovie.rate);
  }, 0);
  return Math.round((total / movies.length) * 100) / 100;
}
console.log(ratesAverage(movies));

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(arrMovies) {
  const moviesDrama = arrMovies.filter((element) =>
    element.genre.includes("Drama")
  );
  const sumRate = moviesDrama.reduce((acc, element) => acc + element.rate, 0);
  if (moviesDrama.length === 0) {
    return 0;
  }
  const averageRate = parseFloat((sumRate / moviesDrama.length).toFixed(2));
  const averageRound = averageRate;
  console.log("the average rate is", averageRound);
  return averageRound;
}
dramaMoviesRate(movies);

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(array) {
  const arrayCopy = [...array];
  const orderedArray = arrayCopy.sort((a, b) => {
    if (a.year === b.year) {
      if (a.title > b.title) {
        return 1;
      } else if (a.title < b.title) {
        return -1;
      }
    } else {
      return a.year - b.year;
    }
  });
  return orderedArray;
}
console.log(orderByYear(movies));

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(titleOrder) {
  return titleOrder
    .map((movie) => movie.title)
    .sort()
    .slice(0, 20);
}
console.log(orderAlphabetically(movies));

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
