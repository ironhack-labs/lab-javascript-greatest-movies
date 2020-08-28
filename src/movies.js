// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
    const directors = movies.map(function (movie) {
        return movie.director;
    })
    return directors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(movies) {
    if (movies.length === 0) return 0;
    const filmSpildberg = movies.filter(function (movie) {
        return movie.director === "Steven Spielberg" && movie.genre.includes("Drama");
    })
    console.log(filmSpildberg);
    return filmSpildberg.length;
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movies) {
    if (movies.length === 0) return 0;
    const total = movies.reduce(function (accumulator, movie) {
        if (movie.rate === "" || !movie.rate) return accumulator;
        console.log(accumulator + movie.rate);
        return accumulator + movie.rate;
    }, 0)
    const average = total / movies.length;
    return Number(average.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movies) {
    if (movies.length === 0) return 0;
    const drama = movies.filter(function (movie) {
        return movie.genre.includes('Drama');
    })
    const average = ratesAverage(drama);
    return Number(average.toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(movies) {
    const copy = [...movies];
    const sort = copy.sort(function (movie, movie2) {
        if (movie.year == movie2.year) return (movie.title < movie2.title) ? -1 : (movie.title > movie2.title) ? 1 : 0;
        return movie.year - movie2.year;
    })
    console.log(sort)
    return sort;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movies) {
    const copy = [...movies];
    const sort = copy.sort(function (movie, movie2) {
        return (movie.title < movie2.title) ? -1 : (movie.title > movie2.title) ? 1 : 0;
    })
    const titleOnly = sort.map(function (movie) {
        return movie.title;
    })
    const only20 = titleOnly.slice(0, 20);
    console.log(only20);
    return only20.sort();
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average