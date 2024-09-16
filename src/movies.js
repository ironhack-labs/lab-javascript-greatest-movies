// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {

    return moviesArray.map((nameDirector) => nameDirector.director);
     
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {

    const filteredMoviesDirector = moviesArray.filter((movie) => movie.director === "Steven Spielberg");
    const filteredMoviesGenre = filteredMoviesDirector.filter((movie) => movie.genre.includes("Drama"));
    return filteredMoviesGenre.length

}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    const average = moviesArray.reduce((cont, movie) => cont + movie.score / moviesArray.length, 0);
    return +average.toFixed(2);
}


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const moviesDrama = moviesArray.filter(movie => movie.genre.includes(`Drama`));
    const averageDrama = moviesDrama.reduce((cont, movie) => cont + movie.score / moviesDrama.length, 0);
    return +averageDrama.toFixed(2);


}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const orderMovies = moviesArray.slice(0, moviesArray.length);
      orderMovies.sort(function (a, b) {
        if (a.year > b.year){
            return 1;
        }
        if (a.year < b.year) {
            return -1;
        }
        return a.title.localeCompare(b.title);
      });
        return orderMovies;

}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const orderTitle = moviesArray.slice(0, 20);
    orderTitle.sort((a, b) => a.title.localeCompare(b.title)); 
    return orderTitle.map((onlyTitle) => onlyTitle.title);
    
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
