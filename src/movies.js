// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const allDirectors = [];
    moviesArray.map((movie) => allDirectors.push(movie.director));
    return allDirectors
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    if (moviesArray.length === 0) {
        return 0;
    }
    const dramaMovie = moviesArray.filter((movie) => movie.genre.includes("Drama"));
    const StevenSpielbergMovies = dramaMovie.filter((movie) => movie.director.includes("Steven Spielberg"));
    return StevenSpielbergMovies.length;
        
 }


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) {
        return 0;
    }
    const movieScoreSum = moviesArray.reduce(function (total, movie) {
        if (movie.score === undefined){
            return total
        } else {
            return total + movie.score
        }
    },0);
    const averageScore = movieScoreSum / moviesArray.length;
return Number(averageScore.toFixed(2));
}


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMovies = moviesArray.filter((dramaMovies) => dramaMovies.genre.includes("Drama"));
    const dramaMoviesAverage = scoresAverage(dramaMovies)
    return dramaMoviesAverage; 
}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const moviesYears = moviesArray.sort((firstElement, secondElement) => {
        if (firstElement.year === secondElement.year) {
            return firstElement.title.localeCompare(secondElement.title);
        }
        return firstElement.year - secondElement.year; 
    });
    return moviesYears.map(movie => movie);
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
        const moviesOrdered = moviesArray.sort((firstElement, secondElement) => {
            return firstElement.title.localeCompare(secondElement.title);
        });
        const firstMovies = moviesOrdered.slice(0, 20);
            return firstMovies.map((movie) => movie.title);
       
    }
    

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
