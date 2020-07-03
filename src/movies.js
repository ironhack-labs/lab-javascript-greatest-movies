// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(movies) {

    let arrDirectors = [];

    for (var i = 0; i < movies.length; i++) {
        arrDirectors.push(movies[i].director);
    }
    return arrDirectors;

}


// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
    let spielbergMovies = movies.filter(function (movie) {
        return movie.director == 'Steven Spielberg' && movie.genre.includes('Drama');
    });
    return spielbergMovies.length;
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(movies) {
    if (movies.length === 0) {
        return 0;
    }
    let totalRates = movies.filter(function (movie) {
        return movie.rate;
    }).reduce(function (accumulator, currentValue) {
        return accumulator + currentValue.rate;
    }, 0);

    let averageRate = totalRates / movies.length;
    return Number(averageRate.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(movies) {
    let dramaMovies = movies.filter(function (movie) {
        return movie.genre.includes('Drama');
    });

    if (dramaMovies.length === 0) {
        return 0;
    }

    let totalRatesDramaMovies = dramaMovies.filter(function (drama) {
        return drama.rate;
    }).reduce(function (accumulator, currentValue) {
        return accumulator + currentValue.rate;
    }, 0);

    let averageRate = totalRatesDramaMovies / dramaMovies.length;
    return Number(averageRate.toFixed(2));
}

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
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
    const array = [...movies].map(function (movie) {
        return movie.title;
    })
    var arraySortedOut = array.sort();
    var topTwenty = arraySortedOut.slice(0, 20);

    return topTwenty;
}
console.log(orderAlphabetically(movies));




// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
function bestYearAvg() {}