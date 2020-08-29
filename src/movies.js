// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(moviesArray) {
    let directors = moviesArray.map((x) => x.director); //troquei (item) por (x) (so pra lembrar)
    return directors;

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(moviesArray){
    let spielberg = moviesArray.filter((x) => x.director == "Steven Spielberg" && x.genre.includes("Drama"));
    return spielberg.length;
}


// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(moviesArray){
    if (moviesArray.length === 0){
        return 0;
    }
    let emptyRates = movies.filter((x) => !x.rate).map((x) => (x.rate = 0));

    let mAgv = Math.round((movies.reduce(acc, x) => acc + x.rate, 0) * 100) / moviesArray.length) / 100;
    return mAgv;

}

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(moviesArray){
    return ratesAvarage(moviesArray.filter((x) => x.genre.includes("Drama")));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(moviesArray) {
    let sortMovies = moviesArray.map((x) => x).sort((a, b) => {
        if (a.title < b.title){
            return -1;
        }
        if (a.title > b.title){
            return 1;
        }
        return 0;
    })
    .sort ((a, b) => {
        return a.year - b.year;
    });
    return sortMovies;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(moviesArray){
    return moviesArray.map((x) => x.title)
    sort()
    .slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
