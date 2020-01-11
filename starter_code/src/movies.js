/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(array) {
    if (array.length === 0) return null;
    let newArray = array.sort((a, b) => {
        if (a.year - b.year === 0) {
            if (a.title < b.title) return -1;
            else return 1;
        } else return a.year - b.year;
    });
    return newArray;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct
function howManyMovies(array) {
    if (array.length === 0) return 0;
    let newArray = array.filter(element => element.director === "Steven Spielberg" && element.genre.includes("Drama"));
    return newArray.length;
}

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(array) {
    if (array.length === 0) return null;
    let newArray = array
        .map(movie => movie.title)
        .sort((a, b) => {
            if (a < b) return -1
            else return 1
        })
    newArray.splice(20);
    return newArray;
}

// Iteration 4: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(array) {
    if (array.length === 0) return 0;
    let score = array.reduce((accumulator, currentValue) => {
        if (typeof currentValue.rate !== "number") {
            currentValue.rate = 0
        }
        return accumulator + currentValue.rate
    }, 0)
    score = score / array.length
    return Math.round(score * 100) / 100;
}

// Iteration 5: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(array) {
    if (array.length === 0) return 0;
    let dramaArray = array.filter(element => element.genre.includes("Drama"));
    if (dramaArray.length === 0) return 0;
    return ratesAverage(dramaArray)
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(arr) {
    let newArray = arr.map((element)=>{
        let newElement = {
            ...element
        }
        let minutes = 0;
        for (i = 0; i - 1 < element.duration.length; i++) {
            if (element.duration[i + 1] === "h") {
                minutes += +element.duration[i] * 60;
            }
            if (element.duration[i + 1] === "m") {
                minutes += +element.duration[i] + +element.duration[i - 1]*10;
            }
        }
        newElement.duration = minutes;
        return newElement;
    });
    return newArray;
}

// BONUS Iteration: Best yearly rate average - Best yearly rate average