/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arr) {
    let newArr = [...arr];
    newArr.sort(function(a,b) {
        if (a.year !== b.year) {
            return a.year - b.year;
        } else {
            if (a.title > b.title) {
                return 1;
            } else if (a.title < b.title) {
                return -1
            } else {
                return 0;
            }
        }        
    });
    return newArr;
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct
function howManyMovies(arr) {
    let total=0;
    let steven = arr.filter(function(element) {
        return (element.director === "Steven Spielberg") && (element.genre.indexOf("Drama")) != -1;     
    });
    return steven.length;
}
// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arr) {
    let order = [...arr];
    order.sort(function(a,b) {
        if (a.title > b.title) return 1;
        else if (a.title < b.title) return -1
        else return 0;
    });
    let limit = order.slice(0, 20);

    newArray = limit.map(function(value) {
        return value.title;
    });
    return newArray;
}
// Iteration 4: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(arr) {
    if (arr.length === 0) return 0;
    let sum = arr.reduce(function(acc,currentValue) {
        if (typeof currentValue.rate  != "number") currentValue.rate = 0;
        return acc += currentValue.rate;
    }, 0 );
    let average = sum/arr.length;
    return Number(average.toFixed(2));
}

// Iteration 5: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(arr) {
    let dramas = arr.filter(function(element) {
        return element.genre.includes("Drama");
    });
    if (dramas.length === 0) return 0;
    let sum = dramas.reduce(function(acc,currentValue) {
        if (typeof currentValue.rate  != "number") currentValue.rate = 0;
        return acc += currentValue.rate;
    }, 0 );
    let average = sum/dramas.length;
    return Number(average.toFixed(2));
}
// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
function hoursToMinutes(stgToNb) {
    if (stgToNb.includes("h")) {
        let total = 0;
        let hour = Number(stgToNb.split("h") [0] * 60);
        let withoutHour = stgToNb.split("h") [1];
        let minute = Number(withoutHour.split("m") [0]);
        return total = hour + minute;
    } else {
        let minute = Number(stgToNb.split("m") [0]);
        return minute;
    }
}

function turnHoursToMinutes(arr) {
    if (arr.length === 0) return 0;
    let newTime = [...arr];
    let duration = 0;
    newTime = arr.map(function(value) {
        return {
            name: value.name,
            title:  value.title,
            year: value.year,
            director: value.director,
            duration: hoursToMinutes(value.duration),
            genre: value.genre,
            rate: value.rate,         
        }
    });
    return newTime;
}
// BONUS Iteration: Best yearly rate average - Best yearly rate average
