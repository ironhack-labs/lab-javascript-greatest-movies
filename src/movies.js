// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(moviesArray) {
    let movieDirectors = moviesArray.map((x) => x.director);
    return movieDirectors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    let spielbergDrama = movies.filter((director) => {
        if (movies.director === Steven spielbergDrama); {
            if (movies.genre.drama); {
                return spielbergDrama;
            }
        }
    })
};

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) {
        return 0
    }
    else {
        let addScore = moviesArray.reduce((acc, val) => {
            return acc + val.score;
        }, 0) / moviesArray.length;
        return Math.round(addScore * 100) / 100;
    }
}
    

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    let growingOrder = movies.year.sort((a, b) {
        if (a - b) return -1;
        if (b - a) return 1;
        if (a === b) return 0;)
    }
    return growingOrder;
};

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

/*colocar os filmes em ordem alfabetica - usar sort()
printar os 20 primeiros - usar .length e if para limitar até os 20 primeiros ou slice colocando em ordem alfabetica primeiro e indicando o 
index de 0 a 19.*/

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
