/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(array) {
    let copy = [...array]
    return copy.sort(function (film1, film2) {
        if (film1.year === film2.year) {
            return film1.title.localeCompare(film2.title)
        }
        if (film1.year < film2.year) {
            return -1
        }
        return 1
    })
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct
function howManyMovies(array) {
    return array.filter((e) => e.director === "Steven Spielberg" && e.genre.includes("Drama")).length
}


// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(array) {
    let copy = [...array]
    return copy.sort(function (film1, film2) {
        if (film1.title < film2.title) {
            return -1
        } else {
            return 1
        }
    }).splice(0, 20).map(e => e.title)
}

// Iteration 4: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(array) {
    if (!array.length) {
        return 0
    }
    return +((array.reduce(function (acc, arr) {
        if (!arr.rate) {
            return acc
        } else {
            return acc + arr.rate
        }
    }, 0) / array.length).toFixed(2))
}

// Iteration 5: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(array) {
    if (!array.filter((e) => e.genre.includes("Drama")).length) {
        return 0
    }
    return +((array.reduce(function (acc, arr) {
        if (arr.genre.includes("Drama")) {
            return acc + arr.rate
        } else {
            return acc
        }
    }, 0) / (array.filter((e) => e.genre.includes("Drama"))).length).toFixed(2))
}

//Iteration 6: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(array) {
    copy = [...array]
    return copy.map(function (e) {
        let hours = e.duration.includes("h");
        let hour = e.duration.split("h")[0] * 60;
        let mins = e.duration.includes("min");
        let min = parseInt(e.duration.split("min")[0].slice(3));
        let movieCopy = Object.assign({}, e);
        if (hours && mins) {
            movieCopy.duration = hour + min;
        } else if (!mins) {
            movieCopy.duration = hour;
        } else {
            movieCopy.duration = parseInt(e.duration.split("min")[0]);
        }
        return movieCopy;
    })
}

// BONUS Iteration: Best yearly rate average - Best yearly rate average

function bestYearAvg(array) {
    if (!array.length) {
        return null
    }
    copy = [...array]
    let years = copy.map((e) => e.year).filter((value, index, self) => self.indexOf(value) === index)
    let best = years.map(function (e) {
        thisYearMovies = copy.filter((el) => el.year == e)
        yearAvgRate = thisYearMovies.reduce((acc, arr) => acc + arr.rate, 0) / thisYearMovies.length
        return {
            'year': e,
            'rate': yearAvgRate
        }
    }).sort((a, b) => b.rate - a.rate || a.year - b.year)[0]
    return `The best year was ${best.year} with an average rate of ${best.rate}`
}