"use strict";

//** Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(movies) {
  var allDirectors = [];

  for (var i = 0; i < movies.length; i++) {
    var movie = movies[i];
    allDirectors.push(movie.director);
  }

  return allDirectors;
} //_Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?
//** Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?


function howManyMovies(movies) {
  var stevenDramaMovies = movies.filter(function (movie) {
    var isSteven = movie.director === "Steven Spielberg";
    var isDrama = movie.genre.includes("Drama");
    return isSteven && isDrama;
  });
  return stevenDramaMovies.length;
}
/*
const howManyMovies = (movies) => movies.filter(m => m.director === "Steven Spielberg" && m.genre.includes("Drama")).length
*/
//**  Iteration 3: All rates average - Get the average of all rates with 2 decimals


function ratesAverage(movies) {
  if (movies.length === 0) {
    return 0;
  } else if (movies.length > 0) {
    var lengthMovie = movies.length;
    var sumRates = movies.reduce(function (acc, val) {
      return acc + Number(val.rate);
    }, 0);
    return Number(Number(sumRates / lengthMovie).toFixed(2)) || ratesAverage;
  } else if (movies.length > 0) {
    var toNumber = movies.map(function (movie) {
      return Number(movie.rate);
    });
    var arrayOfRate = toNumber.filter(function (rate) {
      return !isNaN(rate);
    }); //*? try to update the value undefined with ""

    var sum = arrayOfRate.reduce(function (acc, val) {
      return acc + val;
    });
    var avgRate = Number((sum / arrayOfRate).toFixed(2));
    return avgRate && ratesAverage;
  }
} //*! the last condition isn't solved yet
//**  Iteration 4: Drama movies - Get the average of Drama Movies


function dramaMoviesRate(movies) {
  for (var i = 0; i < movies.length; i++) {
    var movie = movies[i];

    if (movie.genre.includes("Drama")) {
      var allDramaMovies = movies.filter(function (movie) {
        movie.genre.length === 1 && movie.genre.includes("Drama");
      });
      var sumOfDramaMovies = allDramaMovies.reduce(function (acc, val) {
        return acc + Number(val.rate);
      });
      var avgOfOnlyDramaMovies = Number((sumOfDramaMovies / allDramaMovies.length).toFixed(2));
      return Number(avgOfOnlyDramaMovies);
    } else if (!movie.genre.includes("Drama")) {
      return 0;
    }
  }
}
/* console.log(dramaMoviesRate(movies)); */
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average