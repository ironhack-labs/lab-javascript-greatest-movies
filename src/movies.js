// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const allDirectors = moviesArray.map(function(eachmovie) {
        return eachmovie.director;
    });
    return allDirectors;
};

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const hisMovie = moviesArray.filter(eachmovie => eachmovie.director == 'Steven Spielberg');
    const movieDr = hisMovie.filter(elem => elem.genre.includes('Drama'));
    return movieDr.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
        if (moviesArray.lenght === 0) {
            return 0;
        }
        else {
        const allScores = moviesArray.filter (each => each.score);
        const scoreScore = allScores.reduce((accumulator, currentScore) => accumulator + currentScore);
        const averageScore = scoreScore / (moviesArray.length);
        return averageScore.toFixed(2);
        }
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMo = moviesArray.filter (each => each.genre.includes('Drama'));

    if (dramaMo.length === 0) {
        return 0;
    }
    else {
    const dramaScore = dramaMo.map(each => each.score);
    const totalScore = dramaScore.reduce((accumulator, currentValue) => accumulator + currentValue);
    return totalScore / dramaMo.length;
    }
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const newArray = moviesArray.map(each => each.year + each.title);
    const movieTitle = moviesArray.title;

    return movieYear;
}

// Iteration 6: Alphabetic Order - Order by title and print the 20 titles
function orderAlphabetically(moviesArray) {
    const allTitles = moviesArray.map(eachmovie => eachmovie.title);
    allTitles = allTitles.sort();
    const abcMovie = allTitles.filter(index => index < 20);
    return abcMovie;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}
// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}