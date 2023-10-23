// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const directorsArray = moviesArray.map(function (movie) {
        return movie.director;
    });

    return directorsArray;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const dramaBySpielberg = moviesArray.filter(function (movie) {
        return movie.director === "Steven Spielberg" && movie.genre.includes("Drama");
    });
    return dramaBySpielberg.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) {
        return 0;
    }
    const moviesSum = moviesArray.reduce(function (accumulator, currentValue) {
        if (currentValue.score) {
            return (accumulator + currentValue.score);
        } else {
            return accumulator;
        }
    }, 0);
    const moviesAverage = moviesSum / moviesArray.length;
    return +moviesAverage.toFixed(2);
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMoviesFiltered = moviesArray.filter(function (movie) {
        return movie.genre.includes("Drama");
    });
    if (dramaMoviesFiltered.length === 0) {
        return 0;
    }
    const sumDramaScore = dramaMoviesFiltered.reduce(function (accumulator, movie) {
        return accumulator + movie.score;
    }, 0);
    const averageDramaScore = sumDramaScore / dramaMoviesFiltered.length;
    return parseFloat(averageDramaScore.toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const sortedMoviesArray = moviesArray.slice();
    sortedMoviesArray.sort(function (a, b) {
        let yearsOrderedArray = a - b;
        if (a.year < b.year) {
            return -1;
        } else if (a.year > b.year) {
            return 1;
        } else {
            return a.title.localeCompare(b.title);
        }
    });
    return sortedMoviesArray;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const movieTitles = moviesArray.map(function(movie) {
        return movie.title;
    });
    movieTitles.sort();
    const first20Titles = movieTitles.slice(0, 20);
    return first20Titles;
}


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) { }

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) { }
