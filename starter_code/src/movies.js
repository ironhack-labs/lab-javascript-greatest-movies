/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

//                                                                   Is it not possible to use .map here?
function orderByYear(el) {
    const movYearOrd = el.slice().sort(function (a, b) {
        if (a.year === b.year) {
            return a.title.localeCompare(b.title);
        }
        return a.year - b.year;
    });
    if (el.length <= 0) {
        return null;
    }
    return movYearOrd;
}
console.log(orderByYear(movies));






// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

function howManyMovies(el) {
    const splbrgDrmMvs = el.filter(function (el) {
        if (el.director === "Steven Spielberg" &&
            el.genre.includes("Drama")) {
            return true;
        }
    })
    return splbrgDrmMvs.length;
}

console.log(howManyMovies(movies));




// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(el) {
    const alphOrd =
        el.slice().sort(function (a, b) {
            return a.title.localeCompare(b.title);

        }).map(function (el) {
            return el.title
        }).slice(0, 20)
    return alphOrd;
}
console.log(alphOrd(movies));




// Iteration 4: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(el) {
    if (!el.length) return 0;
    let avgAllRts = 0;
    const sumAllRts = el.reduce(function (acc, rateVal) {
        if (!rateVal.rate) return acc;
        return acc + rateVal.rate;
    }, 0);
    avgAllRts = parseFloat((sumAllRts / el.length).toFixed(2));
    return avgAllRts;
}
console.log(avgAllRts(movies));




// Iteration 5: Drama movies - Get the average of Drama Movies
// Using ratesAverage function from above :)

function dramaMoviesRate(el) {
    const dramaMovies = el.filter(function (el) {
        if (el.genre.includes("Drama")) {
            return true;
        }
    });
    return ratesAverage(dramaMovies);
}
console.log(dramaMoviesRate(movies));




// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(el) {
    const moviesInMin = el.map(function (el) {
        let movDuration = el.duration
        //                                         complicated!!!???
    })
    return moviesInMin
}
console.log(moviesInMin);







// BONUS Iteration: Best yearly rate average - Best yearly rate average