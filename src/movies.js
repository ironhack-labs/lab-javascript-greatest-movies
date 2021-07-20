// Iteration 1: All directors? - Get the array of all directors.

const { title } = require('process');
const movies = require('./data');

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
    return movies.map((movies) => {
        return movies.director;
    });
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

// function howManyMovies(arrDramaMovies) {
//     getAllDirectors === "Steven Spielberg"
//     return movies.filter(movies) => {
//         return movies.genre ==="Drama";
//     });
// }

function howManyMovies(array) {

    return array.filter((movie) => {
        // the filter expects a condition to return either true or false
        // if false is returned, the value is NOT kept
        // if true is returned the value gets kept
        if (movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')) {
            return true;
        }
    }).length;
}
//const arrayOfMovies = 

// Iteration 3: All scores average - Get the average of all scores with 2 decimals

function scoresAverage(movie) {

    if (movie.length === 0) {
        return 0;
    }
    const moviesScored = movie.reduce((acc, el) => {
        if (el.score) {
            return acc + el.score;
        } else {
            return acc;
        }
    }, 0);
    return roundto2Decimals(moviesScored / movie.length);
}

function roundto2Decimals(num) {
    return Math.round(num * 100) / 100;
}
//function Statement

//console.log(roundto2Decimals(averageScore));

// const totalWDCohortHeightAverage =
//   students.reduce((accumulator, el, i, arr) => {
//     if (el.cohort === "WD") {
//       return accumulator + el.height;
//     } else {
//       return accumulator;
//     }
//   }, 0) / webDevStudents.length;

//problem: take all scores, add together. the get 


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArr) {
    const dramaMoviesOnly = moviesArr.filter((movie) => {
        if (movie.genre.includes('Drama')) {
            return true;
        }
    });
    if (!dramaMoviesOnly.length) {
        return 0;
    }
    const dramaMoviesScored = dramaMoviesOnly.reduce((acc, el) => {
        if (el.score) {
            return acc + el.score;
        } else {
            return acc;
        }
    }, 0);
    return roundto2Decimals(dramaMoviesScored / dramaMoviesOnly.length);
}

// function roundto2Decimals(num) {
//     return Math.round(num * 100) / 100;
// }

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arr) {
    const moviesInOrder = arr.slice().sort((movieA, movieB) => {
        if (movieA.year === movieB.year) {
            return movieA.title.localeCompare(movieB.title);
        }
        return movieA.year - movieB.year;
    });
    return moviesInOrder;
}

//localeCompare is use just for strings
//???  return movieA.year - movieB.year;

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

//order //order movies alphabetically using title
//print titles of firts 20

//function recieve array and return 20 titles, alphab.
//return title of each movie + if the arrey <20 movies, return them

function orderAlphabetically(movieAlpha) {
    const sortedAlphabetically = movieAlpha.slice(0, 20).sort((title1, title2) => {
        return title1.title.localeCompare(title2.title); //compare strings
    });
    return sortedAlphabetically;

    const eachMovie20 = sortedAlphabetically.map((element) => {
        if (sortedAlphabetically.length < 20)
            return element.title;
    });
    return eachMovie20;
}


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
    module.exports = {
        getAllDirectors,
        howManyMovies,
        scoresAverage,
        dramaMoviesScore,
        orderByYear,
        orderAlphabetically,
        turnHoursToMinutes,
        bestYearAvg,
    };
}