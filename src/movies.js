// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(array) {
    const directors = array.map(elem => elem.director);

    return directors;
}



// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(array) {
    const dramasFromSpielberg = array.filter(elem => {
        return (elem.director === "Steven Spielberg") && elem.genre.includes("Drama");
    })

    return dramasFromSpielberg.length;
}



// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(array) {
    if (!array.length) {
        return 0;
    }
    const rateSum = array.reduce((acc, elem) => {
        if (!elem.rate) {
            return acc + 0;
        }

        return acc + elem.rate;

    }, 0);

    return parseFloat((rateSum / array.length).toFixed(2));
}



// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(array) {
    const dramaRates = array.filter(elem => elem.genre.includes("Drama"));

    return ratesAverage(dramaRates);
}



// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(array) {
    const orderedYears = JSON.parse(JSON.stringify(array));

    // https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
    orderedYears.sort(function (a, b) {
        if (a.year > b.year) {
            return 1;
        } else if (a.year < b.year) {
            return -1;
        } else {
            if (a.title > b.title) {
                return 1;
            } else {
                return -1;
            }
        }
    });

    return orderedYears;
}



// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(array) {
    const newMovies = JSON.parse(JSON.stringify(array));
    const orderedMovies = newMovies.map(elem => elem.title);

    orderedMovies.sort();

    return orderedMovies.slice(0, 20);
}



// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?