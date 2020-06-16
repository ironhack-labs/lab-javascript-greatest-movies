// Iteration 1: All directors? - Get the array of all directors.
getAllDirectors = (array) => array.map(film => film.director);
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
howManyMovies = (array) => {
    var spielbergMovies = array.filter(film => (film.director === "Steven Spielberg") && (film.genre.indexOf("Drama") >= 0));
    return spielbergMovies.length;
};
// Iteration 3: All rates average - Get the average of all rates with 2 decimals
ratesAverage = (array) => {
    var newMovies = array.filter(function(film){
    return film.rate >= 0});
    if (newMovies.length === 0){
        return 0;
    } else {
    var total = newMovies.reduce((accumulator, currentValue) => accumulator + currentValue / array.length);
    };
    return Number(total.toFixed(2));
};
// Iteration 4: Drama movies - Get the average of Drama Movies
dramaMoviesRate = (array) => {
    var dramaMovies = array.filter(film => (film.genre.indexOf("Drama") >= 0);
    ratesAverage(dramaMovies);
};
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
orderByYear = (array) => {
var moviesByYear = array.sort((a.year, b.year), b.year - a.year);
return moviesByYear;
};
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
orderAlphabetically = (array) => {
    var moviesAlphabetically = array.title.sort();
    return moviesAlphabetically.slice(0,20);
};
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
