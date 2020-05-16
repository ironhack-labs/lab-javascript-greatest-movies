// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(movies){ 
    return movies.map(function(movie){
        return movie.director;
    })
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(movies) {
   
    let stevensMovies = movies.filter(function(StevenS) {
         return (StevenS.director === "Steven Spielberg" && StevenS.genre.includes("Drama")) ;
    })
    return stevensMovies.length;
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(rates) {
    if(rates.length) {
        let totalRate = rates.reduce(function(accumulator, current){
            if (!current.rate) {
                return accumulator + 0;
            }
            return accumulator + current.rate;
        }, 0) /rates.length;
        return Number(totalRate.toFixed(2));
    }
    return 0;
}

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMovies(movies) {
    let allDramaMovies = movies.filter(function(movie) {
        return movie.genre.includes("Drama");
    })
    return allDramaMovies;
}

function dramaMoviesRate(movies) {
    let dramaMoviesSelected = dramaMovies(movies);
    return ratesAverage(dramaMoviesSelected);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear() {
    return;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically() {
    return;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
