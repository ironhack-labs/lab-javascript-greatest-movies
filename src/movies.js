// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(movies){
    let directors = movies.map(function(movie){
        return movie.director
      })
    return [...new Set(directors)]
}
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies){
    let dramas = movies.filter(movie => movie.director === "Steven Spielberg" && movie.genre.includes("Drama"));
    return dramas.length
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(movies){
    if(movies.length === 0) return 0;
    let ratedMovies = movies.filter(function(movie) {
        return movie.rate
    }); 
    let sum = ratedMovies.reduce(function(sum, movie){
        return sum + movie.rate;
    }, 0);
    let result = sum/movies.length;
    return Number(result.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movies){
    let drama = movies.filter(movie => movie.genre.includes("Drama"));
    return ratesAverage(drama);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies){
    return [...movies].sort(compare);
}

function compare(a, b) {
    const year1 = a.year;
    const year2 = b.year;
    if(year1 === year2){
        return compareAlphabetically(a, b);
    }
    return year1 - year2;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies){
    let sortedMovies = [...movies].sort(compareAlphabetically);
    let first20 = sortedMovies.slice(0, 20).map(movie => movie.title);
    return first20;
}

function compareAlphabetically(a, b){
    const title1 = a.title;
    const title2 = b.title;
    return title1.localeCompare(title2);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
