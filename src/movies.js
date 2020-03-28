// const movies = require("./data");

/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(array) {

    let newSortedArray = [...array];
    newSortedArray.sort(function (a, b) {
        let year = a.year - b.year;
        if (year === 0) {
            return a.title.localeCompare(b.title);
        }
        return year;
    });
    return newSortedArray;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

function howManyMovies(array) {

    let spielbergMovies = array.filter(function (e) {
        if (e.director == "Steven Spielberg" && e.genre.includes("Drama"))
            return true;
        else
            return false;
    });
    return spielbergMovies.length;

}

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(array) {
    let newList = [...array];

    newList.sort(function (a, b) {
        return a.title.localeCompare(b.title);
    });

    if (newList.length > 20) {
        newList.splice(20);
    }
    newList = newList.map(function (x) {
        return x.title;
    });

    return newList;
}

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(array) {
    if (!array.length) {
        return 0;
    }
    let avg = array.reduce(function (acc, movie) {
        if ("rate" in movie) {
            return acc + movie.rate;
        } else {
            return acc;
        }
    }, 0);
    avg /= array.length;
    return Number(avg.toFixed(2));
}

// Iteration 5: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(array) {

    let dramaMovies = array.filter(function (e) {
        if (e.genre.includes("Drama"))
            return true;
        else
            return false;
    });
    return ratesAverage(dramaMovies);
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(array) {

    let newList = JSON.stringify(array);
    newList = JSON.parse(newList);

    newList = newList.map(function (e) {

        let time = e.duration.split(" ");
        let movieTime = 0;
        if (time.length === 2) {
            let nbHour = time[0].split("h");
            let nbMin = time[1].split("min");
            movieTime += (nbHour[0] * 60) + parseInt(nbMin[0]);
        } else {
            if (time[0].includes("h")) {
                let nbHours = time[0].split("h");
                movieTime += nbHours[0] * 60;
            } else {
                let nbMin = time[0].split("min");
                movieTime += parseInt(nbMin);
            }
        }
        e.duration = movieTime;
        return e;
    });
    return newList;
}

// BONUS Iteration: Best yearly rate average - Best yearly rate average

function bestYearAvg(array) {
    if (!array.length)
        return null;

    let recap = [];

    // Pour m'aider à réfléchir, d'avoir des consoles plus courtes...
    array.forEach(function (movie) {
        recap.push({
            year: movie.year,
            rate: movie.rate
        });
    });

    // *réfléchis au problème quand soudain...*
    // Oh dear... we are in trouble...

    let cleanRecap = [];
    recap.forEach(function (datas) {
        let exist = cleanRecap.filter((e) => e.year === datas.year ? true : false)
        if (exist.length === 0) {
            let sortByYear = recap.filter((data) => data.year === datas.year ? true : false);
            let onlyRate = [];
            sortByYear.forEach(function (e) {
                onlyRate.push(e.rate);
            });

            cleanRecap.push({
                year: datas.year,
                rates: onlyRate
            });
        }
    });

    cleanRecap.forEach(function (e) {
        let n = e.rates.length;
        e.rates = e.rates.reduce(function (acc, el) {
            return acc + el;
        }, 0);
        e.rates /= n;
    });

    cleanRecap.sort(function (a, b) {
        let r = b.rates - a.rates;
        if (r === 0) {
            if (a.year < b.year)
                return -1;
            else
                return 1;
        }
        return r;
    });
    let bestYear = cleanRecap[0].year;
    let bestRate = cleanRecap[0].rates;
    let result = `The best year was ${bestYear} with an average rate of ${bestRate}`;

    // Alors oui c'est moche, c'est pas du tout opti avec tous les foreach et tout... mais j'avoue que je sèche là
    return result;
}