// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const Directors = moviesArray.map(movie => movie.director);
    return Directors
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const spielbergMovies = moviesArray.filter(movie => movie.director === "Steven Spielberg" && movie.genre.includes('Drama'));
    return spielbergMovies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
        let Scores = moviesArray.reduce((acumulador, valorInicial) => {
    
            if (valorInicial.score != null){
                return acumulador + valorInicial.score / moviesArray.length
            } else {
                return acumulador
            }
        }, 0)
    
        return round(Scores, 2);
    }

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {

  const dramaMovies = movies.filter((movie) => {

    return movie.genre.includes('Drama')});

     averageScore = scoresAverage(dramaMovies);

    return averageScore;

}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
