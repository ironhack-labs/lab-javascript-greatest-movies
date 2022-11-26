// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    return moviesArray.map((movie) => movie.director);
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    return moviesArray.filter((movie) => movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')).length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    let totalScores = moviesArray
        .filter((movie) => movie.score != undefined)
        .reduce((total, movie) => total + movie.score, 0);
    let scoresAverage = moviesArray.length === 0 ? 0 : totalScores / moviesArray.length;
    return Math.round(scoresAverage * 100) / 100; //returns 2 decimals
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    let dramaMovies = moviesArray.filter((movie) => movie.score != undefined && movie.genre.includes('Drama'));
    let dramaScore = dramaMovies.reduce((total, movie) => total + movie.score, 0);
    let dramaScoresAverage = dramaMovies.length === 0 ? 0 : dramaScore / dramaMovies.length;
    return Math.round(dramaScoresAverage * 100) / 100;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
//     return moviesArray.map((movie) => {
//         if (movie.duration.includes('h') && movie.duration.includes('min')) {
//             let durationArr = movie.duration.split(' ');
//             let hours = parseInt(durationArr[0]);
//             let minutes = parseInt(durationArr[1]);
//             return (hours * 60) + minutes;
//         } else if (movie.duration.includes('h') && !movie.duration.includes('min')) {
//             return parseInt(movie.duration) * 60;
//         } 
//     });
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
