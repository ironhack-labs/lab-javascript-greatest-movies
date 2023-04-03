// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
const allMovies = require("./data.js")

function getAllDirectors(moviesArray) {
    const directors = moviesArray.map((item) => {
        return item.director;
    });
return directors;
    console.log(getAllDirectors);
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(moviesArray) {
const numberMovies = moviesArray.filter((item) => {
    return item.director === ("Steven Spielberg") && item.genre.includes("Drama");
});

return numberMovies.length;
}
console.log(howManyMovies);


// Iteration 3: All scores average - Get the average of all scores with 2 decimals

function scoresAverage (moviesArray)  {
if (moviesArray.length === 0){
    return 0;
}
const scoresAvg =(moviesArray.reduce((accumulator,currentValue) => {
    if (currentValue.score) {
        return accumulator + currentValue.score;
    }
}, 0)/moviesArray.length).toFixed(2);

return parseFloat(scoresAvg);
}


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    let allDrama = moviesArray.filter(movie => movie.genre.includes('Drama'))
    return scoresAverage(allDrama);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const orderByYear = moviesArray.map((movie) => movie);
    orderByYear.sort((a,b) => {
        if (a.year === b.year) {
            return a.title.localeCompare(b.title);
        }
        return a.year - b.year;
    })
    return orderByYear;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    return moviesArray.sort((a,b) => a.title.localeCompare(b.title)).slice(0,20).map((movie) => movie.title);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
