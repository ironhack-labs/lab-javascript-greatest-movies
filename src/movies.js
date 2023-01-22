// const movies = require("./data.js")

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(moviesArray) {
    const allDirectors = moviesArray.map((movie) => {
    return movie.director;
    })
    console.log(allDirectors);
    return allDirectors;
}

// Attempt at solving the bonus  (doesn't seem to work: keep on getting the error message : directorsOnce is not defined...)
// function getAllDirectorsOnce(allDirectors) {
//     const directorsOnce = allDirectors.filter((director) => {
//         if (directorsOnce.includes(director) === true) {
//             directorsOnce.pop(director);
//         }
//     }) 
//     return directorsOnce;
// }
// console.log(getAllDirectorsOnce(directorsOnce));



// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const dramaDirectedBySS = moviesArray.filter((movie) => {
        return movie.director.includes('Steven Spielberg') && movie.genre.includes('Drama')
        })
        return dramaDirectedBySS.length;
 }
console.log(howManyMovies);


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
if (moviesArray.length === 0) {
    return 0;
} 
   const scoreSum = moviesArray.reduce((accumulator, value) => {
        if (value.score) {
            return accumulator + value.score;
        }
        else {
            return accumulator;
        }
        }, 0);
    return Math.round((scoreSum/moviesArray.length)*100)/100;;
}

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesScore(moviesArray) {
    const dramaScore = moviesArray.filter((movie) => 
    movie.genre.includes("Drama"));
        return scoresAverage(dramaScore);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const yearNewArr = moviesArray.slice();
    const yearOrder = yearNewArr.sort((a, b) => {
        if (a.year < b.year) {
            return -1;
        } if (a.year > b.year) {
            return 1;
        } if (a.year === b.year) {
            if (a.title < b.title) {
                return -1;
            } else {
                return 1;                    
            }
        }
    });
    return yearOrder
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const alphaNewArray = moviesArray.map(movie => movie.title);
    const alphaOrder = alphaNewArray.sort();
    return alphaOrder.slice(0, 20);
}


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
// function turnHoursToMinutes(moviesArray) {


// }

function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
// function bestYearAvg(moviesArray) {}
function bestYearAvg(moviesArray) {}
