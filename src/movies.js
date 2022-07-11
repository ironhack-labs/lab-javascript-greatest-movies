// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const allDir = moviesArray.map((dir) => dir.director) 
        return allDir;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const bestSteven = moviesArray.filter((stevenDir) => stevenDir.director === 'Steven Spielberg' && stevenDir.genre.includes('Drama'));
    return bestSteven.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) {
        return 0;
    }

    let bestMovies = moviesArray.reduce((a, b) => { 
        if (b.score) {
        return a + b.score;
    } else {
        return a;
    }}, 0);
    return Math.round((bestMovies * 100) / moviesArray.length) / 100
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMovies = moviesArray.filter(element => element.genre.includes('Drama'))
    return scoresAverage(dramaMovies);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    let newArr = [...moviesArray];
    newArr.sort((a, b) => {
        if (a.year > b.year) {
            return 1;
        } else if (a.year < b.year) {
            return -1;
        } else if (a.title > b.title) {
            return 1;
        } else if (a.title < b.title) {
            return -1;
        } 
    }); return newArr;
    
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const movieList = moviesArray.map(element => element.title);
    let revisedList = movieList.sort().slice(0, 20);
    return revisedList;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
