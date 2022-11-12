function getAllDirectors(moviesArray) {
    const directorarr = moviesArray.map(function (directors){
        return directors.director;
    });
    return directorarr
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const spielbergMovies = moviesArray.filter(function (moviesArray) {
        return moviesArray.director === "Steven Spielberg" && moviesArray.genre.includes("Drama");
    });
    return spielbergMovies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
// should return average even if one of the movies does not have score
function scoresAverage(moviesArray) {
    if (!moviesArray.length) {
        return 0;
    } else {
        const avArray = moviesArray.filter(movie => movie.score || movie.score > 0)
        const reducedArray = avArray.reduce((sum, movieScore) => sum + movieScore.score, 0)
        return Math.round((reducedArray / avArray.length) * 100) / 100
        }
    }


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMovies = moviesArray.filter(function (moviesArray) {
        return moviesArray.genre.includes("Drama");
    });
    if (!dramaMovies.length) {
        return 0;
    } else {
        const reducedArray = dramaMovies.reduce((sum, movieScore) => sum + movieScore.score, 0)
        return Math.round((reducedArray / dramaMovies.length) * 100) / 100
        }
    }

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {

}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {

}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {


}
