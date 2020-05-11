// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(movies) {
    let moviesDirector = movies.map(movie => movie.director)
        // _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?
    return moviesDirector.filter((director, index) => moviesDirector.indexOf(director) === index)
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
    return movies.filter((movie) => movie.director === 'Steven Spielberg' && movie.genre.indexOf('Drama') !== -1).length
}

// Iteracion 2: Other solution for multiples genres and directors
// function howManyMovies(movies, nameDirector, genre) {
// return movies.filter((movie) => movie.director === nameDirector && movie.genre.indexOf(genre) !== -1).length
// }

// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(movies) {
    if (!movies.length) {
        return 0
    }
    return Number((movies.filter((movie) => movie.rate).reduce(function(acumulartor, current) {
        return acumulartor + (!current.rate ? 0 : current.rate)
    }, 0) / movies.length).toFixed(2))
}

// Iteration 4: Drama movies - Get the average of Drama Movies

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average