// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

let getAllDirectors = arr => (arr.map(element => element.director));

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

let howManyMovies = (arr) => {

    let filteredArr = arr.filter(element => element.director === "Steven Spielberg" && element.genre.includes("Drama"))

    return filteredArr.length;
};

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

let ratesAverage = function (arr) {
    if (arr.length === 0) {
        return 0;
    }

    let filmsWithRate = arr.filter(function (element) {
        return element.rate >= 0;
    });

    let reducedArr = filmsWithRate.reduce(function (acc, current) {

        let updatedAcc = acc + current.rate;
        return updatedAcc;
    }, 0);

    return (Math.round((reducedArr / arr.length) * 100)) / 100;
}

// Iteration 4: Drama movies - Get the average of Drama Movies

let dramaMoviesRate = function (arr) {
    let filteredArr = arr.filter(function (element) {
        return element.genre.includes("Drama");
    });

    if (filteredArr.length === 0) {
        return 0;
    }

    let reducedArr = filteredArr.reduce(function (acc, current) {
        let updatedAcc = acc + current.rate;
        return updatedAcc;
    }, 0);

    return (Math.round((reducedArr / filteredArr.length) * 100)) / 100;
};

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

let orderByYear = function (arr) {

    let newArr = JSON.parse(JSON.stringify(arr));

    let sortedArr = newArr.sort(function (a, b) {
        if (a.year === b.year) {
            return a.title.localeCompare(b.title);
        } else {
            return a.year - b.year;
        }
    });

    return sortedArr;
};

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

let orderAlphabetically = function (arr) {
    let newArr = JSON.parse(JSON.stringify(arr));

    let titlesArr = newArr.map(function (element) {
        return element.title;
    });

    let sortedArr = titlesArr.sort();

    if (arr.length > 20) {
        return sortedArr.splice(16);
    } else {
        return sortedArr;
    }
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes



// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average