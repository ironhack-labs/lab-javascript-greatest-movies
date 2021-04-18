// Iteration 1: All directors? - Get the array of all directors.

/*const getAllDirectors = movies.map(function(movie){
    return movie.director;
})
*/

function  getAllDirectors (movie) {
    const directorName = movie.map((movie) => movie.director);
    return directorName;
}

console.log(getAllDirectors(movies));

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
//using filter

function howManyMovies(movie) {
    const dramaMovie = movies.filter((movie)=> movie.director === 'Steven Spielberg' && movie.genre.includes('Drama'));
    return dramaMovie.length;
}
console.log(howManyMovies(movies));

// Iteration 3: All rates average - Get the average of all rates with 2 decimals
// using reduce + Math.floor ? 

function ratesAverage(movie) {
    const rateMovies = movies.reduce(function(acc,movie) {return acc + movie.rate}, 0);
    return rateMovies.tofixed(2);
}
console.log(ratesAverage(movies));


// Iteration 4: Drama movies - Get the average of Drama Movies
// using reduce => how to access to drama ?



// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
// using sort

function orderByYear(movie) {
    const years = movies.sort((movie1, movie2)=> (movie1.year > movie2.year ? 1 : -1)) ;
    return years;
}

console.log(orderByYear(movies));

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
// using sort

function orderAlphabetically(movie) {
    const alphabetList = movies.sort((movie1, movie2)=> (movie1.title > movie2.title ? 1 : -1)) ;
    return alphabetList;
}

console.log(orderAlphabetically(movies));
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
