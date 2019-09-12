/* eslint no-restricted-globals: 'off' */

// Iteration 1: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(movies) {
    return Number(
        (
            movies.reduce((acc, movie) => acc + movie.rate, 0) / movies.length
        ).toFixed(2)
    );
}

// Iteration 2: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(movies) {
    let filtered = movies.filter(movie => movie.genre.includes("Drama", "drama"));

    return filtered.length > 0 ?
        Number((filtered.reduce((acc, movie) => acc + movie.rate, 0) / filtered.length).toFixed(2)) :
        0;
}

// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)
function orderByDuration(movies) {
    let arr1 = JSON.parse(JSON.stringify(movies));
    arrAux = arr1.map(movie => {
        movie.duration = stringToMinutes(movie.duration);
        return movie;
    });
    arrAux.sort((movieA, movieB) => {
        let result = 0;

        if (movieA.duration === movieB.duration) {
            result = movieA.title < movieB.title ? -1 : 1;
        } else {
            result = movieA.duration - movieB.duration;
        }

        return result;
    });

    return arrAux;
}

function stringToMinutes(time) {
    let result = 0;

    if (typeof time === "string") {
        if (time.includes("h") && time.includes("min")) {
            const hours = stringToTime(time.slice(0, 3));
            const minutes = stringToTime(time.slice(3));
            result = hours * 60 + minutes;
        } else if (time.includes("h")) {
            result = stringToTime(time) * 60;
        } else {
            result = stringToTime(time);
        }
    } else {
        result = time;
    }

    return result;
}

function stringToTime(strTime) {
    let strAux = "";
    strTime.split("").forEach(char => {
        if (char >= "0" && char <= "9") {
            strAux += char;
        }
    });

    return Number(strAux);
}

// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct
function howManyMovies(movies) {
    let dramas = movies.filter(movie => movie.genre.includes("Drama"));
    let spielbergDramas = dramas.filter(movie => movie.director.includes("Steven Spielberg"));

    return spielbergDramas.length;
}

// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
    let titles = movies.map(movie => movie.title);
    let titlesSorted = titles.sort();

    return titlesSorted.splice(0, 20);
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {
    let newMovies = JSON.parse(JSON.stringify(movies));

    let auxArr = newMovies.map(movie => {
        movie.duration = stringToMinutes(movie.duration);

        return movie;
    });

    return auxArr;
}

// BONUS Iteration: Best yearly rate average - Best yearly rate average
function bestYearAvg(movies) {
    let output = null;

    let years = [...new Set(movies.map(movie => movie.year))];
    let avgRates = years.map(year => {
        let result = 0;
        let counter = 0;

        movies.forEach(movie => {
            if (movie.year === year) {
                result += movie.rate;
                counter++;
            }
        });

        if (counter > 0) {
            result /= counter;
        }

        return result;
    });

    let max = 0;
    for (let i = 0; i < avgRates.length; i++) {
        if (!avgRates[max]) {
            max = i;
        } else if (avgRates[i]) {
            if (avgRates[i] > avgRates[max] ||
                (avgRates[i] === avgRates[max] && years[i] <= years[max])) {
                max = i;
            }
        }
    }

    if (years.length > 0 && ratesAverage.length > 0) {
        output = `The best year was ${years[max]} with an average rate of ${avgRates[max]}`;
    }

    return output;
}