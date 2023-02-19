// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const allDirectors = moviesArray.map(function (movie) {
        return movie.director;
    })
    return allDirectors;
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const dramaSteven = moviesArray.filter(function (movie) {
        if (movie.director === 'Steven Spielberg' && movie.genre.includes("Drama")) {
            return true;
        }
        else {
            return false;
        }
    })
    return dramaSteven.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) {
        return 0;
    }
    const moviesSum = moviesArray.reduce(function (result, movie) {
        if (!movie.score) {
            return result;
        }
        return result + movie.score;

    }, 0)

    return Math.round((moviesSum / moviesArray.length) * 100) / 100;

}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {

    const dramaMovies = moviesArray.filter(function (movie) {
        if (movie.genre.includes("Drama")) {
            return true;
        }

    });
    return scoresAverage(dramaMovies);
}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const yearOrder = moviesArray.slice(0).sort((movie1, movie2) => {
        if (movie1.year < movie2.year) { return -1; }
        if (movie1.year > movie2.year) { return 1; }
        if (movie1.title.toLowerCase() < movie2.title.toLowerCase()) { return -1; }
        if (movie1.title.toLowerCase() > movie2.title.toLowerCase()) { return 1; }
        return 0;
    })
    return yearOrder;

}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const alphabeticOrder = moviesArray.slice(0).sort((movie1, movie2) => {
        if (movie1.title < movie2.title) { return -1; }
        if (movie1.title > movie2.title) { return 1; }
        return 0;
    })
    return alphabeticOrder.slice(0, 20).map((movie) => movie.title);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) { }

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) { }
