
// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(array) {

    let sortedArray = Array.from(array);

    function comparador(a, b) {
        if (a.year > b.year) {
            return 1;
        } else if (a.year < b.year) {
            return -1;
        } else {
            if (a.title.toUpperCase() > b.title.toUpperCase()) {
                return 1;
            } else if (a.title.toUpperCase() < b.title.toUpperCase()) {
                return -1;
            }
            return 0;
        }
    }

    sortedArray.sort(comparador);
    return sortedArray;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

function howManyMovies(array) {

    let newArray = Array.from(array);

    function filterArray(film) {
        if (film.director === "Steven Spielberg" && film.genre.indexOf("Drama") >= 0) {
            return true;
        }
        return false;
    }

    let spilberg = newArray.filter(filterArray).length;
    return spilberg
}

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(array) {
    let alpha20Array = Array.from(array);

    function compareAlpha(a, b) {
        if (a.title.toUpperCase() > b.title.toUpperCase()) {
            return 1;
        } else if (a.title.toUpperCase() < b.title.toUpperCase()) {
            return -1;
        }
        return 0;
    }

    let finalArray = alpha20Array.sort(compareAlpha).slice(0, 20);
    finalArray = finalArray.map(value => value.title);
    return finalArray;
};



// Iteration 4: All rates average - Get the average of all rates with 2 decimals


function ratesAverage(array) {
    let average = Array.from(array);

    if (array.length === 0) {
        return 0;
    }

    function reduceRates(acc, film) {
        if (film.rate) {
            return acc + film.rate;
        } else {
            return acc + 0;
        }
    }
    return Math.round(average.reduce(reduceRates, 0) / average.length * 100) / 100;
};


// Iteration 5: Drama movies - Get the average of Drama Movies




function dramaMoviesRate(array) {

    let rateArray = Array.from(array);

    function dramaMovies(rateArray) {
        if (rateArray.genre.indexOf("Drama") >= 0) {
            return true;
        }
    };

    rateArray = rateArray.filter(dramaMovies);
    return ratesAverage(rateArray);
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(array) {


    let newArray = JSON.parse(JSON.stringify(array));

    function transform(value) {
        let hourPosition = value.duration.indexOf("h");
        let hours = value.duration.substring(0, hourPosition);

        let minPosition = value.duration.indexOf("min");
        let minutes = value.duration.substring(hourPosition + 2, minPosition);

        let finalDuration;

        if (hourPosition > -1 && minPosition > -1) {
            finalDuration = parseInt(hours) * 60 + parseInt(minutes);
        } else if (hourPosition > -1 && minPosition < 0) {
            finalDuration = parseInt(hours) * 60;
        } else {
            minutes = value.duration.substring(0, minPosition);
            finalDuration = parseInt(minutes);
        }

        value.duration = finalDuration
        return value;

    }

    newArray.map(transform);
    return newArray;

}

// BONUS Iteration: Best yearly rate average - Best yearly rate average

function bestYearAvg(array) {

    if (array.length === 0) {
        return null;
    }
    let years = orderByYear(array);

    let currentYear = years[0].year;
    let biggestAvg = 0;
    let currentAvg;
    let currentSum = 0;
    let numFilms = 0;
    let theBestYear;

    for (let i = 0; i < years.length; i++) {

        if (years[i].year !== currentYear) {
            if (currentAvg > biggestAvg) {
                theBestYear = currentYear;
                biggestAvg = currentAvg;
            }
            currentSum = 0;
            numFilms = 0;
            currentYear = years[i].year;
        }
        currentSum += years[i].rate;
        numFilms++;
        currentAvg = currentSum / numFilms;
    }

    if (currentAvg > biggestAvg) {
        theBestYear = currentYear;
        biggestAvg = currentAvg;
        return `The best year was ${theBestYear} with an average rate of ${biggestAvg}`;
    } else if (currentAvg = biggestAvg) {
        currentYear = theBestYear;
        currentAvg = biggestAvg;
        return `The best year was ${currentYear} with an average rate of ${currentAvg}`;
    }
}

