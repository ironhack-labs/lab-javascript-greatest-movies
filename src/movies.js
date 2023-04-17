// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const allDirectors = moviesArray.map((movies) => {
        return movies.director
    });
    return allDirectors;
}
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const moviesSteven = moviesArray.filter((movies) => {
        return movies.director === 'Steven Spielberg' && movies.genre.includes('Drama')
    });

    if (moviesSteven.length === 0) {
        return 0;
    } else {
        return moviesSteven.length;
    }

}
// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {

    const scoreAvg = moviesArray.reduce((acc, eachAvg) => {
        if (eachAvg.score === '' || eachAvg.score === undefined) {
            return acc
        }
        return acc + eachAvg.score / moviesArray.length

    }, 0);

    return Math.round(scoreAvg * 100) / 100;

}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const filteredDrama = moviesArray.filter((movies) => {
        return movies.genre.includes('Drama');
    });

    const scoreDrama = filteredDrama.reduce((acc, eachScore) => {
        return acc + eachScore.score / filteredDrama.length;
    }, 0);

    return Math.round(scoreDrama * 100) / 100;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const moviesCopy = JSON.parse(JSON.stringify(moviesArray));

    moviesCopy.sort((a, b) => {
        if (a.year < b.year) {
            return -1
        }
        if (a.year === b.year) {
            if (a.title < b.title) {
                return -1
            } else if (a.title > b.title) {
                return 1
            } else {
                return 0
            }
        }
    });

    return moviesCopy
};

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const moviesCopy2 = JSON.parse(JSON.stringify(moviesArray));

    const moveTitle = moviesCopy2.map((eachTitle) => {
        return eachTitle.title
    });

    moveTitle.sort();

    if (moveTitle.length > 20) {
        return moveTitle.slice(0, 20);
    }

    return moveTitle
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) { }

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) { }
