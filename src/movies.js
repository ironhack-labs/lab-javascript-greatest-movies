// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(moviesArray) {
    const director = moviesArray.map ((value) => value.director);
    return director;
}
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    /* if (!moviesArray.length) return 0;
    let count = 0 ; */
    const filterMovies = moviesArray.filter ( (name) => name.director ==="Steven Spielberg" && name.genre.includes('Drama'))
    return filterMovies.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (!moviesArray.length) return 0;
    const reducedArray = moviesArray.reduce((acc, val) => {
    if (val.score){ 
        return acc + val.score;
    } else {
        return acc;
    }},0)
    return Math.round((reducedArray * 100)/ moviesArray.length) / 100
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    
    const filterMovies = moviesArray.filter ( (name) => name.genre.includes('Drama'))
    if (!filterMovies.length) return 0;
    return scoresAverage(filterMovies);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const clonedArray = [...moviesArray];
    clonedArray.sort ((a ,b) => {
        if (a.year < b.year) return -1 
        else if (a.year > b.year) return 1
        else if (a.title < b.title) return -1
        else if (a.title > b.title) return 1
    }
    )
    return clonedArray;

}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    clonedArray = [...moviesArray];
    const newArray = clonedArray.map((name) => name.title);
    return newArray.sort().splice(0, 20);
}


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
