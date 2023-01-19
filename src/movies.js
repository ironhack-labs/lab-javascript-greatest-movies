// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(moviesArray) {
    const directors = moviesArray.map((movies) => movies.director);
    return directors;
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(array) {
    const movieTypes = array.filter((movies) => movies.director === "Steven Spielberg" && movies.genre.includes("Drama"));
    
    return movieTypes.length;
 }// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(scoresArray) {
    if ( scoresArray.length === 0) {
        return 0;
    }
    const totalScore = scoresArray.reduce((acc,movies) => {
        if ( movies.score) {
            return acc + movies.score;
        } else {
            return acc;
        } 
    }, 0) 
    return Math.round((totalScore * 100) / scoresArray.length) / 100;
} 


// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesScore(dramasArray) {
   const dramaMovies = dramasArray.filter((movies) => movies.genre.includes("Drama"));
   if (!dramaMovies.length) return 0;
   const dramaMovies2 = dramaMovies.reduce((acc,movies) => {
    if (movies.score) {
        return acc + movies.score;
   } else  return acc;
},0) 
    const averageDrama = dramaMovies2 / dramaMovies.length;
    return Math.round(averageDrama * 100) / 100;
 }  


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const movArrCopy = moviesArray.map((x) => x)
    const yearSort = movArrCopy.sort((a, b) => a.year - b.year);
    return yearSort;
}



// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const movieTitles = moviesArray.map(movie => movie.title);
    const alphaSort = movieTitles.sort();
    const filterAlpha = alphaSort.filter((title, index) => index < 20)
    return filterAlpha;
}







// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
