// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
    const arrayOfDirectors = movies.map(function(oneMovie) {
        return oneMovie.director;
    })
    return arrayOfDirectors
}
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
    const spielbergMovies = movies.filter(function(movie) {
        return movie.director === "Steven Spielberg" && movie.genre.includes("Drama");
    return spielbergMovies.length;
}
// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(movies) {
    let overallAverage = movies.reduce((acc, next) =>{
        return next.rate? acc + next.rate : acc +0;
    },0);
    overallAverage = (average/movies.length) || 0;
   return Number.parseFloat(average.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(movies) {
    let dramaMovies = movies.filter((value, index, array)=> value.genre.includes("Drama"));
    return ratesAverage(dramaMovies);
}
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies){
    let newArray = movies.slice();
    return newArray.sort((a,b)) => {
        return a.year===b.year ? a.title.localeCompare(b.title) : a.year-b.year;
    });
}
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies){
    let newArray = movies.slice();
    newArray.sort((a,b) => {
        return a.title.localeCompare(b.title);
    });
    return newArray.slice(0,20).map(value => value.title);
}
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
