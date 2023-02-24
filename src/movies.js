// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const directors = moviesArray.map(movie => movie.director);
    return directors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    if(moviesArray.length === 0) {
        return 0;
    }
    const SpielbergDramas = moviesArray.filter(movie => (movie.director === "Steven Spielberg" && movie.genre.includes("Drama")));
return SpielbergDramas.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) {
        return 0;
    }
    const scores = movies.reduce((sum, movie) => {
        if (movie.score !== undefined) {
            return sum + movie.score;
        } else {
            return sum;
        }
    },0);
    const average = scores / movies.length;
    return parseFloat(average.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMovies = moviesArray.filter(movie => movie.genre.includes("Drama"));
    if (dramaMovies.length === 0) {
        return 0;
    }
    const scores = dramaMovies.reduce((sum, movie) =>{
        if (movie.score) {
            return sum + movie.score;
        } else {
            return sum;
        }
    }, 0);
    const average = scores / dramaMovies.length;
    return parseFloat(average.toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const sortedMovies = [...moviesArray].sort((movieA, movieB) => {
        if (movieA.year !== movieB.year) {
            return movieA.year - movieB.year;
        } else {
            return movieA.title.localeCompare(movieB.title);
        }
    });
    return sortedMovies;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const movieTitles = moviesArray.map(movie => movie.title);
    const sortedTitles = movieTitles.sort((titleA, titleB) => titleA.localeCompare(titleB));
    const top20Titles = sortedTitles.slice(0, 20);
    return top20Titles;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
