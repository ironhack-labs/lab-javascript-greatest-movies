// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    return moviesArray.map(movie => movie.director);
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    spielbergDramaMovies = moviesArray.filter(movie => movie.director === 'Steven Spielberg' && movie.genre.includes('Drama'));
    return spielbergDramaMovies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
        if (moviesArray.length === 0) {
        return 0;
    } else {
        const scores = moviesArray.map(movie => movie.score || 0);
        const sumScores = scores.reduce((acc, movie) => {
            return acc + movie; 
        }, 0);
        const average = sumScores / scores.length;
        return Math.round(average * 100) / 100;
    }    
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMovies = moviesArray.filter(movie => movie.genre.includes('Drama'));
    return scoresAverage(dramaMovies);
    }    

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const moviesArrayCopie = moviesArray.filter(movie => movie);
    const orderedByYear = moviesArrayCopie.sort(function(aMovie,bMovie) {
        if (aMovie.year > bMovie.year) {
            return 1;
        } else if (aMovie.year < bMovie.year) {
            return -1;
        } else if (aMovie.year === bMovie.year && aMovie.title.toLowerCase().localCompare(bMovie) < 0) {
            return -1;
        } else if (aMovie.year === bMovie.year && aMovie.title.toLowerCase().localCompare(bMovie) > 0) {
            return 1;
        } else {
            return 0;
        }
    });
    return orderedByYear;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const moviesArrayCopie = moviesArray.filter(movie => movie);
    const orderedByTitle = moviesArrayCopie.sort(function(aMovie,bMovie) {
       if (aMovie.title.toLowerCase().localCompare(bMovie) < 0) {
            return -1;
        } else if (aMovie.title.toLowerCase().localCompare(bMovie) > 0) {
            return 1;
        } else {
            return 0;
        }
    });
    return orderedByTitle;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
