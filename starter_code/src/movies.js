/* eslint no-restricted-globals: 'off' */

// Iteration 1: All rates average - Get the average of all rates with 2 decimals 
function ratesAverage(array) {
    let arrayNew = array.map(Element => {
        return Element.rate;
    })
    parseFloat(arrayNew);
    let reducer = (accumulator, currentValue) => accumulator + currentValue;
    let average = Math.round((arrayNew.reduce(reducer) / arrayNew.length) * 100) / 100;
    return average;
}

// Iteration 2: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(array) {
    let dramaMovies = array.filter(movie => {
        return movie.genre.includes('Drama');
    })
    if (!dramaMovies.length) return 0;
    return ratesAverage(dramaMovies);
}

// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)

function orderByDuration(array) {
    let newArray = Array.from(array);
    newArray = turnHoursToMinutes(newArray);
    newArray.sort(function (a, b) {
        return (a.duration === b.duration ? a.title.localeCompare(b.title) : a.duration - b.duration);
    });
    return newArray;
}



// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct


// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(array) {

    let newArray = array.map(elementObject => {
        if (isNaN(elementObject.duration)) {
            let minutesIndex = elementObject.duration.indexOf('m');
            let hoursIndex = elementObject.duration.indexOf('h');
            let changeHours = parseInt(elementObject.duration.slice(0, hoursIndex)) * 60;
            let changeMinutes = parseInt(elementObject.duration.slice(hoursIndex + 2, minutesIndex));

            if (minutesIndex === -1) {
                changeMinutes = 0;
            }
            elementObject.duration = changeHours + changeMinutes;
        }
    });


    return newArray;
}

// BONUS Iteration: Best yearly rate average - Best yearly rate average