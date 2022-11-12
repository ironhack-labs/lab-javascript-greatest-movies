// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const allDirectors = moviesArray.map(function (value) {
        return value.director;
    })
    return allDirectors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const moviesByDirector = moviesArray.filter( function (value){
    return value.director === 'Steven Spielberg' && value.genre.includes('Drama');
    })
    return moviesByDirector.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresArray (moviesArray){
    const allScores = moviesArray.map( function (value){
        return value.scores;
    })
    return allScores;
}
function scoresAverage(moviesArray) {
    
    const totalScore = allScores.reduce((accScore, currTotal) => accScore + currTotal);
    return totalScore/allScores.length;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    let orderedArray = [...moviesArray];
    orderedArray.sort(function(a,b){
        return b.score - a.score;
    })
    return orderedArray;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    let orderedByTitleArray = [...moviesArray];
    orderedByTitleArray.sort()
    return orderedByTitleArray;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
