// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const directorsArr = moviesArray
    .map((movieObj) => movieObj.director)
    // .filter((movieObj, index, arr) => {})
    return directorsArr;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const stevenSpielbergMoviesArr = moviesArray.filter((movieObj) => movieObj.director === "Steven Spielberg" && movieObj.genre.includes("Drama")); 
    return stevenSpielbergMoviesArr.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if(moviesArray.length === 0) {
        return 0
    }
    
    const totalScore = moviesArray.reduce((acc, movieObj) => {
       if(movieObj.score === undefined) {
        return acc
       } else { 
        return acc + movieObj.score
    }
    }, 0)
    
    return Math.round(totalScore / moviesArray.length * 100) / 100;
};

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    
    const dramasArr = moviesArray.filter((movieObj) => movieObj.genre.includes("Drama")); 
    if(dramasArr.length === 0) {
        return 0
    };
    
    const totalDramaScore = dramasArr.reduce((acc, movieObj) => {
       return acc + movieObj.score
    }, 0)
    return Math.round(totalDramaScore / dramasArr.length * 100) / 100;
};

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const sortedMoviesArr = moviesArray.slice();

    sortedMoviesArr.sort((a,b) => {
        if(a.year === b.year) {
        return a.title.localeCompare(b.title)
        } else {
        return a.year - b.year;}
    });
    return sortedMoviesArr;
};

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const twentyTitlesArray = moviesArray.slice();

    const sortedArray = twentyTitlesArray.sort((a,b) => a.title.localeCompare(b.title)); 
    const sortedTitleArray = sortedArray.map((movieObj) => movieObj.title);
    const shorterTitleArray = sortedTitleArray.slice(0,20);

    return shorterTitleArray;
};

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
