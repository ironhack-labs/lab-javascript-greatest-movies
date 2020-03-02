/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

const orderByYear = array =>  movies.sort((a, b) =>  a.year - b.year);


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

const howManyMovies = array => movies.filter( item => item.director === "Steven Spielberg" && item.genre === "Drama" ).length;

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

const orderAlphabetically = array => movies.filter((a, b) =>  a.title - b.title);

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

const ratesAverage = array => movies.reduce((a, b) => a.rate + b.rate) / movies.length;

// Iteration 5: Drama movies - Get the average of Drama Movies

const dramaMoviesRate = array => movies.reduce(a => a.genre === "Drama") / movies.length;

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

const turnHoursToMinutes = array => movies.map(a => a.duration);

// BONUS Iteration: Best yearly rate average - Best yearly rate average
