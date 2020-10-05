// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors (movies) {
    const directorsArray = movies.map (movie => movie.director);
    return directorsArray;
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. 
//How could you "clean" a bit this array and make it unified (without duplicates)?
directorsArray.filter((item, index) => directorsArray.indexOf(item) !== index);

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies (movies) {
    const SSDramaArray = movies.filter(dramas => dramas.director == 'Steven Spielberg' && dramas.genre.includes ('Drama'));
    return SSDramaArray.length;
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movies) {
    if (movies.length === 0) {
        return 0;
    }

    const TotalRate = movies.reduce((accumulator, reviewRate) => {
        if (typeof reviewRate.rate === 'number') {
            return accumulator + reviewRate.rate;
        } else {
            return accumulator + 0;
        }
    }, 0);

    const averageRate = TotalRate / movies.length;
    return Math.round(averageRate * 100) / 100;
}

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movies) {
    const dramaMovies = movies.filter(movie => movie.genre.includes ("Drama"));
    return ratesAverage(dramaMovies);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear (movies) {

const orderedArray = JSON.parse(JSON.stringify(movies));

orderedArray.sort((a, b) => {
if (a.year === b.year && a.title < b.title) {
    return -1;
    } else if (a.year === b.year && a.title > b.title) {
        return 1;
    }
    else if (a.year < b.year) {
        return -1;
    }
    else if (a.year > b.year) {
        return 1;
    }
});
    return orderedArray;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically (movies) {
    const AlphabeticalArray = movies.map(movie => movie.title);
    AlphabeticalArray.sort();
    return AlphabeticalArray.slice (0,20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(movies) {

}

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average

function bestYearAvg (movies) {

}