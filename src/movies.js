// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(movies) {
    let directors = movies.map(function (elem) {
        return elem.director;
    })
    return directors
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
    let arrayOfMovies = movies.filter((elem) =>
        (elem.genre.includes("Drama") && elem.director === "Steven Spielberg")
    )
    return arrayOfMovies.length;
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(movies) {
    if (movies.length === 0) return 0;
    let averageNumber = movies.reduce(function (sum, elem) {
        return sum + (elem.rate || 0);
    }, 0) / movies.length;
    return Number(averageNumber.toFixed(2));
}
// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(movies) {
    if (movies.length === 0) return 0;
    let dramaMovies = movies.filter(function (elem) {
        return elem.genre.includes("Drama") === true;
    });
    let dramaAverage = dramaMovies.reduce(function (sum, drama) {
        return sum + drama.rate;
    }, 0) / dramaMovies.length;
    return dramaAverage;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
    let list = movies.sort(function (movie1, movie2) {
        return movie1.year - movie2.year;
    })
    let alphabeticalList = list.sort(function (movie1, movie2) {
        if (movie1 < movie2) {
            return -1
        } else if (movie1 > movie2) {
            return 1
        }
        return 0;
    })
    return alphabeticalList
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
    let order = movies.sort(function (movie1, movie2) {
        if (movie1.title < movie2.title) {
            return -1
        } else if (movie1.title > movie2.title) {
            return 1
        }
        return 0;
    })
    return order
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
