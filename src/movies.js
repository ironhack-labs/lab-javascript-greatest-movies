// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(moviesArray) {
    let directorsArray = moviesArray.map(movie => movie.director)
    return directorsArray;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    let dramaSpielberg = moviesArray.filter( (movie) =>
        (movie.director === 'Steven Spielberg' && movie.genre.includes('Drama') ) 
     )
    return dramaSpielberg.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    let totalScore = moviesArray.reduce( 
        (acc, movie) =>
        acc + movie.score,
        0 );
        let Average = totalScore / moviesArray.length;
        Average = Number(Average.toFixed(2));
        return Average;
}


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
let dramaMovies = moviesArray.filter( (movie) => movie.genre.includes('Drama') )

let dramaScore = dramaMovies.reduce( 
    (acc, movie) =>
    acc + movie.score,
    0 );
    let dramaAverage = dramaScore / dramaMovies.length;
    dramaAverage = Number(dramaAverage.toFixed(2));
    return dramaAverage;

}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
