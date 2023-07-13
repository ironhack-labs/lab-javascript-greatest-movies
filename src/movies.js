// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {}
    function getAllDirectors(moviesArray) {
        const allDirectors = moviesArray.map(name => name.director);
        return allDirectors;
    }
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {}
    function howManyMovies(moviesArray) {
        let numberOfMovies = 0;
        moviesArray.filter(movie => {
            if (movie.director === "Steven Spielberg" && movie.genre.includes("Drama")) {
                numberOfMovies += 1;
            }
        })
        return numberOfMovies;
    }

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {}
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) {
        return 0;
    }
    const moviesWithRating = moviesArray.filter(movie => movie.score)
    const sum = moviesWithRating.reduce((empty, movie) => empty + movie.score, 0);
    const average = sum / moviesArray.length;
    const twoDecimal = average.toFixed(2);
    const numberValue = Number(twoDecimal);
  return numberValue;
}
    //return parseFloat(twoDecimal); - also works

    
// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {}
function dramaMoviesScore(moviesArray) {
    const dramaMoviesArray = moviesArray.filter(movie => movie.genre.includes("Drama"));
    const dramaMovieAverage = scoresAverage(dramaMoviesArray);
    return dramaMovieAverage;
}
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {}
function orderByYear(moviesArray) {
    const movieYears = moviesArray.sort((firstEl, secondEl) => {
        if(firstEl.year === secondEl.year) {
            return firstEl.title.localeCompare(secondEl.title)
        }
        return firstEl.year - secondEl.year;
    });
    return movieYears.map(movie => movie);
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}
function orderAlphabetically(moviesArray) {
    return moviesArray.map(movie => movie.title).sort().slice(0, 20);
}
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}
function turnHoursToMinutes(moviesArray){
    return movies.map(function(movie){
        let duration = movie.duration;
        let hours = 0
        let minutes = 0
    })
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
