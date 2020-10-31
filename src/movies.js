// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors (arr) {
    return arr.map(movie => movie.director)
}
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies (arr) {
    if(arr.length === 0) {
        return 0;
    } else {
        let result = 0;
        let spielbergMovies = arr.filter(movie => movie.director === "Steven Spielberg" && movie.genre.includes("Drama"))
        result += spielbergMovies.length
        return result;
    }    
}
// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(arr) {
    if(arr.length === 0) {
        return 0;
    } else {
        const total = arr.reduce((acc, el) => {
            if(typeof el.rate !== "number") {
                return acc;
            } else {
                return acc + el.rate;
            } 
        }, 0);
        return Math.round(total / arr.length * 100) / 100;
    }
}


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate (arr) {
    if(arr.length === 0) {
        return 0;
    } else {
        const total = arr.reduce((acc, el) => {
            if(el.genre.includes("Drama")) {
                acc += el.rate
            } 
            return acc;
        }, 0);
        let dramaMovies = arr.filter(dramaMovies => dramaMovies.genre.includes("Drama"))
        return Math.round(total / dramaMovies.length * 100) / 100;
    }
}
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
