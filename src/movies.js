// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(moviesArray) {
    const trackMovies = [];
    for (let i = 0; i < moviesArray.length; i++) {
        const movie = moviesArray[i];
        trackMovies.push(movie.director);        
    }
    return trackMovies;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(moviesArray) {
    if (moviesArray.length === 0) {
        return 0;
    }

    const moviesSpielberg = moviesArray.filter(movie => movie.director === 'Steven Spielberg' && movie.genre.includes('Drama'));
    return moviesSpielberg.length;
}


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) {
        return 0;
    }

    const validMovies = moviesArray.filter(movie => typeof movie.score === 'number');
    const totalScore = validMovies.reduce((sum, movie) => sum + movie.score, 0);
    const averageScore = totalScore / validMovies.length;
    return parseFloat(averageScore.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMovies = moviesArray.filter(movie => movie.genre.includes('Drama'));
        
    if (dramaMovies.length === 0) {
        return 0;
    }

    const validDramaMovies = dramaMovies.filter(movie => typeof movie.score === 'number');
    const totalDramaMovies = validDramaMovies.reduce((sum, movie) => sum + movie.score, 0);
    const averageScore = totalDramaMovies / validDramaMovies.length;
    return parseFloat(averageScore.toFixed(2));

}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const oderedMovies = [moviesArray]
    oderedMovies.sort((a, b) => {
        if (a.year !== b.year) {
            return a.year.localeCompare(b.year);
        }   else {
            return a.title.localeCompare(b.title);
        }
    }); // USAR localeCompare COMO DICE NAIIN!!!
    return oderedMovies.map(movie => movie.year);
}




// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const alphabeticOrder = []

    if (alphabeticOrder.length > 20) {
        return 'RETURN ONLY OF THEM';
    }

    return alphabeticOrder.map(film => film > movie.length[20]);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
