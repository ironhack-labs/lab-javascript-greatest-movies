// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(movies) {
    const directors = movies.map(function (movie) {
        return movie.director
    })
    return directors
};


// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(movies) {
    if (movies.length === 0) return 0;
    const moviesFilter = movies.filter(movie => movie.director === "Steven Spielberg" && movie.genre.includes("Drama"))
    return moviesFilter.length
}


// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movie) {
    if (movie.length === 0) return 0;
    const avgRate = movies.reduce((acc, elm) => {
        return acc + (elm.rate || 0)
    }, 0);

    return Math.round((avgRate / movies.length * 100) / 100);

}

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movie) {
    if (movie.length === 0) return 0;
    const dramaMovies = movies.filter(movie => movie.genre.includes("Drama"))

}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(movie) {
    const movieOrder = [...movies].sort((a, b) => {
        if (a.year === b.year) {
            return a.title.localeCompare(b.title);
        }
        return a.year - b.year
    })
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

// function orderAlphabetically(movies) {
//     const orderAlph = movies.map((Element) =>
//     }
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average