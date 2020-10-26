// Iteration 1: All directors? - Get the array of all directors.

const getAllDirectors = arrayOfMovies => arrayOfMovies.map(movie => movie.director);

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// let clonedArrayForDuplicatedDirectors = JSON.parse(JSON.stringify(movies));

// let getAllDirectorsWithDuplicated = arrayOfMovies => arrayOfMovies.map(clonedArrayForDuplicatedDirectors => clonedArrayForDuplicatedDirectors.director);
// let noDuplicatedGetAllDirectors = []
// let obj = {}
// getAllDirectorsWithDuplicated.forEach(elm => {
//     if (!(elm in obj)) {
//         obj[elm] = true
//         noDuplicatedGetAllDirectors.push(elm)
//     };
// });
// return noDuplicatedGetAllDirectors;

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(arr) {
    const howManySpielbergMoviesAreDramas = arr.filter(elm => elm.director.toLowerCase() === "steven spielberg" && elm.genre.includes("Drama"))
    return howManySpielbergMoviesAreDramas.length;
};

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(arr) {
    if (arr.length === 0) {
        return 0;
    };
    const averageRate = arr.reduce(function (acc, arr) {
        return acc + (arr.rate || 0);
    }, 0) / arr.length;
    return ((Math.round(averageRate * 100)) / 100);
};

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(arr) {
    const dramaMoviesList = arr.filter(function (arr) {
        return arr.genre.includes("Drama");
    });
    return ratesAverage(dramaMoviesList);
};

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

let clonedArrayForOrderByYear = JSON.parse(JSON.stringify(movies));

function orderByYear(clonedArrayForOrderByYear) {
    const moviesByYear = clonedArrayForOrderByYear.sort(function (a, b) {
        if (a.year < b.year) {
            return -1;
        } else if (a.year > b.year) {
            return 1;
        };
        if (a.title > b.title) {
            return 1;
        } else if (a.title < b.title) {
            return -1;
        };
    });
    return moviesByYear.slice();
};

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

let clonedArrayForAlphabeticalOrder = JSON.parse(JSON.stringify(movies));

function orderAlphabetically(clonedArrayForAlphabeticalOrder) {
    const movieListByTitle = clonedArrayForAlphabeticalOrder.map(clonedArrayForAlphabeticalOrder => (clonedArrayForAlphabeticalOrder.title));
    const alphabeticalOrderedList = movieListByTitle.sort();
    return alphabeticalOrderedList.slice(0, 20);
};

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

let clonedArrayForHoursToMinutes = JSON.parse(JSON.stringify(movies));

function turnHoursToMinutes(clonedArrayForHoursToMinutes) {
    const movieListByDuration = clonedArrayForHoursToMinutes.map(clonedArrayForHoursToMinutes => (clonedArrayForHoursToMinutes.duration));
    const hoursToMinutes = movieListByDuration.asMinutes();
    return hoursToMinutes // This is not the way...
}

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average

let clonedArrayForYearlyRate = JSON.parse(JSON.stringify(movies));



// Extra Bonus - Best director ever
// If you want to know best director ever you can go <a haref="https://es.wikipedia.org/wiki/Guy_Ritchie">here</a>