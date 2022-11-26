// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    return moviesArray.map((movie) => movie.director)
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const dramaSteveMovie = moviesArray.filter(filDirectorGenre => {
        if (filDirectorGenre.director == 'Steven Spielberg' && filDirectorGenre.genre.includes('Drama')) 
        return filDirectorGenre;
    });
    return dramaSteveMovie.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals - NO SÉ CÓMO HACER EL APARTADO "should return average even if one of the movies does not have score"
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0 ) {
        return 0;
    }
    const totScore = moviesArray.reduce((accumulator, movie) => {
        return accumulator + movie.score;
    }, 0);
    const average = (totScore / moviesArray.length);
    return Number(average.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMovie = moviesArray.filter(GenreDrama => {
        if (GenreDrama.genre.includes('Drama')) 
        return GenreDrama;
    });
    return scoresAverage(dramaMovie);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order) - NO SÉ CÓMO HACER "should return a new array, not mutate the original one" Y "should order movies with the same year by their title, alphabetically"
function orderByYear(moviesArray) {
   const orderYear= moviesArray.sort((a, b) => {
    return a.year - b.year;
});
return orderYear;
    
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles - NO SÉ CÓMO HACER "should return a new array, not mutate the original one"
function orderAlphabetically(moviesArray) {
    return moviesArray.map(filter => filter.title).sort().slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
