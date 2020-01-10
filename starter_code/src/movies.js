/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arr) {
    const newOrderByYear = arr;
    if (newOrderByYear.length === 0) return null;
    newOrderByYear.sort(function tata(a, b) {
        if (a.year === b.year) {

            if (a.title.toLowerCase() < b.title.toLowerCase()) return -1;
            if (a.title.toLowerCase() > b.title.toLowerCase()) return 1;
            return 0;

        }
        return a.year - b.year;
    });

    return newOrderByYear;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct
function howManyMovies(arr) {
    if (arr.length === 0) return 0;
    let result = arr.reduce(function toto(counter, currentValue) {
            if (currentValue.director === "Steven Spielberg") {
                const newArray = currentValue.genre.filter(word => word === "Drama")
                if (newArray.length === 1) counter += 1;
            }
            return counter;
        },
        0);

    return result;
}

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arr) {
    const newOrderByTitle = arr.map(function toto(element) {
        return element.title;
    });

    newOrderByTitle.sort(function tata(a, b) {
        if (a.toLowerCase() < b.toLowerCase()) return -1;
        if (a.toLowerCase() > b.toLowerCase()) return 1;
        return 0;
    });
    const printTitle = newOrderByTitle.reduce(function tata(counter, currentValue, i) {
        if (i < 20) {
            counter.push(currentValue);
            return counter;
        }
        return counter;
    }, []);
    return printTitle;
}

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(arr) {
    if (arr.length === 0) return 0;
    const total = arr.reduce(function (counter, currentValue, i) {
        if (typeof (currentValue.rate) === "number") {
            return counter += currentValue.rate;
        }
        return counter;
    }, 0);
    var average = Math.round((total / arr.length) * 100) / 100;
    return average;
}
// Iteration 5: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(arr) {

    let result = arr.reduce(function toto(counter, currentValue) {
        const newArray = currentValue.genre.filter(word => word === "Drama")
        if (newArray.length === 1) counter.push(currentValue);
        return counter;
    }, []);
    return ratesAverage(result);
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
/*var movieTry = [{
    duration: "0h 31min"
}];
*/



function turnHoursToMinutes(arr) {
    const durationOfMovies = arr.map(function tata(time) {
        let movie = {
            ...time
        }
        var totalMinutes = 0;
        for (i = 0; i - 1 < time.duration.length; i++) {
            if (time.duration[i + 1] === "h") {
                totalMinutes = totalMinutes + Number(time.duration[i]) * 60;
            }
            if (time.duration[i + 1] === "m") {
                totalMinutes = totalMinutes + Number(time.duration[i]) + Number(time.duration[i - 1]) * 10;
            }
        }

        movie.duration = totalMinutes;
        return movie;
    });

    return durationOfMovies;
}


//console.log(turnHoursToMinutes(movieTry));

// BONUS Iteration: Best yearly rate average - Best yearly rate average