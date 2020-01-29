/* eslint no-restricted-globals: 'off' */
//const array = require('./data');

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(array) {
    const newArray = JSON.parse(JSON.stringify(array));
    return newArray.sort((m1, m2) => m1.year - m2.year === 0 ? m1.title.localeCompare(m2.title) : m1.year - m2.year);
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct
function howManyMovies(array) {
    return array.filter(m => m.genre.includes("Drama") && m.director === "Steven Spielberg").length;
}

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(array) {
    const newArray = JSON.parse(JSON.stringify(array));
    return newArray.map(m => m.title).sort((m1, m2) => m1.localeCompare(m2)).slice(0, array.length < 20 ? array.length : 20);
}

// Iteration 4: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(array) {
    if (array.length < 1) {
        return 0;
    }
    return Number((array.reduce((sum, current) => (sum = current.rate !== undefined ? sum += current.rate : sum), 0) / array.length).toFixed(2));
}

// Iteration 5: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(array) {
    return ratesAverage(array.filter(m => m.genre.includes("Drama")));
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(array) {
    const newArray = JSON.parse(JSON.stringify(array));
    return newArray.map(m => {
        m.duration = extractMinutes(m.duration);
        return m;
    });
}

function extractMinutes(duration) {
    let stringHours = duration.match(/\dh/gi);
    let hoursInMinutes = stringHours !== null ? Number(stringHours[0].replace("h", "")) * 60 : 0;
    let stringMinutes = duration.match(/\dmin|\d\dmin/gi);
    let minutes = stringMinutes !== null ? Number(stringMinutes[0].replace("min", "")) : 0;
    return hoursInMinutes + minutes;
}

// BONUS Iteration: Best yearly rate average - Best yearly rate average
