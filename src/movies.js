// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const allDirector = moviesArray.map(function(movie) {
        return movie.director;
    });
    return allDirector;
}

console.log(getAllDirectors(movies));

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    if(!moviesArray) {
        return 0;
    }
    const moviesBySpielberg = moviesArray.filter(function(movie) {
        return movie.genre.includes("Drama") && movie.director === "Steven Spielberg"
    });
    return moviesBySpielberg.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    const allScoresAVG = moviesArray.reduce(function(acc, val) {
        if(val.score) {
            return acc + val.score / moviesArray.length;
        } else
            return acc;
    }, 0);
    return Number(allScoresAVG.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    if (moviesArray === 0) return 0;
    const allDramaMovies = moviesArray.filter(function(movie) {
        if(movie.genre.includes("Drama")) {
            return movie;
        }
    });
        const dramaMoviesAVG = allDramaMovies.reduce(function(acc, movie) {
            if(movie.score) {
                return acc + movie.score / allDramaMovies.length;
            }
            else
            return acc;
        }, 0)
    return Number(dramaMoviesAVG.toFixed(2))
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    let copiedMoviesArray = moviesArray.slice(0);
    // if(copiedMoviesArray.length === 0) return 0;
    copiedMoviesArray.sort(function(a, b) {
    if(a.year === b.year) {
        return a.title.localeCompare(b.title)
    }
    else if(a.year < b.year) {
        return -1;
    }
    else if(a.year > b.year) {
        return 1;
    }}
)   
    return copiedMoviesArray;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
