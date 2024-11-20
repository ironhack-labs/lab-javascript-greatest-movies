// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(moviesArray){
    const directors = moviesArray.map(movie => movie.director);
    return directors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const stevenSpielberg = moviesArray.filter(movie => movie.director === "Steven Spielberg");
    const dramaMovies = stevenSpielberg.filter(movie => movie.genre.includes("Drama"));
    return dramaMovies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {

    if(!moviesArray.length) return 0;
    const scores = moviesArray.map(movie => movie.score);
    const average = (scores.reduce((acc, curr) => acc + curr, 0) / scores.length);
    return average
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMovies = moviesArray.filter(movie => movie.genre.includes("Drama"));
    if(!dramaMovies.length) return 0;
    const scores = dramaMovies.map(movie => movie.score);
    const average = scores.reduce((acc, curr) => acc + curr, 0) / scores.length;
    return average ;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const orderedMovies = moviesArray.sort((a, b) => a.year - b.year);
    return orderedMovies;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const orderedMovies = moviesArray.sort((a, b) => a.title.localeCompare(b.title));
    return orderedMovies.slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    const moviesWithMinutes = moviesArray.map(movie => {
        const hours = movie.duration.split(":")[0];
        const minutes = movie.duration.split(":")[1];
        const totalMinutes = parseInt(hours) * 60 + parseInt(minutes);
        return {
            ...movie,
            duration: totalMinutes
        }
    }
    );
    return moviesWithMinutes;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
    const years = moviesArray.map(movie => movie.year);
    const uniqueYears = [...new Set(years)];
    const bestYear = uniqueYears.reduce((acc, curr) => {
        const movies = moviesArray.filter(movie => movie.year === curr);
        const scores = movies.map(movie => movie.score);
        const average = scores.reduce((acc, curr) => acc + curr, 0) / scores.length;
        return acc > average ? acc : average;
    }
    , 0);
    return bestYear;
}
