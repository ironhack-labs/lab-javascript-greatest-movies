// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
   let allDirectors =  moviesArray.map(movie => movie.director);
   return allDirectors;
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    let spielbergDramaMovies = moviesArray.filter(movie => movie.director === 'Steven Spielberg' && movie.genre.filter(genre => genre === 'Drama').length === 1);
    return spielbergDramaMovies.length;

}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) {
        return 0;
    } else {
    let totalScore = moviesArray.filter(movie => movie.score !== '').reduce((total, movie) => total + movie.score, 0);
    let avgScore = totalScore / moviesArray.filter(movie => movie.score !== '').length;
    return Math.round(avgScore * 100) / 100;
    }


}


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    let dramaMovieArray = moviesArray.filter(movie => movie.genre.filter(genre => genre === 'Drama').length === 1);
    if (dramaMovieArray.length === 0) return 0;
    let dramaTotalScore = dramaMovieArray.reduce((total, dramaMovie) => (total + dramaMovie.score), 0);
    let dramaAvgScore = dramaTotalScore/dramaMovieArray.length;
    return Math.round(dramaAvgScore * 100) / 100;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    return [...moviesArray].sort((a, b) => a.year - b.year);
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    return [...moviesArray].map(movie => movie.title).sort().slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    let durations = [...moviesArray].map(movie => movie.duration).map(duration => {
        splitDuration = duration.split(" ");
        let durationInMinutes = 0;
        durationInMinutes = +splitDuration[0].slice(0, -1) * 60 + splitDuration[1].slice(0, -3);

        return durationInMinutes;
    })
    return durations;


}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
