// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(array) {
    let directors = array.map((obj) => obj.director);
    directors = [... new Set(directors)];
    return directors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(array) {
    ssMovies = array.filter((obj) => (obj['director'] === "Steven Spielberg" && obj['genre'].includes('Drama')));
    return ssMovies.length;
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(array) {
    let rateSum = array.reduce((sum, obj) => sum += obj['rate'] || 0, 0);
    let rateAverage = rateSum / array.length;
    return Math.round(rateAverage * 100) / 100 || 0;
}

// Iteration 4: Drama movies - Get the average of Drama Movies


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
