// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(array) {
    const allDirectors = array.map(function (elem) {
        return elem.director;
    });
    return allDirectors;
};

console.log(getAllDirectors(movies));


// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(array) {
    const dramaMovies = array.filter(elem => elem.genre.includes("Drama") && elem.director === "Steven Spielberg");
    return dramaMovies.length;
};

console.log(howManyMovies(movies));


// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(array) {
    if (array.length === 0) {
        return 0;
    }
    const totalRates = array.reduce((acc, movie) => {
        if (movie.rate) {
            return acc += movie.rate;
        }
        return acc;
    }, 0);
    const avgRate = totalRates / array.length;

    return Number(avgRate.toFixed(2)); // Sin Number no redondea a 2 decimales.
};

console.log(ratesAverage(movies));



// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(array) {
    const movieRateDrama = array.filter(elem => elem.genre.includes("Drama"))

    if (array.length === 0) {
        return 0;
    }
    const totalRatesDrama = array.reduce((acc, movie) => {
        if (movie.rate) {
            return acc += movie.rate;
        }
        return acc;
    }, 0);

    const avgRateDrama = totalRatesDrama / array.length;
    return avgRateDrama;

}
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(array) {
    const newArr = [];
    for (let i = 0; i < array.length; i++) {
        newArr.push(array[i])
        newArr.sort((a, b) => a.year - b.year)
    }
    return newArr;
};
console.log(orderByYear(movies));



// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(array) {
    const alphaOrder = array
    .map(order => order)
    .sort((a, b) => a.title - b.title)
    
    return alphaOrder;
};

console.log(orderAlphabetically(movies));


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average