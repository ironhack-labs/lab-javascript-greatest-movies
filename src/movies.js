// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const directors = moviesArray.map(function (film) {
        return film.director;
    });
    return directors;
}
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const spielbergDrama = moviesArray.filter(function (spielberg) {
        return spielberg.director === "Steven Spielberg" && spielberg.genre === "Drama";

    });


    return spielbergDrama.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    const totalAverage = moviesArray.reduce(function (accumulator, current) {
        return accumulator + current.score;
    }, 0);
    if (totalAverage === 0)
        return 0;

    const total = totalAverage / moviesArray.length;
    return Math.round(total * 100) / 100;
}



// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const totalAverage = moviesArray.reduce(function (accumulator, current) {
        return accumulator + current.score;
    }, 0);
    if (totalAverage === 0)
        return 0;

    const total = totalAverage / moviesArray.length;
    return Math.round(total * 100) / 100;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const movieYear = moviesArray.map(function (film) {
        return film.year;
        
    });
    

    return movieYear;
    

}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const movieTitle = moviesArray.map(function (film) {
        return film.title;
        
    });
    if (movieTitle.length > 20){
        return movieTitle.slice(0,20);
    }
    

    return movieTitle.sort();
    

}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) { }

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) { }
