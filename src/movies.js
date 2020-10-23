// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors() {

    let getAllDirectors = movies.map(movie => movie.director)
    return getAllDirectors;
}
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(array) {
    const dramaSteven = array.filter(movie =>
        movie.director === "Steven Spielberg" && movie.genre.includes("Drama"))
    console.log(dramaSteven);
    return dramaSteven.length;

}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function allRatesAverage(array) {
    if (array.length === 0) {
        return 0;
    }
    const allRatesAverage = array.reduce((acc, movie,index) => {
        if (!isNaN(movie.rate)) {
            console.log("que es veu acc: ", acc);
            console.log("que es veu movie rate: ", movie.rate);
            console.log("que es veu index: ", index);
            console.log("suma de acc i movie.rate:0,", acc + movie.rate);
            return acc + movie.rate;
            
        }
       
    
    }, 0);

    return Number((allRatesAverage / array.length).toFixed(2));


}
// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(array) {
    const dramaRating = array.filter(movie => movie.genre.includes("Drama"))
    return allRatesAverage(dramaRating);

}
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(array) {
    const orderByYear = array.sort((movie1, movie2) => {
        return movie1.year - movie2.year;
    })
    console.log("Ordered movies array", orderByYear)

}
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
