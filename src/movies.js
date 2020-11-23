//const movies = require('./data');

// Iteration 1: All directors? - Get the array of all directors.

const getAllDirectors = (movies) => movies.map(movie => movie.director);

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

const getAllUniqueDirectors = (movies) => [...new Set(movies.map(movie => movie.director))];


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

const howManyMovies = (movies) => movies.filter(movie => movie.director === "Steven Spielberg" && movie.genre.includes("Drama")).length;


// Iteration 3: All rates average - Get the average of all rates with 2 decimals

const ratesAverage = (movies) => {
  //Return 0 if there is an empty array
  return movies.length === 0 ? 0 : Number((movies.reduce((sum, movie) => {
    //Add 0 if there is no movie.rate
    return movie.rate ? sum + movie.rate : sum + 0
  }, 0) / movies.length).toFixed(2))
}

// Iteration 4: Drama movies - Get the average of Drama Movies

const dramaMoviesRate = (movies) => {
  dramas = movies.filter(movie => movie.genre.includes("Drama"));
  return dramas.length === 0 ? 0 : Number((dramas.reduce((sum, movie) => {
    return movie.rate ? sum + movie.rate : sum + 0
  }, 0) / dramas.length).toFixed(2))
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

const orderByYear = (movies) => {
  newMovies = [...movies]
  return newMovies.sort((a, b) => a.year === b.year ? a.title.localeCompare(b.title) : a.year - b.year);
}



// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles


const orderAlphabetically = (movies) => movies.map(movie => movie.title).sort().splice(0, 20);

console.log(orderAlphabetically(movies))

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
