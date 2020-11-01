// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors (arr) {
    return arr.map(movie => movie.director)
}
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies (arr) {
    return arr.filter(movie => movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')).length 
}
// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(arr) {
    return arr.length === 0 ? 0 : Math.round((arr.reduce((acc, el) => (typeof el.rate !== "number") ? acc : acc + el.rate, 0)) / arr.length * 100) / 100;
}
// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate (arr) {
    return (arr.filter(dramaMovies => dramaMovies.genre.includes("Drama"))).length === 0 ? 0 : Math.round(arr.reduce((acc, el) => el.genre.includes("Drama") ? acc += el.rate : acc, 0) / (arr.filter(dramaMovies => dramaMovies.genre.includes("Drama"))).length * 100) / 100;
}
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear (arr) {
    return (arr.filter(movieYear => movieYear.year)).sort((a, b) => (a.year > b.year) ? 1 : (a.year === b.year) ? ((a.title > b.title) ? 1 : -1) : -1);
}
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
