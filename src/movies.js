// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you “clean” a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
   const allMovies = moviesArray.filter(movie => movie.genre.includes('Drama') && movie.director === 'Steven Spielberg');
   return allMovies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    const scores = moviesArray.map(movie => movie.socre);
    const sumedScores = scores.reduce((accumulator, current) => accumulator + current, 0);
    return sumedScores / moviesArray.length;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    return moviesArray.map(movie => {
        let [hours, minutes] = movie.duration.replace('min', '').split(' ');

        let durationInMinutes = (hours[0] * 60);

        if (minutes) durationInMinutes = (hours[0] * 60) + (+minutes);

        return {...movie, duration: durationInMinutes}
    });
}


// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
