/* eslint no-restricted-globals: 'off' */

// Iteration 1: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(arrMovie) {
    const average =
        arrMovie.reduce(function (accumulator, value) {
            return accumulator + parseFloat(value.rate);
        }, 0) / arrMovie.length;
    return average;
    // alternative: return average.fixedTo(2);
}

console.log(ratesAverage(movies));

// Iteration 2: Drama movies - Get the average rate of Drama Movies

function dramaMoviesRate(arrMovie) {
    // filter: Array with all Drama-Movies
    let arrDrama = arrMovie.filter(function (movie) {
        if (movie.genre.includes("Drama")) {
            return true;
        } else {
            return false;
        }
    });
    // filter: Array with all Drama-Movies which have a rate
    let arrDramaWithRate = arrDrama.filter(function (movie) {
        if (movie.hasOwnProperty("rate")) {
            return true;
        } else {
            return false;
        }
    });
    // reduce: average rate
    if (arrDramaWithRate.length === 0) {
        return 0;
    } else {
        let averageDrama =
            arrDramaWithRate.reduce(function (accumulator, value) {
                return (accumulator += parseFloat(value.rate));
                // It should return the average of the array, float! said Jasmins ... but it is float?
            }, 0) / arrDramaWithRate.length;

        return averageDrama;
    }
}

console.log(dramaMoviesRate(movies)); // 8.317297297297278

// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)

function orderByYear(arrMovie) {
    const orderedByYear = arrMovie.sort(function (a, b) {
        if (a.year !== b.year) {
            return a.year - b.year;
        } else {
            return a.title - b.title;
        }
        // equal year -> order them alphabetically by their title
    });
    return orderedByYear;
    // If two movies have the same year, order them alphabetically by their title
}

console.table(orderByYear(movies));

// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct

function howManyMovies(arrMovie) {
    // filter: Array with just the Dramas:
    let arrDrama = arrMovie.filter(function (movie) {
        if (movie.genre.includes("Drama")) {
            return true;
        } else {
            return false;
        }
    });
    // reduce: How many films of Spielberg
    const howMany = arrDrama.reduce(function (accumulator, value) {
        return accumulator + Number(value.director === "Steven Spielberg");
    }, 0);
    return howMany;
}

// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles


function orderAlphabetically(arrMovie) {

    const orderedArrMovie = arrMovie.sort(function (a, b) {
        if (a.title > b.title) {
            return 1;
        } else return -1;
    });

    if (orderedArrMovie.length > 20) {
        orderedArrMovie.splice(20);
    }

    let orderedMoviesResult = [];
    for (let i = 0; i < orderedArrMovie.length; i++) {
        orderedMoviesResult.push(orderedArrMovie[i].title);
    }
    return orderedMoviesResult;
}

console.log(orderAlphabetically(movies));
// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(arrMovie) {
    const convertedArray = arrMovie.map(function (movie) {

        if (movie.duration.includes("h") && movie.duration.includes("min")) {
            let minHourArr = movie.duration.split("h ");
            let hours = parseInt(minHourArr[0]);
            let minutes = parseInt(minHourArr[1]);
            let minutesComplete = hours * 60 + minutes;
            return {
                title: movie.title,
                year: movie.year,
                director: movie.director,
                duration: minutesComplete,
                genre: movie.genre,
                rate: movie.rate
            };
        } else if (movie.duration.includes("min") && movie.duration.indexOf("h") === -1) {
            return {
                title: movie.title,
                year: movie.year,
                director: movie.director,
                duration: parseInt(movie.duration),
                genre: movie.genre,
                rate: movie.rate
            };
        } else {
            return {
                title: movie.title,
                year: movie.year,
                director: movie.director,
                duration: parseInt(movie.duration) * 60,
                genre: movie.genre,
                rate: movie.rate
            };
        }

    });
    return convertedArray;
}

console.log(turnHoursToMinutes(movies));



// BONUS Iteration: Best yearly rate average - Best yearly rate average