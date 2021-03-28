// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(movies) {
    let nameDirectors = movies.map((movie) => {
        return movie.director;
    });
    return nameDirectors;
}
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
    let dramaMovies = movies.filter((movie) => {
        if (movie.director === "Steven Spielberg" && movie.genre.includes("Drama")) {
            return true;
        }
    });
    return dramaMovies.length;
}
howManyMovies(movies);
// Iteration 3: All rates average - Get the average of all rates with 2 decimals
// 1. map array numeros
// 2. variable con suma de todos reduce
// 3. division entre numero total


function ratesAverage(movies) {

    let total = 0;
    if (movies.length === 0) {
        return 0;
    }
    for (let keys in movies) {
        console.log(movies[keys].rate)
    }
    for (i = 0; i < movies.length; i++) {
        total += movies[i].rate;
    }

    return (parseFloat((total / movies.length).toFixed(2)));
}

ratesAverage(movies);


// ratesAverage(movies);
// Iteration 4: Drama movies - Get the average of Drama Movies
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average