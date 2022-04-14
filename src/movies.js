// The `movies` array from the file `src/data.js`.
//console.log('movies: ', movies);

const movies = require('./data');

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(arr) {
    return arr.map((movies) => movies.director);
}
console.log(getAllDirectors(movies));

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(arr) {
    let filters = arr.filter(
        (movie) =>
        movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')
    );
    return filters.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(arr) {
    if (!arr.length) return 0;
    let total = arr.reduce((acc, val) => {
        if (!val.score) {
            return acc;
        }
        return acc + val.score;
    }, 0);

    let avg = total / arr.length;
    let dec = Number(avg.toFixed(2));
    return dec;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(arr) {
    let drama = arr.filter((movie) => movie.genre.includes('Drama'));
    return scoresAverage(drama);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arr) {
    let year = [...arr].sort((a, b) => {
        if (a.year === b.year) {
            return a.title.localeCompare(b.title);
        } else {
            return a.year - b.year;
        }
    });
    return year;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arr) {
    let armtitle = arr.map((movies) => movies.title);

    let ordaph = armtitle.sort((a, b) => a.localeCompare(b));
    if (armtitle.length > 20) {
        return armtitle.slice(0, 20);
    } else if (armtitle.length < 20) {
        return armtitle.slice(0, 20);
    }
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
        bestYearAvg
    };
}