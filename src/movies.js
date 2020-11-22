//const movies = require('./data');

// Iteration 1: All directors? - Get the array of all directors.

const getAllDirectors = (movies) => movies.map(movie => movie.director);

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

const getAllUniqueDirectors = (movies) => [...new Set(movies.map(movie => movie.director))];


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

const howManyMovies = (movies) => movies.filter(movie => movie.director === "Steven Spielberg" && movie.genre.includes("Drama")).length;


// Iteration 3: All rates average - Get the average of all rates with 2 decimals

const ratesAverage = (movies) => {
  console.log(movies.length)
  movies.length === 0 ? 0 : Number((movies.reduce((sum, movie) => {
    return (sum + movie.rate)
  }, 0) / movies.length).toFixed(2))
}

console.log(ratesAverage([]))

// Iteration 4: Drama movies - Get the average of Drama Movies

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
