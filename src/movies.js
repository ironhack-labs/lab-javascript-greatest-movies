// const movies = require("./data.js")
// const moviesCopy = [...movies]

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?


function getAllDirectors(moviesArray) {
    const onlyDirectors = moviesArray.map(function (element) {
        return element.director;
    })
    return onlyDirectors;
}

console.log(getAllDirectors(moviesArray));

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const selectMovies = moviesArray.filter((movie) => {
        if (movie.director === 'Steven Spielberg' && movie.genre.includes('Drama') === true) {
            return true;
        } else {
            return false;
        }
    })
    const countMovies = selectMovies.length;

    return countMovies;

}

console.log(howManyMovies(movies))



// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {

    const allScores = moviesArray.map(function (element) {
        return element.score;
    })
    const sumScores = allScores.reduce(function (acc, currentValue) {
        return acc + currentValue
    }, 0)
    const averageScore = sumScores / allScores.length;

    if (moviesArray.length === 0) {
        return 0;
    }

    return Math.round(averageScore * 100) / 100;

}

console.log(scoresAverage(moviesArray))

// // Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMovies = moviesArray.filter((movie) => {
        if (movie.genre.includes('Drama') === true) {
            return true;
        } else {
            return false;
        }
    })

    const dramaScores = moviesArray.map((movie) => {
        return movie.score;
    })

    const dramasScoresSum = dramaScores.reduce(function (acc, currentValue) {
        return acc + currentValue;
    }, 0)

    const dramasScoresAverage = dramasScoresSum / dramaScores.length;

    if (dramaMovies.length === 0) {
        return 0;
    }

    return dramasScoresAverage;
}



// // Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const copyMoviesArray = [...movies];
    copyMoviesArray.sort((a, b) => a.year - b.year);
    return copyMoviesArray;
}

console(orderByYear(moviesArray))

// // Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
// function orderAlphabetically(moviesArray) { }

// // BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
// function turnHoursToMinutes(moviesArray) { }

// // BONUS - Iteration 8: Best yearly score average - Best yearly score average
// function bestYearAvg(moviesArray) { }
