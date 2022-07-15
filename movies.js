// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const allDirectors = moviesArray.map(function (movie) {
        return movie.director;
    });
    return allDirectors
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const allMovies = moviesArray.filter(movie => movie.genre.includes('Drama') && movie.director === 'Steven Spielberg');
    return allMovies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) {
        return 0
    }
    let ratesTotal = moviesArray.reduce(function (acc, movie) {
        if (movie.score) {
            return acc + movie.score
        } else {
            return acc;
        }
    }, 0)
    return Math.round((ratesTotal / moviesArray.length) * 100) / 100
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMovies = moviesArray.filter(movie => movie.genre.includes('Drama'))
    return scoresAverage(dramaMovies)
}


/* Mi soluciñon a este problema hace que pete jasmin
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    // para crear arrau nuevo y no modificar el original
    const newArrMovies = moviesArray.map((x) => x);
    const orderedMovies = {
        // si el año es igual, entonces ordenar por el título
        if newArrMovies.sort((a.year, b.year) => a === b){
            return orderedMovies.sort((a.title, b.title) => b - a)
        }
        // si no son iguales, pues ordenar por el año
        else newArrMovies.sort((a.year, b.year) => b - a);
    }
    return orderedMovies
}
*/

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) { 
    const newArray = moviesArray.map(movie => ({value: movie.title}));
    
    return newArray 
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) { }

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) { }
