/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arr) {
    let sArr = [...arr];
    return sArr.sort((movie1, movie2) => movie1.year > movie2.year ? 1 : -1);
}
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct
function howManyMovies(arr) {
    return arr.filter(movie => movie.director === `Steven Spielberg` && movie.genre.indexOf(`Drama`) !== -1).length;
}
// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arr) {
    let arrCpy = [...arr];
    return arrCpy.sort((movie1, movie2) => movie1.title.localeCompare(movie2.title) === 1 ? 1 : -1).map((movie, idx) => idx < 20 ? movie.title : null).filter(movie => movie !== null);

}

// Iteration 4: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(arr) {
    if (arr.length > 0) {
        return Math.round(arr.reduce((acc, movie) => {
            let rate = typeof movie.rate === `number` ? movie.rate : 0;
            return acc + rate;
        }, 0) / arr.length * 100) / 100;
    } else {
        return 0;
    }
}
// Iteration 5: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(arr) {
    let drama = arr.filter(movie => movie.genre.indexOf(`Drama`) !== -1);
    return ratesAverage(drama);
}
// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average