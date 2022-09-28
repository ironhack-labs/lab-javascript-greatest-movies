// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
/*const movies = require("./data");
const allMovies = require("./data");

console.log(allMovies);*/

function getAllDirectors(moviesArray) {
    return allDirectors = moviesArray.map((item) => {
        return item.director;
    });
};

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    if (moviesArray.length === 0) {
        return 0;
    };
    const filteredByGenre = moviesArray.filter(movie => movie.director.includes("Steven Spielberg") && movie.genre.includes("Drama"));
    return filteredByGenre.length;
};


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) {
        return 0;
    }
    const avgScore = moviesArray.reduce((accumulator, currentValue) => {
        let currentScore;
        if (!currentValue.score) {
            currentScore = 0;
        } else {
            currentScore = currentValue.score;
        }
        return accumulator + currentScore;
    }, 0) / moviesArray.length;
    return parseFloat(avgScore.toFixed(2));
}; 


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const filteredByGenre = moviesArray.filter(movie => movie.genre.includes("Drama"));
    if (filteredByGenre.length === 0) {
        return 0;
    }
    const avgDramaScore = filteredByGenre.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.score;
    }, 0) / filteredByGenre.length;
    return parseFloat(avgDramaScore.toFixed(2));
}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
