// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    return moviesArray.map((movie) => movie.director);
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    let dramaMovies = moviesArray.filter((spielbergDrama) => {
    return spielbergDrama.director === "Steven Spielberg" && spielbergDrama.genre.includes("Drama");
        dramaMovies.push(moviesArray.movie)
});
return dramaMovies.length;
}


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0){
        return 0;
    } else {
        totalScore = moviesArray.reduce((sum, movie) => {
            return sum + movie.score;
    }, 0);
    const avrScore = Number((totalScore / moviesArray.length).toFixed(2)); 
    return avrScore;
}
}


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    dramaMovies = moviesArray.filter((movie) => movie.genre.includes('Drama'));
    if (dramaMovies.length === 0){
        return 0;
    } 
    dramaSum = dramaMovies.reduce((sum, movie) => {
        if (movie.score > 0){
            return sum + movie.score;
        } else {
            return sum
        }
    }, 0);
    return Number((dramaSum/dramaMovies.length).toFixed(2));
}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    let sortedMovies = moviesArray.slice();
    sortedMovies.sort((a, b) => {
        if (a.year > b.year){
            return 1;
        } else if (a.year < b.year){
            return -1;
        } else if (a.year === b.year){
            return a.title.localeCompare(b.title);  // <-- didn't understand why "a,b" is not enough since I thought that the .sort() should always return either 1, -1 or 0
        }
    });
    return sortedMovies
}


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    let sortedAlpha = moviesArray.slice();      // <- slices all info, not just titles
    if (sortedAlpha.length <= 20){              
        sortedAlpha.sort((a, b) => {
            return a.title.localeCompare(b.title);
        });
    } else {
        sortedAlpha.sort((a, b) => {
            return a.title.localeCompare(b.title);
        });
        sortedAlpha = sortedAlpha.slice(0,20)   // <- only slice AFTER ordering the titles, this way you not only get just 20 of them, but also the first 20
    }
    return sortedAlpha.map(movie => movie.title);  // <- .map() because the clone array has more than just the titles
}














// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
