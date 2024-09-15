const movies = require('../src/data');
// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    let getAllDirectors = moviesArray.map(movie => movie.director);
    return getAllDirectors;
}

//console.log(getAllDirectors(movies))

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
     let dramaSpielberg = moviesArray.filter(movie => movie.director == 'Steven Spielberg' && movie.genre.includes('Drama'));
    return dramaSpielberg.length;
    }

//console.log(howManyMovies(movies))

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    let sum = moviesArray.reduce((a, b) => {
        if (b.score !== '' && !b.score && b.score === false){
            return a + b.score;
        }
    }, 0);
    return sum / moviesArray.length;
}

//console.log(scoresAverage(movies))

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    let dramaMovies = moviesArray.filter((el) => el.genre.includes('Drama'));
    let sum = dramaMovies.reduce((a, b) => {
        return a + b.score / dramaMovies.length;
    }, 0);
    return sum;
}

//console.log(dramaMoviesScore(movies));

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    let newArr = [...moviesArray];
    return newArr.sort((a, b) => a.year - b.year);
}
//console.log(orderByYear(movies));

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    return moviesArray.sort((x, y) => 
    (x.title < y.title ? -1 : 0)).slice(0, 20);
}
console.log(orderAlphabetically(movies));

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
