// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    return moviesArray.map(movie => movie.director)
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    let count = 0;
    
    moviesArray.filter (function(movie){
        if (movie.director === "Steven Spielberg" && movie.genre.includes ("Drama")) {
            count ++;
        } 
    })
    
    return count;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {

const scoreAverage = moviesArray.reduce((accumulator, movie, index, array) => {
    if(!movie.score) {

        movie.score = 0;
    }

    return accumulator + movie.score / array.length; 
}, 0);

return Math.round(scoreAverage * 100) / 100;
}




// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaScore = moviesArray.filter(movie => movie.genre.includes('Drama'))
    return scoresAverage(dramaScore)
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    
    return moviesArray.toSorted((a, b) => {

        if (a.year !== b.year) {
            return a.year - b.year;
        } else {
            return a.title.localeCompare(b.title);
        }           
    });

}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    
    const sortedArray = moviesArray.map(movie => movie.title).sort();
    if (sortedArray.length > 20) {
        return sortedArray.slice(0, 20);
    } else {
        return sortedArray;
    };
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
