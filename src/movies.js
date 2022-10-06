// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(moviesArray) {
    const directors = moviesArray.map((arr) =>
    arr.director)
    return directors;
    }

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
const steve = moviesArray.filter ((arr) => arr.director === "Steven Spielberg" && arr.genre.includes("Drama"))
return steve.length;
}
 
// Iteration 3: All scores average - Get the average of all scores with 2 decimals


function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) {
        return 0; }
    let average = moviesArray.reduce ((acc, val) => acc + val.score,0);
        return Math.round(average/moviesArray.length * 100) / 100
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    if (moviesArray.length === 0) {
        return 0; 
     } else if (moviesArray.filter ((arr) => arr.genre.includes("Drama")).length === 0) {
        return 0;
      } else {
        let drama = moviesArray.filter((movie) => movie.genre.includes("Drama"));
        const average2 = drama.reduce((acc, val) => 
        { return acc + val.score; }, 0) / drama.length
        return average2
      }
    }

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    let order = moviesArray.slice(moviesArray).sort((a, b) => a.year - b.year)
    return order;
}

    
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    let alphabetic = moviesArray.slice(moviesArray).sort((a,b) => a.title + b.title)
    return alphabetic;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
