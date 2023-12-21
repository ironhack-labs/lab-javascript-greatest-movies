// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const directors = moviesArray.map(function (element) {
        return element.director;
    });

    return directors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const whereIsSpielberg = moviesArray.filter(function (element) {
        return (element.director === "Steven Spielberg" 
        && element.genre.includes("Drama")
        );
    });
    return whereIsSpielberg.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {

    if (moviesArray.length === 0) {
        return 0
    }

    const totalScores = moviesArray.reduce((sum, currentValue) => {
        if (currentValue.score) {
            return sum + currentValue.score
        } else {
            return sum
        }
    }, 0.00);

    return Math.round((totalScores / moviesArray.length) * 100) / 100
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMovies = moviesArray.filter(element => element.genre.includes("Drama"))
    if (dramaMovies.length === 0) {
        return 0;
    }
    const dramaScores = dramaMovies.reduce((sum, currentValue) => sum + currentValue.score, 0);
    
    return Math.round((dramaScores / dramaMovies.length) * 100) / 100;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
