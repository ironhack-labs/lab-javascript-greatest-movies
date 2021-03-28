// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(arr) {
    const directors = arr.map(function (movie) {
        return movie.director;
    })
    return directors;
}
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(arr) {
    let counter = 0;
    const result = arr.filter(function (movie) {
        if (movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')) {
            return counter++;
        }
    })
    return counter;
}
// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(arr) {
    if (arr.length === 0) {
        return 0;
    }
    const average = arr.filter(function (movie) {
        if (typeof movie.rate === 'number') {
            return true;
        } else {
            return false;
        }
    }).reduce(function (acc, val) {
        return acc + val.rate;
    }, 0)
    return Number((average / arr.length).toFixed(2));
}
// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(arr) {
    const dramaMovies = arr.filter(function (movie) {
        if (movie.genre.includes('Drama')) {
            return true;
        } else {
            return false;
        }
    })
    if (dramaMovies.length === 0) {
        return 0;
    }
    const dramaAvgRate = dramaMovies.reduce(function (acc, val) {
        return acc + val.rate;
    }, 0)
    return Number((dramaAvgRate / dramaMovies.length).toFixed(2));
}
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arr) {
    const sorted = arr.sort(function (a, b) {
        if (a.year === b.year) {
            return a.title.length - b.title.length;
        }
    }).slice().sort(function (a, b) {
        return a.year - b.year;
    })
    return sorted;
}
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arr) {
    const sorted = arr.sort(function (a, b) {
        return a.title.length - b.title.length;
    }).filter(function (movie, index) {
        return index < 20;
    }).map(function (movie) {
        return movie.title;
    })
    return sorted;
}
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
