//const movies = require('./data.js')

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
   return moviesArray.map( e => e.director)
}
//console.log(getAllDirectors(movies))

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    return moviesArray.filter( e => e.director == "Steven Spielberg" && e.genre.includes('Drama')).length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if ( !moviesArray.length) { return 0}
    let avg0 = moviesArray.filter( e => e.score )
    let avg  = avg0.reduce( (acc, curr) => (acc + curr.score), 0) / moviesArray.length;
    let avg2 = avg.toFixed(2);
    return Number(avg2);
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    let avgDrama = moviesArray.filter( e => e.genre.includes('Drama') )
    return scoresAverage(avgDrama)
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const arr = JSON.parse(JSON.stringify(moviesArray)); //Deep copy
    return arr.sort((a, b) => {
        if (a.year !== b.year ) { 
            return a.year - b.year;
        } else {
            if (a.title < b.title) return -1;
            if (a.title > b.title) return 1;
            if (a.title === 0) return 0;
        }
    })
}
//console.log(orderByYear(movies))

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const arr = JSON.parse(JSON.stringify(moviesArray));
    if (arr.length > 20) {
        return arr.map( e => e.title).sort().slice(0, 20);
    } else {
        return arr.map( e => e.title).sort();
    }
}
//console.log(orderAlphabetically(movies));
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
