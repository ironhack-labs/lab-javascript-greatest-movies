/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)
const orderByYear = (movies) => movies.slice(0).sort((a, b) => a.year !== b.year ? a.year - b.year : (a.title > b.title) ? 1 : -1);

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct
const howManyMovies = (movies) => movies.filter(movie => movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')).length;

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles
const orderAlphabetically = (movies) => movies.map(movie => movie.title).sort().slice(0,20);

// Iteration 4: All rates average - Get the average of all rates with 2 decimals
const ratesAverage =  (movies) => {
    const average =  movies.length === 0 ? 0 : movies.map(movie => (movie.rate && typeof movie.rate==='number') ? movie.rate : 0).reduce((a, b) => a + b) / movies.length; 
    return Number(Math.round(average+'e2')+'e-2');
}

// Iteration 5: Drama movies - Get the average of Drama Movies

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average

