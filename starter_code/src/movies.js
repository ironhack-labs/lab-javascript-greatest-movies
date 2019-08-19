/* eslint no-restricted-globals: 'off' */

// Iteration 1: All rates average - Get the average of all rates with 2 decimals 
/*
function ratesAverage(arr) {
    const sum = arr.reduce((accumolator, currenValue) => {
        if (currenValue.rate == "") {
            return accumolator + 0
        }
        return accumolator + parseFloat(currenValue.rate)
    }, 0) //<--- it starts with the accumolator
    const avg = sum / arr.length;
    return Math.round(avg * 100) / 100; //<--- Making two decimals after comma
}
*/

function ratesAverage(arr) {
    const ratesSum = arr.reduce((acc, val) => {
        let rate = Number(val.rate);
        if (!rate) rate = 0;
        return acc + rate
    }, 0)
    const average = ratesSum / arr.length
    return parseFloat(average.toFixed(2)); //<--- hmmm...
}



// Iteration 2: Drama movies - Get the average of Drama Movies
/*
function dramaMoviesRate(arr) {
    const drama = arr.filter(movies => movies.genre.includes('Drama'));
    if (drama.length === 0) {
        return 0
    }
    return ratesAverage(drama);
}
*/

function dramaMoviesRate(arr) {
    const drama = arr.filter(movies => movies.genre.includes("Drama")); // <--- movie.genre.indexOf("Drama") !== -1;
    if (!drama.length) return 0; //<--- same as --- if(drama.length === 0) return 0;
    return ratesAverage(drama);
}


// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)
/*
function orderByDuration(arr) {
    const sortDuration = arr.sort((a, b) => {
        if (a.duration === b.duration) {
            return a.title < b.title ? -1 : 1
        }
        return parseFloat(a.duration) < parseFloat(b.duration) ? -1 : 1
    })
    return sortDuration;
}
*/

function orderByDuration(arr) {
    let sorted = arr.slice().sort((a, b) => { //<--- slice copies the arr without effecting it - because sort modifies the original arr.
        //if (a.duration === b.duration) return a.title.localeCompare(b.title) //<--- localeCompare
        if (a.duration === b.duration) return a.title < b.title ? -1 : 1 //<---- if a is before b -1 
        return a.duration - b.duration
    })
    return sorted;
}


// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct
/*
function howManyMovies(arr) {
    const spielbergMovies = arr.filter(movies => movies.director == "Steven Spielberg")
    return spielbergMovies.length
}
*/

function howManyMovies(arr) {
    const stevenDrama = arr.filter(movies => {
        if (movies.director === "Steven Spielberg" && movies.genre.includes("Drama")) return true;
    })
    return stevenDrama.length
}


// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles
/*
function orderAlphabetically(arr) {
    const alphabeticalOrder = arr.map(movie => movie.title).sort().slice(0, 20); //<---- works because all the titels have the same style. In case we have for example "a" < "A" it would return false because it compares the strings not the chars
    return alphabeticalOrder;
}
*/

function orderAlphabetically(arr) {
    const titles = arr.map(movie => {
            return movie.title
        })
        .sort((a, b) => {
            return a.localeCompare(b);
        })
        .slice(0, 20)
    return titles
} //<----- better solution 

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(duration) {
    let totalTime = 0;
    let hours = 0;
    let minutes = 0;

    const time = duration.split(" ");

    if (time.length >= 2) {
        hours = parseInt(time[0]);
        minutes = parseInt(time[1]);
    } else {
        // if (time[0].indexOf("min") !== -1) {
        if (time[0].includes("min")) {
            minutes = parseInt(time[0]);
            // } else if (time[0].indexOf("h") !== -1) {
        } else if (time[0].includes("h")) {
            hours = parseInt(time[0]);
        }
    }

    totalTime = hours * 60 + minutes;
    return totalTime;
}


// BONUS Iteration: Best yearly rate average - Best yearly rate average