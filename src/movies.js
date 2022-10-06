// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    let directorsArray = moviesArray.map((element) => element.director );
    return directorsArray;
};

/* let doubleArray = numArray.map((num) => num*2); */

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    let spielbergArray = moviesArray.filter((element) => element.director === 'Steven Spielberg' && element.genre.includes('Drama'));
    return spielbergArray.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (!moviesArray.length) {
        return 0;
    }
    let summedScore = moviesArray.reduce((acc, val) => {
        if (val.score === 0) {
            return acc + 0;
        }
        if (!val.score) {
            return acc + 0;
        }
        return acc + val.score;
    }, 0);
    summedScore = summedScore / moviesArray.length;
    summedScore = summedScore * 100;
    summedScore = Math.round(summedScore);
    summedScore = summedScore / 100;
    return summedScore;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    let i = 0;
    let dramaScore = moviesArray.reduce((acc, val) => {
        if (val.genre.includes('Drama')) {
            i++;
            return acc + val.score;
        }
    });
    dramaScore = dramaScore / i;
    return dramaScore;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    let copyMoviesArray = moviesArray.map((element) => element);
    let sortedCopy = copyMoviesArray.sort((a, b) => a.year - b.year);
    return sortedCopy;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    let clonedArray = moviesArray.map((element) => element);
    let sortedCloneArray = clonedArray.sort((a, b) => a.title > b.title);
    sortedCloneArray.splice(20, clonedArray.length);
    return sortedCloneArray;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}


