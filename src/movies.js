// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(movies) {
    const directorsArray = movies.map(movie => {
        return movie.director;
    });
    return directorsArray;
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
    const moviesBySpielberg = movies.filter(movie => {
        return movie.director === "Steven Spielberg" && movie.genre.includes("Drama");
    });
    return moviesBySpielberg.length;
}


// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(movies) {
    if (movies.length === 0) {
        return 0;
    }

    const ratesTotal = movies.reduce((accumulator, rating) => {
        if (typeof rating.rate === 'number') {
            return accumulator + rating.rate;
        } else {
            return accumulator + 0;
        }
    }, 0)

    const average = ratesTotal / movies.length;
    return Math.round(average * 100) / 100
}


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(movies) {
    const dramaMovies = movies.filter(movie => {
        return movie.genre.includes("Drama");
    });

    return ratesAverage(dramaMovies);
}
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
    let orderedMovies = movies.slice();

    orderedMovies.sort((a, b) => {
        if (a.year === b.year) {
            if (a.title < b.title) {
                return -1;
            } else if (a.title > b.title) {
                return 1;
            }
        } else if (a.year < b.year) {
            return -1;
        } else if (a.year > b.year) {
            return 1;
        }
    });
    return orderedMovies;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
    const alphabeticOrder = movies.map(movie => {
        return movie.title;
    });
    alphabeticOrder.sort();
    return alphabeticOrder.slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {

}
// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
function bestYearAvg(movies) {
    if (movies.length === 0) {
        return null;
    }

    let message = `The best year was ... with an average rate of ...`;
    return message;
}