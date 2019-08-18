/* eslint no-restricted-globals: 'off' */

// Iteration 1: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(moviesArr) {
    let avgRate =
        moviesArr.reduce((accumulator, movie) => {
            if (!movie.rate) return accumulator;
            return accumulator + parseFloat(movie.rate);
        }, 0) / moviesArr.length;
    avgRate = parseFloat(avgRate.toFixed(2));
    return avgRate;
}

// Iteration 2: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(moviesArr) {
    const dramaSelection = moviesArr.filter(movie =>
        movie.genre.includes("Drama")
    );
    if (!dramaSelection.length) return 0;
    return ratesAverage(dramaSelection);
}
// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)
function orderByDuration(moviesArr) {
    const moviesCopy = moviesArr.slice();
    if (moviesArr.length === 1) return moviesArr;

    //
    for (movie of moviesCopy) {
        if (typeof movie.duration === "string") {
            const time = movie.duration.split(" ");
            const hours = parseInt(time[0]);
            const minutes = parseInt(time[1]) || 0;
            const duration = hours * 60 + minutes;
            movie.duration = duration;
        }
    }

    const sortedByDuration = moviesCopy.sort((a, b) => {
        if (a.duration === b.duration) {
            return a.title.localeCompare(b.title);
        }
        return a.duration - b.duration;
    });
    return sortedByDuration;
}

// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct
function howManyMovies(moviesArr) {
    const stevensDramas = moviesArr.filter(movie => {
        return (
            movie.genre.includes("Drama") && movie.director === "Steven Spielberg"
        );
    });
    return stevensDramas.length;
}

// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArr) {
    let alphaOrder = moviesArr.sort((a, b) => {
        return a.title.localeCompare(b.title);
    });
    alphaOrder = alphaOrder.map(movie => movie.title).slice(0, 20);
    return alphaOrder;
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArr) {
    let moviesDurationCorrected = moviesArr.map(movie => {
        let time = movie.duration.split(" ");
        let duration = 0;

        if (time.length >= 2) {
            const hours = parseInt(time[0]) || 0;
            const minutes = parseInt(time[1]) || 0;
            duration = hours * 60 + minutes;
        } else if (time[0].indexOf("min") !== -1) {
            duration = parseInt(time[0]) || 0; //duration = minutes
        } else {
            duration = parseInt(time[0]) * 60 || 0; // duration = hours*60
        }
        return {
            ...movie,
            duration
        };
    });

    return moviesDurationCorrected;
}
// BONUS Iteration: Best yearly rate average - Best yearly rate average
function bestYearAvg(moviesArr) {
    let bestYear = 1900,
        bestYearAvg = 0;

    if (!moviesArr.length) return null;
    for (let y = 1900; y <= 2019; y++) {
        const moviesOfYear = moviesArr.filter(function (movie) {
            return parseInt(movie.year) === y;
        });
        const avgOfYear = moviesOfYear.reduce((acc, movie) => {
            return acc + parseFloat(movie.rate);
        }, 0) / moviesOfYear.length;
        if (avgOfYear > bestYearAvg) {
            bestYear = y
            bestYearAvg = avgOfYear;
        }
    };
    return `The best year was ${bestYear} with an average rate of ${bestYearAvg}`;
}