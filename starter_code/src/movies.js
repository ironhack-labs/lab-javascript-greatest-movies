/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

const orderByyear = movies.sort(function(a, b) {
if (a.year < b.year) {
    return -1
}
else if (a.year > b.year) {
    return 1
} else {
    return 0
};
});
console.log(orderByyear);

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

function howManyMovies(movies) {
    const stevenDrama = movies.filter(function (e, i) {
        return (e.director === 'Steven Spielberg' && e.genre.includes('Drama'));
    });
    return stevenDrama.length;
}
console.log(howManyMovies(movies));

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movies) {
    const ordered = movies.sort(function (a, b) {
        if (a.title < b.title) {
            return -1
        } else if (a.title > b.title) {
            return 1
        } else {
            return 0
        };
    });
    return ordered.slice(1, 20);

};
console.log(orderAlphabetically(movies));
// Iteration 4: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movies) {

    const arrOfrates = movies.map(function (e) {
        return e.rate
    });
    const allRate = arrOfrates.reduce(function (accumulator, currentValue) {
        return accumulator + currentValue;
    }, 0);
    var avgRate = allRate / arrOfrates.length;
    return avgRate.toFixed(2)
};
ratesAverage(movies);

// Iteration 5: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movies) {
    const dramaMovies = movies.filter(function (e, i) {
        if (e.genre.includes('Drama')) {
            return e;
        }
    });
    const arrOfrates = dramaMovies.map(function (e) {
        return e.rate
    });
    const allRate = arrOfrates.reduce(function (accumulator, currentValue) {
        return accumulator + currentValue;
    }, 0);
    var avgRate = allRate / arrOfrates.length;
    return avgRate.toFixed(2)
}


// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(movies) {


    if (movies.duration.includes("h")) {
        let hours = movies.duration.slice(0, movies.duration.indexOf("h"))
    } else {
        let hours = 0;
    }
    console.log(hours)
}

// BONUS Iteration: Best yearly rate average - Best yearly rate average
