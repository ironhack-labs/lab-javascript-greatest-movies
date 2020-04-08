/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(arrMovies) {
    let newArray = JSON.parse(JSON.stringify(arrMovies));

    function orderYears(a, b) {
        if (a.year > b.year) {
            return 1;
        } else if (a.year === b.year) {
            if (a.title > b.title) {
                return 1;
            } else if (a.title < b.title) {
                return -1
            } else {
                return 0;
            }
        }
        return -1;
    };

    return newArray.sort(orderYears);
};

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct
// filter:
// -- genre: drama
// -- director: Steven Spielberg


function howManyMovies(arrMovies) {
    let moviesSpielberg = arrMovies.filter(function (movie) {
        return movie.director === "Steven Spielberg" && movie.genre.includes("Drama");
    });
    return moviesSpielberg.length;
};

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles
// -- Create a orderAlphabetically() function, that receives an array and returns an array of first 20 titles, alphabetically ordered. 
// -- Return only the title of each movie
// -- If the array has less than 20 movies, return all

function orderAlphabetically(arrMovies) {
    let arrayTitles = [];
    for (let i = 0; i < arrMovies.length; i++) {
        arrayTitles.push(arrMovies[i].title);
    }
    arrayTitles.sort();
    return arrayTitles.slice(0, 20);
}

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(arrMovies) {
    if (arrMovies.length === 0) {
        return 0;
    }
    let sumRating = (acc, item) => acc + item.rate;
    return Math.round((arrMovies.filter(item => "rate" in item).reduce(sumRating, 0) / arrMovies.length) * 100) / 100;
}

// Iteration 5: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(arrMovies) {
    let filterGenre = movie => movie.genre.includes("Drama");
    let dramaMovies = arrMovies.filter(filterGenre);
    return ratesAverage(dramaMovies);
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(arrMovies) {
    let newArray = JSON.parse(JSON.stringify(arrMovies));
    for (let i = 0; i < newArray.length; i++) {
        let splitDuration = newArray[i].duration.split(" ");
        let hoursConversion = parseInt(splitDuration[0]) * 60;
        let minutesConversion = parseInt(splitDuration[1]);
        let minutesCounter = hoursConversion + minutesConversion;
        newArray[i].duration = minutesCounter;

        if (splitDuration[0] === 1) {
            newArray[i].duration = hoursConversion;
        } else if (splitDuration[0] === undefined) {
            newArray[i].duration = minutesConversion;
        }
    }
    return newArray;
};

// BONUS Iteration: Best yearly rate average - Best yearly rate average

function bestYearAvg(arrMovies) {
    if (arrMovies.length === 0) {
        return null;
    }

    return `The best year was ${year} with an average rate of ${avgRate}`;
}