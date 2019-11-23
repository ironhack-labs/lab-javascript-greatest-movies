/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {

    if (!movies.length) {
        return [];
    }

    return movies.sort( (movieA, movieB) => {
        return movieA.year - movieB.year || movieA.title.localeCompare(movieB.title)
    });
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct
function howManyMovies(movies) {
    return movies
        .filter(movie => movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')).length;
}

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

// Iteration 4: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(movies) {

    if (!movies.length) {
        return 0;
    }

    return parseFloat((movies
        .reduce((acc, m) => {
            return acc + (m.rate || 0)
        }, 0) / movies.length)
        .toFixed(2));
}

// Iteration 5: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(movies) {

    if (!movies.length) {
        return 0;
    }

    let dramaMoviesAvg = movies
        .filter((movie) => movie.genre.includes('Drama'))
        .reduce((acc, m) => { return acc + (m.rate || 0) }, 0) / movies.length;

    return parseFloat((dramaMoviesAvg).toFixed(2));
}


// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average
