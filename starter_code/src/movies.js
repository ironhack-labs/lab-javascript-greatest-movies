/* eslint no-restricted-globals: 'off' */


// Iteration 1: All rates average - Get the average of all rates with 2 decimals 

function ratesAverage(array) {
    let sum = array.reduce(function (acc, value) {
        if (value.rate.length !== 0) {
            // tried the following line both with parseFloat and without - why is Jasmine test green also without it? The returned value without it is a string.
            return acc + parseFloat(value.rate)
        }
        return acc;
    }, 0);
    return Math.round((sum / array.length) * 100) / 100;
}

// Iteration 2: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(array) {
    let dramaMovies = array.filter(function (element) {
        return element.genre.includes("Drama");
    });
    if (dramaMovies.length === 0) {
        return 0;
    } else {
        return ratesAverage(dramaMovies);
    }
}

// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)

function orderByYear(array) {
    let sorted = array.sort(function (a, b) {
        if (a.year !== b.year) {
            return a.year - b.year;
        }
        return ((a.title).localeCompare(b.title));
    });
    return sorted;
}

// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct

function howManyMovies(array) {
    let spielbergs = array.filter(function (movie) {
        if (movie.director === "Steven Spielberg" && movie.genre.includes("Drama")) {
            return true;
        }
    });
    return spielbergs.length;
}

// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(array) {
    let ordered = array.sort(function (a, b) {
        if (a.title < b.title) {
            return -1;
        }
        if (a.title > b.title) {
            return 1;
        }
        return 0;
    });
    let titles = ordered.map(function (movie) {
        return movie.title;
    });
    return titles.slice(0, 20);
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(array) {
    let formatted = array.map(function (el) {
        return {
            title: el.title,
            year: el.year,
            director: el.director,
            duration: parseFloat((el.duration.substring(0, el.duration.indexOf("h")) * 60) + parseFloat(el.duration.substring(el.duration.indexOf(" "), el.duration.indexOf("m")))),
            genre: el.genre,
            rate: el.rate
        }
    })
    // why is the Jasmine test for 'only hours' giving an error?
    return formatted;
}
turnHoursToMinutes(movies);


// BONUS Iteration: Best yearly rate average - Best yearly rate average

function bestYearAvg(array) {
    if (array.length == 0) {
        return null;
    }
    let groupedByYear = array.reduce(function (group, element) {
        group[element.year] = [...group[element.year] || [], element];
        return group;
    }, {});
    console.log(groupedByYear)
    let yearKeys = Object.keys(groupedByYear)

    // got stuck here, don't know how to utilize the yearKeys to create a data structure that i could pass to the ratesAverage function from iteration 1
}