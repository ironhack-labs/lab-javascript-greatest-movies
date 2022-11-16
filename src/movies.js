// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    let directorsArr = moviesArray.map(movie => movie.director)
    // BONUS ITERATION
    // ---------------
    // let uniqueDirectors = [...new Set(directorsArr)];
    // return uniqueDirectors;
    return directorsArr;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {

    if (moviesArray.length === 0) {
        return 0;
    } else {
        let spielbergArr = moviesArray.filter(movie => movie.director === "Steven Spielberg" && movie.genre.includes("Drama"));
        return spielbergArr.length;
    };

}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) {
        return 0;
    } else {
        let scores, totalScores, onlyNumScores, sumScores;

        scores = moviesArray.map(movie => movie.score);
        totalScores = scores.length;
        // Remove anything that isn't a number (e.g. empty score)
        onlyNumScores = scores.filter(score => typeof(score) === "number");
        sumScores = onlyNumScores.reduce((score1,score2) => score1+score2,0);
        
        return parseFloat((sumScores/totalScores).toFixed(2));
    }
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMovies = moviesArray.filter(movie => movie.genre.includes("Drama"));
    return scoresAverage(dramaMovies); 
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
