// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const mixedDirectorsList = [];
    
    return  moviesArray.map(movie => {
        
        if (!mixedDirectorsList.includes(movie.director)) {
            
            mixedDirectorsList.push(movie.director);
            
            return {director: movie.director};
        }
    }).filter(director => {
        return director !== undefined;
    })
}
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    let result = 0;
    return result += moviesArray.map(movie => {
        return movie;
    }).filter(movie => {
        return movie.genre.includes("Drama") && movie.director === "Steven Spielberg";
    }).length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) {
        return 0
    }
    let result = 0;
    return result + Number((moviesArray.map(movie => {
        if (movie.score === undefined) {
            return 0
        }
        return movie.score;
    }).reduce((accumulator, currentValue) => accumulator + currentValue, 0) / moviesArray.length).toFixed(2))
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
