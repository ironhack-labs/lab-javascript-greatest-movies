var movies = require('./data');

// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(movies){
    // let uniqueArray = [];
    const directors = movies.map(movie => movie.director); //creates new array of director names
    // const uniqueDirectors = directors.filter(director => uniqueDirectors.includes(director) ); //filters out repeated director names
    return directors;
}
console.log(getAllDirectors(movies));

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies){
    const spielbergDramas = movies.filter(movie => movie.director === "Steven Spielberg" && movie.genre.includes("Drama"));
    return spielbergDramas.length;
}

console.log(howManyMovies(movies));

// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(movies){
    const ratingsArray = movies.map(movie => movie.rate);
    const ratingSum = ratingsArray.reduce((accumulator, current) => accumulator + current);
    let averageRating = ratingSum / ratingsArray.length;
    return parseFloat(averageRating.toFixed(2));
}
console.log(ratesAverage(movies));

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(movies){
    const dramaMovies = movies.filter(movie => movie.genre.includes("Drama"));
    const dramaRatings = dramaMovies.map(movie => movie.genre.includes('Drama') ? movie.rate : 0);
    const dramaRatingSum = dramaRatings.reduce((accumulator, current) => accumulator + current);
    let dramaRatingAve = dramaRatingSum / dramaMovies.length;
    return parseFloat(dramaRatingAve.toFixed(2));
}
console.log(dramaMoviesRate(movies));

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies){

}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average