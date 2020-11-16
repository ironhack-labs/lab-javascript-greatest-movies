var { movies } = require('./data.js');
// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(arr){
    const allDirectors = arr.map(function (movie) {
        return movie.director;
    });    
    return allDirectors;
}

//Kate: tried to create a copy of movies in order to push into a new array but didn't manage


// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(arr) {
    const dramas = arr.filter(function(movie){
        //console.log(movie.director + ':' + movie.genre) 
        console.log(movie.director === "Steven Spielberg" && movie.genre.indexOf("Drama")!==-1)
       return (movie.director === "Steven Spielberg" && movie.genre.indexOf("Drama")!==-1)   
    });

    return dramas.length;
}
console.log(howManyMovies(movies))


// Iteration 3: All rates average - Get the average of all rates with 2 decimals

// function ratesAverage(arr) {
//     const totalRates = arr.reduce(acc, rate) {
//        acc += movies.rate;
//         return acc;
//     , 0);
//       let averageRates = totalRates / movies.length;
//       return averageRates;
//     }

// Iteration 4: Drama movies - Get the average of Drama Movies

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
