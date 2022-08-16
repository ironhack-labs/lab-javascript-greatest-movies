// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    let directores = moviesArray.map(movie => movie.director);   
    return directores; 
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    let moviesSteven = moviesArray.filter((movie) => {
        return movie.director == 'Steven Spielberg' && movie.genre[1] == 'Drama';
    });
    
    if (moviesSteven == 0){
        return 0;
    }else if (moviesSteven.length == 2){
        return 2;
    }
    
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    // filter movies with score = 8
    const movies8 = moviesArray.filter((movie) => {
        return movie.score == 8
    });
    // count the scores from movies 
    const suma = movies8.reduce(function(sum, movies8){
            return sum + movies8.score;
    },0);
    if (movies8 == 0){
        return 0;
    }else{
        return suma/movies8.length.toFixed(2);
    }
    
    
    
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    let moviesDrama = moviesArray.filter((movie) => {
        return movie.genre[1] == 'Drama';
    });
    
    let sumaDrama = moviesDrama.reduce(function(sum,moviesDrama){
        return sum + moviesDrama.score;
    },0);

    let average = sumaDrama/moviesDrama.length;
    return average;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}

