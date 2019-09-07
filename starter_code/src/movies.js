/* eslint no-restricted-globals: 'off' */
// const movies = require('./data');

// Iteration 1: All rates average - Get the average of all rates with 2 decimals 
function ratesAverage(arr){
    let ratesArray = arr.map((movie) => movie.rate);
    let ratesAverage = ratesArray.reduce((a, b) => a+b)/ratesArray.length;
    return parseFloat(ratesAverage.toFixed(2));
}
 
// Iteration 2: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(arr) {
    let dramaArray = arr.filter((movie) => movie.genre.indexOf("Drama") != -1);
    if (dramaArray.length === 0) {
        return 0;
    }
    let ratesArray = dramaArray.map((movie) => movie.rate);
    let ratesAverage = ratesArray.reduce((a, b) => a+b)/ratesArray.length;
    return parseFloat(ratesAverage.toFixed(2));
}

// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)
function orderByDuration(arr) {
    let sortedArray = arr.sort(function(a, b) {
        if(a.duration > b.duration){
            return 1;
        } else if (a.duration < b.duration) {
            return -1;
        } else {
            return (a.title).localeCompare(b.title);
        }

    });
    return sortedArray;
}

// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct
function howManyMovies(arr) {
    let dramaArray = arr.filter((movie) => movie.genre.indexOf("Drama") != -1);
    let spielArray = dramaArray.filter((movie) => movie.director.indexOf("Steven Spielberg") != -1);
    return spielArray.length;
}

// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arr) {
    let sortedArray = arr.sort((a ,b) => (a.title).localeCompare(b.title))
    let nameArray = sortedArray.slice(0, 20).map((movie) => movie.title);
    return nameArray;
}
// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(arr) {
    let formatedArray = arr.map(function(movie) {
        let hours = 0;
        let minutes = 0;
        if(movie.duration.indexOf("h") != -1){
            hours = Number(movie.duration.slice(0,(movie.duration.indexOf("h"))));
        }
        if(movie.duration.indexOf("min") != -1){
            minutes = Number(movie.duration.slice((movie.duration.indexOf(" ")),(movie.duration.indexOf("m"))));
        }
        movie.duration = hours*60+minutes;
    });


    return formatedArray;
}

// console.log(turnHoursToMinutes(movies));
// BONUS Iteration: Best yearly rate average - Best yearly rate average
