// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const allDirectors = moviesArray.map((movies) => {
        return movies.director
    })
    return allDirectors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const moviesBySpielberg = moviesArray.reduce((total, currentMovies) => {
        if (currentMovies.director === 'Steven Spielberg' && currentMovies.genre.includes('Drama')) {
            return total + 1;
        } else {
            return total;
        };
    }, 0);
    return moviesBySpielberg;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {

    if (moviesArray.length === 0) {
        return 0;
    }
    const validMovies = moviesArray.filter(movies => movies.score >= 0);
    const totalScore = validMovies.reduce((score, currentMovie) => score + currentMovie.score, 0);
    const average = totalScore / moviesArray.length;

    return Math.round(average * 100) / 100;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {

    const allDramas = moviesArray.filter((movies) => movies.genre.includes('Drama'));
    if (allDramas.length === 0) {
        return 0;
    }
    const scoreDramas = allDramas.reduce((sum, currentMovie) => sum + currentMovie.score, 0);
    const averageScoreDramas = scoreDramas / allDramas.length;

    return Math.round(averageScoreDramas * 100) / 100;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const copyMovies = [...moviesArray];
    copyMovies.sort((a, b) => {
        if (a.year !== b.year) {
            return a.year - b.year;
        } else {
            return a.title.localeCompare(b.title);
        }
    });
    return copyMovies;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) { 
    const newArray = [...moviesArray]; 
    
    const sortedTitles = newArray
    .map((movie) => movie.title)
    .sort((a, b) => a.localeCompare(b))
    .slice(0, 20); 

    return sortedTitles; 
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) { }

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) { }
