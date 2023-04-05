const movies = require('./data') // Not sure how it works; solution suggested by ChatGPT
// Iteration 1: All directors? - Get the array of all directors.
// function getAllDirectors(moviesArray) {}
const getAllDirectors = movies.map(movie => movie.director);
console.log(getAllDirectors);    
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
// function getAllDirectors(moviesArray) {}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
// function howManyMovies(moviesArray) {}
const howManyMovies = movies.filter(movie => movie.director === 'Steven Spielberg' && movie.genre.includes('Drama'));
console.log(howManyMovies);

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
// function scoresAverage(moviesArray) {}
const scoresAverage = Math.round(movies.reduce((sum, value) => sum + value.score / movies.length, 0) * 100) / 100;
console.log(scoresAverage);

// Iteration 4: Drama movies - Get the average of Drama Movies
// function dramaMoviesScore(moviesArray) {}
const dramaMovies = movies.filter(movie => movie.genre.includes("Drama"));
const dramaMoviesScore = Math.round(dramaMovies.reduce((sum, value) => sum + value.score / dramaMovies.length, 0) * 100) / 100;
console.log(dramaMoviesScore);

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
// function orderByYear(moviesArray) {}
const moviesCopy = [...movies];
const orderByYear = moviesCopy.sort((a, b) => {
    if (a.year === b.year) {
        return a.title.localeCompare(b.title);
    }    
    
    return a.year - b.year});

console.log(orderByYear);

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
// function orderAlphabetically(moviesArray) {}
const moviesCloneArray = [...movies];
const orderAlphabetically = moviesCloneArray.sort((a, b) => a.title.localeCompare(b.title)).slice(0, 20).map(movie => movie.title);
console.log(orderAlphabetically);

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
