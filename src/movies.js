//const movies = require("./data");

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(arr) {
    return arr.map(movie => {
        return movie.director;
    });
}

//Bonus - Iteration 1.1: Clean the array of directors
function removeDuplicated(arr) {
    return arr.filter((item, index) => {
        return arr.indexOf(item) === index;
    });
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(arr) {
    const spielbergMovies = arr.filter(movie => {
        return movie.director === 'Steven Spielberg'
    });

    if (spielbergMovies.length === 0) return 0

    return spielbergMovies.filter(movie => {
        return movie.genre.includes('Drama');
    }).length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(arr) {
    if (arr.length === 0) return 0;
    return +(arr.reduce((acc, movie) => {
        return acc + (movie.score || 0);
    }, 0) / arr.length).toFixed(2);
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(arr) {
    const allDramaMovies = arr.filter(movie => {
        return movie.genre.includes('Drama');
    });
    return scoresAverage(allDramaMovies);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arr) {
    if (arr.length === 0) return [];
    return arr.sort((a, b) => {
        return (a.year === b.year) ? (a.title.localeCompare(b.title)) : (a.year - b.year);
    });
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arr) {
    return [...arr].sort((a, b) => {
        return (a.title.localeCompare(b.title));
    }).map(movie => {
        return movie.title;
    }).slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(arr) {
    return arr.map((movie) => {
        return {...movie, duration: convertIntoMinute(movie.duration)}
    });
}

function convertIntoMinute(duration) {
    duration = duration.split(' ').join('');
    duration = duration.split('min').join('');
    duration = duration.split('h');

    const hours = duration[0] === '' ? 0 : +duration[0];
    const minutes = duration[1] === '' ? 0 : +duration[1];
    return (hours * 60) + minutes;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(arr) {
    if (arr.length === 0) return null;
    const allYears = removeDuplicated(arr.map(movie => {
        return movie.year;
    }));

    let array = [];
    for (let year of allYears) {
        const rateAverage = scoresAverage(arr.filter(movie => {
            return movie.year === year
        }));

        array.push({
            year: year,
            rateAverage: rateAverage,
        })
    }

    const result = array.sort((a, b) => {

        return (+a.rateAverage === +b.rateAverage) ? (+a.year - +b.year) : (+b.rateAverage - +a.rateAverage);
    })[0];
    return `The best year was ${result.year} with an average score of ${result.rateAverage}`
}

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
