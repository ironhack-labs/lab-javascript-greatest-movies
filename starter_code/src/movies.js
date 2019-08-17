/*eslint no-restricted-globals: 'off'*/


// Iteration 1: All rates average - Get the average of all rates with 2 decimals 

function ratesAverage(movies) {
    let arrayOfRates = movies.map(function (movies) {
        let rate = parseFloat(movies.rate);
        if (isNaN(rate)) {
            rate = 0;
        }
        return rate;
    })
    let totalRate = arrayOfRates.reduce(function (accumulator, rate) {
        return accumulator + rate;
    });
    let averageRate = Math.round((totalRate / movies.length) * 100) / 100;
    return averageRate;
}

console.log(ratesAverage(movies));



// Iteration 2: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movies) {
    let dramaArr = movies.filter(movie => movie.genre.indexOf("Drama") > -1 && movie.rate !== undefined);
    if (dramaArr.length === 0) return 0;
    return ratesAverage(dramaArr);
};

console.log(dramaMoviesRate(movies));



// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)

function orderByDuration(movies) {
    let orderedMovies = movies.sort((movieA, movieB) => {
        if (movieA.duration > movieB.duration) return 1;
        if (movieA.duration == movieB.duration) {
            return movieA.title.localeCompare(movieB.title)
        }
        if (movieA.duration < movieB.duration) return -1;
    });
    return orderedMovies;
}

console.log(orderByDuration(movies));



// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct

function howManyMovies(movies) {
    let spielbergMovies = movies.filter(movie => movie.director === "Steven Spielberg");
    let spielbergDrama = spielbergMovies.filter(movie => movie.genre.indexOf("Drama") > -1);
    return spielbergDrama.length;
}

console.log(howManyMovies(movies));



// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movies) {
    let alphaOrderedMovies = movies.sort((movieA, movieB) => movieA.title.localeCompare(movieB.title));
    let orderedTitles = alphaOrderedMovies.map(list => list.title);
    if (orderedTitles.length > 20) return orderedTitles.slice(0, 20);
    return orderedTitles;
}

console.log(orderAlphabetically(movies));



// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(movies) {
    let correctedMovies = Array.from(movies);
    let hoursMovies = correctedMovies.map(item => {
        let inNumbers;
        if (item.duration.indexOf("h") === -1) {
            inNumbers = 0;
        } else {
            inNumbers = (parseFloat(item.duration.slice(0, 1)) * 60);
        }
        if (item.duration.indexOf("m") === -1) {
            inNumbers += 0;
        } else {
            inNumbers += (parseFloat(item.duration.slice((item.duration.indexOf("m") - 2), (item.duration.indexOf("m")))));
        }
        let novoItem = {
            title: item.title,
            year: item.year,
            director: item.director,
            duration: inNumbers,
            genre: item.genre,
            rate: item.rate
        }
        return novoItem;
    });
    return hoursMovies;
};

console.log(turnHoursToMinutes(movies));


// BONUS Iteration: Best yearly rate average - Best yearly rate average
