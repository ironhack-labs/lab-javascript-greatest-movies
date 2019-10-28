/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(arr) {
    let newMovies = [...arr];
    newMovies.sort(function (movie1, movie2) {
        if (movie1.year > movie2.year) {
            return 1
        } else {
            return -1
        }
    })
    return newMovies;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

function howManyMovies(arr) {
    return arr.filter(movie => movie.director === "Steven Spielberg" && movie.genre.includes("Drama")).length;

}
// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arr) {
    let moreMovies = [...arr];
    moreMovies = moreMovies.sort(function (movie1, movie2) {
        return movie1.title.localeCompare(movie2.title)}).map(function (movie) {
        return movie.title;
    });
    return moreMovies.splice(0,20);
}

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

// Iteration 5: Drama movies - Get the average of Drama Movies

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average