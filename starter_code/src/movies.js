const films = require("./data")

/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arr) {
    if (arr.length ===1) {
        return arr
    }
    var newArray = [...arr];
    let sortedMovies = newArray.sort(function(a,b) {
        if (a.year !== b.year) {
            return a.year - b.year;
        } else return a.title.localeCompare(b.title)
    }) 
    return sortedMovies
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

function howManyMovies(arr) {
    var counter = 0;
    arr.filter(function(a) {
        if (a.director === "Steven Spielberg" && a.genre.includes("Drama")){
            counter++
        }
    }); return counter
}

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(arr) {
    var newArray = [];
    if (arr.length < 20) {
        newArray = arr.map(function(a){
            return a.title;
        })
    } if (arr.length > 20) {
        newArray = arr.splice(0, 20).map(function(a){
            return a.title
        }).sort(function(a,b){
           return a.localeCompare(b)
        })
    }; return newArray;
}

// WORKING BUT Not ACCEPTED BY JASMINE?

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(arr) {
    if (arr.length === 0) {
        return 0
    }
    var sumRates = 0;
    arr.map(function(a){
        if (Boolean(a.rate) === false) {
            a.rate = 0
        }
        return sumRates += a.rate
    }); return Math.round((sumRates / arr.length)*100) / 100
}


// Iteration 5: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(arr) {
    var dramaMovies = [];
    var sumDramaRate = 0;
    arr.filter(function(a){
        if (a.genre.includes("Drama")) {
            dramaMovies.push(a)
        }
    });
    if (dramaMovies.length === 0) {
        return 0
    };
        dramaMovies.map(function(a){
        sumDramaRate += a.rate
    }); 
    return Math.round((sumDramaRate / dramaMovies.length)*100) / 100
}


// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(arr){
    let newArr = [...arr];
    newArr.map(function(a) {
        // 1ST TRY
        if (a.duration.includes("h") === false) {   // if there's no "h" : duration = only minutes
            a.duration = parseFloat(a.duration)
        }
        if (a.duration.includes("min") === false) { // if there's no "min" : duration = only hour
            duration = parseFloat(a.duration)*60
        /*  2ND TRY
        if (a.duration.charAt(1) === "h" && a.duration.charAt(a.duration.length-1) !== "n") {   // if 2nd = "h" and no "n" at the end : hour only
            a.duration = parseFloat(a.duration)*60
        }if (a.duration.charAt(1) !== "h") {        // if 2nd is not "h" : minute only
            a.duration = parseFloat(a.duration)
        */
        }else a.duration = (parseFloat(a.duration)*60) + (parseFloat(a.duration.slice(2,8)))    // number of hour * 60 + parseFloat of the "xxmin" part
    }); return newArr
}


console.log(turnHoursToMinutes(films))
// BONUS Iteration: Best yearly rate average - Best yearly rate average
