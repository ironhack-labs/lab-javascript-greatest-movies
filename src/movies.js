// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?


function getAllDirectors(moviesArray) {
    let onlyDirectors = moviesArray.map((q) => q.director);
    return onlyDirectors;

}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    let dramasSpielberg = moviesArray.filter((u) => u.director === "Steven Spielberg" && u.genre.includes("Drama"));
    return dramasSpielberg.length;
}

/*These are the best movies based on their scores, so supposedly all of them have a remarkable score. 
In this iteration, we want to know the average score of all of them and display it on the console. 
Create a scoresAverage() function that receives an array as a parameter and solves the challenge.

The score must be returned rounded to 2 decimals!*/

// Iteration 3: All scores average - Get the average of all scores with 2 decimals


function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) {
        return 0
    }
    else {
        let addScore = moviesArray.reduce((acc, val) => {
            return acc + val.score;
        }, 0) / moviesArray.length;
        return Math.round(addScore * 100) / 100;
    }

}

/*

Create a dramaMoviesScore() function that receives an array as a parameter to get the average score of all drama movies! 
Let's see if it is better than the general average.

Again, rounded to 2 decimals!*/

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    let allDramaScore = moviesArray.reduce((acc, val) => {
        return acc + val.score && val.genre.includes("Drama");
    }, 0) / moviesArray.length;
    return Math.round(allDramaScore * 100) / 100;
}

/*We need to sort the movies in ascending order by their release year. This should be easy using one of the methods we have just 
learned. Create a function orderByYear() that receives an array as parameter and returns a new sorted array.
If two movies have the same year, order them in alphabetical order by their title! ✔️

Important: Your function should return a new array, containing the movies ordered by the year. Your function should not modify 
(mutate) the original array. You may need to do some research on how to make a "copy" or "clone" an array.*/

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    moviesArray.sort((a, b) => a - b)
    return moviesArray

}



// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const orderYear = 
 }

const orderAlphabetically = (array) => {
    const sortedMovies = [...array];
    sortedMovies.sort((firstMovie, secondMovie) => {
        return firstMovie.title.localeCompare(secondMovie.title);
    });
    const movieTitles = sortedMovies.map((movie) => movie.title);
    return movieTitles.slice(0, 20);

    // BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
    function turnHoursToMinutes(moviesArray) { }

    // BONUS - Iteration 8: Best yearly score average - Best yearly score average
    function bestYearAvg(moviesArray) { }
