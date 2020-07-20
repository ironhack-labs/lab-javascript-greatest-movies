/* const movies = require('./data'); */
// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(arr) {
    return arr.map(movie => {
        return movie.director;
    });
}
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?



// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(arr) {
    let spielbergMovies = arr.filter((movie) => {
        if (movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')) {return true;}
        return false;
    });
    return spielbergMovies.length;
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(arr) {
    return arr.reduce((total, movie) => {
        if (!movie.rate) {return total + 0;} // Essa precisei da ajuda do vídeo de solução
        return parseFloat((total + movie.rate / arr.length).toFixed(2));
    }, 0);
}

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(arr) {
    let dramaMovies = [];
    for (let movie of arr) {
        if (movie.genre.includes('Drama')) {
            dramaMovies.push(movie);
        }
    }
    return ratesAverage(dramaMovies);
}
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(arr) {
    let sortedByYear = [];
    for (let movie of arr) {sortedByYear.push(movie);}
    sortedByYear.sort((a, b) => {
        if (a.year < b.year) {return -1;}
        if (a.year > b.year) {return 1;}
        return a.title.localeCompare(b.title); // com ajuda da solução
    });
    return sortedByYear;
}
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(arr) {
    let moviesCopy = [];
    let sortedTitles = [];
    for (let movie of arr) {moviesCopy.push(movie.title);}
    moviesCopy.sort((a, b) => {
        return a.localeCompare(b);
    });
    if (moviesCopy.length < 20) {
        for (let j = 0; j < moviesCopy.length; j++) {sortedTitles.push(moviesCopy[j]);}
    } else for (let i = 0; i < 20; i++) {sortedTitles.push(moviesCopy[i]);}
    return sortedTitles;
}
console.log(orderAlphabetically(movies));
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes



// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average