// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?


function getAllDirectors(moviesArray) {
    const directorsArray = moviesArray.map (function(element) {
        return element.director;
    });
    return directorsArray;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    let newArray = moviesArray.filter(function (element) {
        ((element.director === 'Steven Spielberg') && (element.genre.indexOf('drama') !== -1));
    });
    return newArray.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    const scoresArray = moviesArray.map(function (element) {
        return element.score;
    });
    let elementScoreSum = 0;
    for (let i=0; i<scoresArray.length; i++) {
        elementScoreSum += scoresArray[i];
    }
    let average = (elementScoreSum/scoresArray.length).toFixed(2);
    return average;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const sum = moviesArray.reduce((accumulator, currentValue) {
        return accumulator + currentValue.score;
    }, 0);
    const average = (sum/moviesArray.length).toFixed(2);
    return average;
}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
