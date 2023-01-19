// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will 
// pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const movie = moviesArray.map((movie) => movie.director)
    return movie
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const moviesStevenSpielberg = [];
     if (moviesArray.length === 0) {
        return 0;
        };
        
    const movieGenre = moviesArray.filter(function (movie) {
        if (movie.genre.includes("Drama") & movie.director === "Steven Spielberg") {
            return true;
        };
    });
    return movieGenre.length;
};

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) {
        return 0;
    }
    const movieScore = moviesArray.reduce ((acc, movies) => {
        if (movies.score) {
            return acc + movies.score;
        } else {
        return (acc);
        }
    }, 0)
    return Number((movieScore / moviesArray.length).toFixed(2));
}


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMovies = moviesArray.filter( movie => movie.genre.includes('Drama'))
    return scoresAverage(dramaMovies)
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const order = moviesArray.splice(0, moviesArray.length)
    return order.sort(function (a, b) {
        if (a.year === b.year) {
            if (a.title < b.title) {
                return -1
            } else if (a.title > b.title) {
                return 1
            } else {
                return 0;
            }

        } return a.year - b.year
    })
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {

    const movieTitles = moviesArray.map(function (movie) {
        return movie.title;
    })
    const alphabeticalOrder = movieTitles.sort().slice(0, 20);
    return alphabeticalOrder
}
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
