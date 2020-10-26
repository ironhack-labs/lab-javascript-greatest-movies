// Iteration 1: All directors? - Get the array of all directors.

const getAllDirectors = arrayOfMovies => arrayOfMovies.map(movie => movie.director);

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// function oneFilmDirector(arr) {
    
//     for (i = 0; i < arr.length; i++) {
//         if (lastIndexOf(arr[i]) !== i) {
//             director.spliced(i, 1)
//             i--
//         }
//     }
//     return arr;
// }

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(arr) {
    const howManyList = arr.filter(elm => elm.director.toLowerCase() === "steven spielberg" && elm.genre.includes("Drama"))
    return howManyList.length;
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
    const dramaList = arr.filter(function (arr) {
        return arr.genre.includes("Drama");
    });
    return ratesAverage(dramaList);
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
    const movieList = clonedArrayForAlphabeticalOrder.map(clonedArrayForAlphabeticalOrder => (clonedArrayForAlphabeticalOrder.title));
    const alphabeticalOrderedList = movieList.sort();
    return alphabeticalOrderedList.slice(0, 20);
};

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

let clonedArrayForHoursToMinutes = JSON.parse(JSON.stringify(movies));

function turnHoursToMinutes(clonedArrayForHoursToMinutes) {
    
}

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average

let clonedArrayForYearlyRate = JSON.parse(JSON.stringify(movies));



// Extra Bonus - Best director ever
// If you want to know best director ever you can go <a haref="https://es.wikipedia.org/wiki/Guy_Ritchie">here</a>