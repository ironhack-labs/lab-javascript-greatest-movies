// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(arr) {
    var mapped = arr.map(function (movie) {
        return movie.director;
    });
    return mapped;
}
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(array) {
    let filteredDirectors = array.filter(function (movie) {
        return (
            movie.director.includes("Steven Spielberg")
            && movie.genre.includes("Drama")
        )
    });
    return filteredDirectors.length;
}
// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(array) {
    if (array.length === 0) 
        return 0;
    let sumRate = array.reduce(function (accumulator, item) {
        if (item.rate === undefined) {
            return accumulator;
        }
        return accumulator + item.rate;
    }, 0);
    let totalMovies = array.length;
    let totalRate = parseFloat((sumRate / totalMovies).toFixed(2));
    return totalRate;
}
// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(array) {
    let dramaMovies = array.filter(function (item) {
        return item.genre.includes("Drama");
    });
    if (dramaMovies.length === 0) {
        return 0;
    }
    let sumRate = dramaMovies.reduce(function (accumulator, item) {
        if (item.rate === undefined) {
            return accumulator;
        } return accumulator + item.rate;
    }, 0);
    let totalDramaMovies = dramaMovies.length;
    let totalRate = parseFloat((sumRate / totalDramaMovies).toFixed(2));
    return totalRate;
}
//Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(array) {
        let moviesByYear = array.sort((a, b) => a.year < b.year) 
        return moviesByYear; 
}
//=================================================================
function orderByYear(arr){

    movies.sort(function(a, b) { //comprobado que ordena
        return a.year - b.year;
        
    });
    return movies
    
}
console.log(movies.year);
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average


