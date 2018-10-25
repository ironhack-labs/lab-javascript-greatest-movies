/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 

function turnHoursToMinutes(arr) {
    return minuteArr = arr.map(function (elem) {
        var newDuration = ""
        if (elem.duration.indexOf("h") == -1) {
            newDuration = parseInt(elem.duration);
        } else if (elem.duration.indexOf("m") == -1) {
            newDuration = parseInt(elem.duration) * 60;
        } else {
            newDuration = parseInt(elem.duration.split(" ")[0]) * 60 + parseInt(elem.duration.split(" ")[1]);
        }
        return Object.assign({}, elem, { duration: newDuration })
    })
}

// Get the average of all rates with 2 decimals 

function ratesAverage(arr) {
    var count = 0;
    var allRates = arr.reduce(function (accumulator, elem) {
        count++;
        return (accumulator + Number(elem.rate));
    }, 0)
    var averageRate = allRates / count;
    return parseFloat(averageRate.toFixed(2));
}


// Get the average of Drama Movies

function dramaMoviesRate(arr) {
    var dramaMovies = arr.filter(function (elem) {
        return elem.genre.includes("Drama")
    });
    var count = 0;
    var dramaRates = dramaMovies.reduce(function (acc, elem) {
        count++;
        return acc + Number(elem.rate);
    }, 0)
    averageDrama = dramaRates / count;
    if (dramaRates == 0) {
        return undefined;
    } else {
        return parseFloat(averageDrama.toFixed(2));
    }
}

// Order by time duration, in growing order


function orderByDuration(arr) {
    return arr.sort(function (a, b) {
        if (a.duration === b.duration) {
            return arr[1].title[0] < arr[0].title[0];
        } else {
            return a.duration - b.duration;
        }
    })
}

// How many movies did STEVEN SPIELBERG

function howManyMovies(arr) {
    if (arr.length === 0) {
        return undefined;
    } else {
        var dramaMovies = arr.filter(function (elem) {
            return elem.genre.includes("Drama");
        });
        var stevenMovies = dramaMovies.map(function(elem) {
            if (elem.director === "Steven Spielberg") {
                return `Steven Spielberg directed ${elem} drama movies!`
            } else {
                return
            }
        })
}
console.log(stevenMovies)
return stevenMovies;
}

// Order by title and print the first 20 titles


// Best yearly rate average
