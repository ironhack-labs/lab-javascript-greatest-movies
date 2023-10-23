// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

// const movies = require("./data.js")
// ==> console.log(dramaMoviesScore(movies))

function getAllDirectors(moviesArray) {
    const allDirectors = moviesArray.map((movie) => movie.director);
    return allDirectors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    if (moviesArray.length === 0 || moviesArray.director !== 'Steven Spielberg') {
        return 0;
    }
    
    const stevenFilms = moviesArray.filter(function (filmCount, i, arr) {
        if (
          filmCount.director === 'Steven Spielberg')
        {
          return stevenFilms.length;
        }
    });

    const stevenDramaFilms = stevenFilms.filter(function (filmCount, i, arr) {
        if (filmCount.genre.includes('Drama')) {
            return stevenDramaFilms.length;
        }
    });
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) {
        return 0;
    }

    const allScores = moviesArray.map(function (scoreCount, i, arr) {
        return scoreCount.score;
    });
    
    let counter = 0;
    let averageScores = 0;
    for (let i = 0; i < allScores.length; i++) {
        counter += allScores[i];
    }
    averageScores = counter / moviesArray.length;
    return averageScores;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    if (moviesArray.genre !== 'Drama') {
        return 0;
    }

    if (moviesArray.genre.includes('Drama')) {
        const dramaScores = moviesArray.map(function (scoreCount, i, arr) {
            return scoreCount.score;
        });
    }

    let counter = 0;
    let averageDramaScores = 0;
    for (let i = 0; i < dramaScores.length; i++) {
        counter += dramaScores[i];
    }
    averageDramaScores = counter / dramaScores.length;
    return averageDramaScores;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const yearOrder = moviesArray.map(function (yearCount, i, arr) {
        return yearCount.year;
    });
    return yearOrder.sort();
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const titleOrder = moviesArray.map(function (titleCount, i, arr) {
        return titleCount.title;
    });
    return titleOrder.sort();
    
    if (moviesArray.length > 20) {
        return titleOrder.slice(0, 19);
    };
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
