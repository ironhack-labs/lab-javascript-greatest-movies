// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(array) {
    let allDirectors = array
        .map(film => film.director)
    return allDirectors;
};
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(array) {
    let counter = 0;
    let howMany = array.filter(item => item.director === "Steven Spielberg" && item.genre.includes("Drama"));
    return howMany.length;
};
// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(array) {
    let result = array.reduce((acc, film) => {
        if (film.rate) {
            return acc + film.rate / array.length
        } else {
            return acc;
        }
    }, 0);
    return Number(result.toFixed(2));
};
// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(array) {
    let result = array.filter(film => film.genre.includes("Drama"));
    return ratesAverage(result);
};
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(array) {
    let result = array
        .map(film => film)
        .sort(function (a, b) {
            if (a.year > b.year) {
                return 1;
            } else if (b.year > a.year) {
                return -1;
            } else {
                if (a.title > b.title) {
                    return 1;
                } else if (b.title > a.title) {
                    return -1;
                }
                return 0;
            }
        });
    return result;
};
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(array) {
    let newArray = JSON.parse(JSON.stringify(array))
    let firstTwenty = newArray
        .sort((a, b) => a.title.localeCompare(b.title))
        .filter((filmTitle, i) => {
            if (i < 20) {
                return filmTitle;
            }
        })
        .map((item) => item.title)
    return firstTwenty;
}
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(array) {
    let newNovies = JSON.parse(JSON.stringify(array));
    newNovies.map((film) => {
        film.duration = stringToMinutes(film.duration);
    });
    return newNovies;
}

function stringToMinutes(timeString) {
    let minutes = 0;
    `${timeString}`.split(" ").forEach((item) => {
        if (item.indexOf("h") != -1) {
            minutes += parseInt(item) * 60;
        } else {
            minutes += parseInt(item);
        }
    });
    return minutes;
}


// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
function bestYearAvg(array) {
    if (array.length === 0) {
        return null;
    }
    let years = array
        .map(film => film.year)
        .sort((a, b) => a - b)
    return years;
};