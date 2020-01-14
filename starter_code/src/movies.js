/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

const orderByYear = obj => {
    return obj.concat().sort(function (a, b) {
        return a.year === b.year ? (a.title).localeCompare(b.title) : a.year - b.year;
    })
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

function howManyMovies(array) {
    let count = 0;
    array.filter(a => {
        if (a.director == "Steven Spielberg" && a.genre.includes("Drama")) {
            return count++;
        }
    })
    return count;
}

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(array) {
     return array.concat().sort(function (a, b) {
        return (a.title).localeCompare(b.title);
    }
    ); 
}
// Iteration 4: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(array) {
    let currentRate = 0;
    let sum = 0;
    let count = 0;
    for (i = 0; i < array.length; i++) {
        currentRate = currentRate + array[i].rate;
        count++;
    }
    
    return count === 0 ? 0 : Math.round(((currentRate / count) * 100)) / 100;
}
// Iteration 5: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(array) {
    let currentRate = 0;
    let sum = 0;
    let count = 0;
    for (i = 0; i < array.length; i++) {
        if (array[i].genre.includes("Drama")) {
            currentRate = currentRate + array[i].rate;
            count++;
        }
    }
    return Math.round(((currentRate / count) * 100)) / 100;
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(array) {
    let newArr = [];
    for(i = 0; i < array.length ; i++) {
       newArr[i] = array[i].duration.replace(/h/g, "").replace(/min/g, "").replace(/ /g, "");

       newArr[i] = Number(newArr[i]);
       newArr[i] = Number(newArr[i].toString().substring(0,1) * 60) + Number(newArr[i].toString().substring(1,3));

    }
    return newArr;
   }


// BONUS Iteration: Best yearly rate average - Best yearly rate average


