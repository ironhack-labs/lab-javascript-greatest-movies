// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(anyArray) {
    let allDirectors = anyArray.map(function (objMovie) {
        return objMovie.director;
    });
    return allDirectors;
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(anyArray) {
    let StevenDramas = anyArray.filter(function (objMovie) {
        return objMovie.director === "Steven Spielberg" && objMovie.genre.includes("Drama");
    });
    return StevenDramas.length;
}

// // Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(anyArray) {
    if (anyArray.length === 0) return 0;
    var newAverage = anyArray.reduce(function (acc, objMovie) {
        return acc + (objMovie.rate || 0);
    }, 0);
    return Number((newAverage / anyArray.length).toFixed(2));
}

// // Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(anyArray) {
    let newDramaAvr = anyArray.filter(function (objMovie) {
        return objMovie.genre.includes("Drama");
    });
    return ratesAverage(newDramaAvr);
}
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(anyArray) {
    let newMovies = JSON.parse(JSON.stringify(anyArray));
    return newMovies.sort((movie1, movie2) => {
        if (movie1.year === movie2.year) return movie1.title < movie2.title ? -1 : 1;
        else return movie1.year - movie2.year
    });
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(anyArray) {
    let newMovies = JSON.parse(JSON.stringify(anyArray));
    newMovies.sort((movie1, movie2) => movie1.title < movie2.title ? -1 : 1);
    let titles = [];
    for (let i = 0; i < newMovies.length; i++) {
        if (i == 20) {
            break;
        }
        titles.push(newMovies[i].title);
    }
    return titles
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average