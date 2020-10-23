// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies){
    return movies.map(movie => movie.director);
};
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(movies){
    const spielbergsDramas = 
    movies.filter(movie => movie.director === "Steven Spielberg" && 
    movie.genre.includes("Drama"));
    return spielbergsDramas.length;
};

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movies){
    if (!movies.length) return 0;

    const moviesRates = movies.map(movie => movie.rate).map(rate => {
        if (typeof rate !== "number") {
            return 0;
        } else {
            return rate;
        }
    });

    const ratesTotal = moviesRates.reduce((acc, rate) => acc += rate)

    return ratesTotal / moviesRates.length;
}





// const sum = euros.reduce((total, amount) => total + amount)

// Iteration 4: Drama movies - Get the average of Drama Movies

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
