const movies = require('./data.js');

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?
const getAllDirectors = movies.map((elemento) => {
    return elemento.director;
})

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

const howManyMovies = movies.filter((findDirector, i) => 
    movies[i].director === 'Steven Spielberg')

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

const ratesAverage = (movies) => {
    const average = (movies.reduce((acc, curr) => {
     return acc += curr.rate;
   }, 0) / movies.length).toFixed(2);
   return average;
 }

// Iteration 4: Drama movies - Get the average of Drama Movies

const findGenre = movies.filter((acc, index) => {
    return movies[index].genre.includes('Drama')
  })
  const dramaMoviesRate = ratesAverage(findGenre);

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

const orderByYear = movies.sort((movieA, movieB) => {
    return movieA.year > movieB.year
})

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

const orderByName = movies.sort((movieA, movieB) => {
    return movieA.title > movieB.title
})

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes



// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
