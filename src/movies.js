// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const newDirectorsArray = moviesArray.map((movies) => movies.director);
    return newDirectorsArray;
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    if (moviesArray.length === 0){
        return 0;
    }
    const arrSplibergDrama = moviesArray.filter((movies) => {
        return movies.director.includes('Steven Spielberg') && movies.genre.includes("Drama")
    })
    return arrSplibergDrama.length

}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
// arr.reduce(callback(acumulador, valorActual *, índice[, array]*), *valorInicial 0*)
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0){
        return 0;
    }

    const value = moviesArray.reduce((acc, movies) => {
        return movies.score ? acc + movies.score : acc
    },0);
// numObj.toFixed(*digitos*)
    const averageMovies = value / moviesArray.length
    return Number(averageMovies.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesScore(moviesArray) {
    
    const dramaMovies = moviesArray.filter((movies) => {
        return movies.genre.includes('Drama')});

    const dramaScore = dramaMovies.reduce((acc, movies) => {
        return acc + movies.score
    }, 0 );
        
    const averageDramaScore = dramaScore / dramaMovies.length

    return Number(averageDramaScore.toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
