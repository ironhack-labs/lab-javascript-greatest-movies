// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(arr) {
    const result = arr.map(function (movie) {
        return movie.director;
    })
    return result;
}
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(arr) {
    let counter = 0;
    const result = arr.filter(function (movie) {
        if (movie.genre.includes('Drama') && movie.director.includes('Steven Spielberg')) {
            counter++;
        }
    })
    return counter;
}
// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(arr) {
    const average = arr.reduce(function (acc, val) {
        return acc + val.rate / arr.length
    }, 0)
    return Number(average.toFixed(2));
}
// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(arr) {
    const avgDramaRate = arr.map(function (movie) {
        for (let i = 0; i < movie.genre.length; i++) {
            if (movie.genre[i] === 'Drama') {
                return movie.rate;
            }
        }
    }).reduce(function (acc, val) {
        return (acc + val / arr.length);
    })
    return avgDramaRate;
}
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arr) {
    const years = arr.map(function (movie) {
        return `${movie.title} : ${movie.year}`;
    }).sort(function (a, b) {
        if (a.year === b.year) {
            return a.title.length - b.title.length;
        } else {
            return a.year - b.year;
        }
    })
    return years;
}
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arr) {
    result = arr.map(function (movie) {
        return movie.title;
    }).slice(0, 20).sort(function (a, b) {
        return a.length - b.length;
    })
    return result;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
