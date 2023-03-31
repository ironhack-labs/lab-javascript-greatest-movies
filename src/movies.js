// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(movies) {
    const arrayOfDirectors = movies.map(movie => movie.director);
    return arrayOfDirectors;
};

//reduce??? 1.1

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?


function howManyMovies(movies) {

    const directorStevenSpielbergDrama = movies.filter(
        directSpielbergDrama=>directSpielbergDrama.genre ==='Drama' && 
        directSpielbergDrama.director==='Steven Spielberg');
    const numberSpielbergDrama = directorStevenSpielbergDrama.length;
    return numberSpielbergDrama;

};


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {

    const totalScore = movies.reduce((acc, review) => acc + review.score, 0);
    const avgScore = totalScore/movies.length;
    const avgScoreRound= +avgScore.toFixed(2);
    return avgScoreRound;

};


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {

    const dramaMovies = movies.filter(drama=>drama.genre ==='Drama');
    const dramaScoreTotal = dramaMovies.reduce ((sum,review) => sum + review.score, 0);
    const avgDramaScore = dramaScoreTotal/dramaMovies.length;
    const avgDramaScoreRound = +avgDramaScore.toFixed(2);
    return avgDramaScoreRound;

}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {}


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
