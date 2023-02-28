// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const allDirectors = moviesArray.map (function (movie) {
        return movie.director;
    });
    return allDirectors;
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const stevenMovies = moviesArray.reduce (function (accu, movie) {
        if (movie.director !== 'Steven Spielberg') {
            return accu;
        } else if (movie.genre.includes("Drama")) {
            return accu + 1;
        }
        return accu;
        
    }, 0); 
    return stevenMovies;
}



// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) {
        return 0;
    } else {
        let filteredMovies = moviesArray.filter((movie) => movie.score );
        let totalScore = filteredMovies.reduce ((sum, movie) => {
            return sum + movie.score;
        }, 0)

        let averageScore = totalScore / moviesArray.length;
        return Number(averageScore.toFixed(2));
    }  

}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const drama = moviesArray.filter((movie) => movie.genre.includes("Drama"))
        return scoresAverage(drama);
}

/*
const moviesNewArray = 
*/

/*
const moviesNewArray = [...movieArray];
const drama = moviesNewArray.filter(element => element.genre.includes('Drama'));
return scoresAverage(drama);
*/

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
