// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(movies) {
    return movies.map ( movie => movie.director )
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
    const stevenMovies = movies.filter(m => m.genre.includes("Drama") && m.director === "Steven Spielberg")
    return stevenMovies.length;
};

// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(movies) {
    const totalRate = movies.filter(movie => movie.rate !== undefined).reduce((acc, movie) => acc + movie.rate, 0);
    const avgRate = totalRate / movies.length;
    if (movies.length === 0) {
        return 0;
    } else {
        return Math.round(avgRate*100)/100;  
    }  
}

console.log(ratesAverage(movies));

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(movies) {
    const dramaRate = movies.filter(movie => movie.genre.includes("Drama")).reduce((acc, movie) => acc + movie.rate, 0);
    const dramaAvgRate = dramaRate / movies.filter(movie => movie.genre.includes("Drama")).length;
    if (movies.filter(movie => movie.genre.includes("Drama")).length === 0) {
        return 0;
    } else {
        return Math.round(dramaAvgRate*100)/100;  
    }  
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
    const alphaOrder = movies.sort(function(a,b) {
        if (a.year > b.year) {
            return 1;
        }
        if (b.year > a.year) {
            return -1;
        }
        return a.title.localeCompare(b.title);
    });
    return alphaOrder;
}

console.log(orderByYear(movies));

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average