// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
/*function getAllDirectors(moviesArray) {
    let directors = [];

    directors = movies.map(function(movie){
        return movie.director;
    }) 
    console.log(directors);
    return directors;
}*/

function getAllDirectors(moviesArray) {
    return moviesArray.map(function(movie){
        return movie.director;
    });
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    // Filter the array to get only the drama movies directed by Steven Spielberg
    const spielbergDramas = moviesArray.filter(function(movie) {
        return movie.director === 'Steven Spielberg' && movie.genre.includes('Drama');
    });
    
    // Return the number of drama movies directed by Steven Spielberg
    return spielbergDramas.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    let sum = 0;
    for (let i = 0; i< movies.length; i++) {
        sum = sum + movies[i].score;

    }
    let average = sum /movies.length;
    console.log(average);
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
