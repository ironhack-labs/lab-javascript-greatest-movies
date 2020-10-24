// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors (movies) {
    const directors = movies.map(function(movie) {
        return movie.director
    });
    return directors
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies (movies) {
    const stevenSpielberg = movies.filter(function(movie) {
        if (movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')) {
            return true;
        }
    });
    return stevenSpielberg.length
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage (movies) {
    if (movies.length === 0) {
        return 0;
    };
    const argRate = movies.filter(function(movie) {
        if (movie.rate !== undefined) {
            return true
        }
    }).reduce(function (acc, val){
        return acc + val.rate;
    }, 0);
    return (Math.round((argRate/movies.length)*100)/100)
}


// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate (movies) {
    if (movies.length === 0) {
        return 0;
    };
    const dramaRate = movies.filter(function(movie) {
        return movie.genre.includes("Drama")
    });
    return ratesAverage(dramaRate)
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear (movies) {
    const sorted = movies.sort(function (a, b) {
        if (a.year > b.year) return 1;
        if (a. year < b.year) return -1;
        // if (a.year === b.year) {
            if (a.title > b.title) return 1;
            if (a.title < b.title) return -1;
        // }
        return 0;
    })
    return sorted.slice();
}
    

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically (movies) {
    const sorted = movies.slice().sort(function (a, b) {
        if (a.title > b. title) return 1;
        if (a.title < b. title) return -1;
        if (a.title === b.title) return 0;
    }).map(function(movie){
        return movie.title
    });
    return sorted.slice(0, 20);
}


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
