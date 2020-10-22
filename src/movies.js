// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(movies) {
    return movies.map(movie => movie.director);   
}  


// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. 
// How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(movies) {

    let sumOfMovies = movies.filter(function(movie) {
        if (movie.director === "Steven Spielberg" && movie.genre.includes("Drama")) {
            return true;
        }
    });
    return sumOfMovies.length;
}


// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movies) {

    let avRate = movies.reduce(function (acc, movie) {
        if (movie.rate) {
            return acc + movie.rate
        } else {
            return acc;
        }
    }, 0);

    if (avRate / movies.length) {
        return Math.round((avRate/movies.length) * 100) / 100;
    } else {
        return 0;
    }
}

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movies) {

    let sumOfDramaMovies = movies.filter(function(movie) {
        if (movie.genre.includes("Drama")) {
            return true;
        }
    });

    return ratesAverage(sumOfDramaMovies)

}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(movies) {

   let sortedMovies = movies.slice(0).sort(function (a, b) {
       return a.year - b.year;
   });
   
   return sortedMovies;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
