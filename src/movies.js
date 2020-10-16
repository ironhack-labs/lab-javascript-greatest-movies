// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(array) {
    return array.map((movie) => movie.director);
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

function noDoubleDirectors(array) {
    return Array.from(new Set(getAllDirectors(array)))
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(array) {

    return (array.filter(item =>
        item.director === "Steven Spielberg" &&
        item.genre.includes('Drama')
    )).length
}


// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(array) {
    if (!array.length) {
        return 0
    }

    const allRatings = array.map((movie) => movie.rate);

    let total = allRatings.reduce(function (sum, item) {
        if (typeof item !== 'number') {
            return sum
        } else {
            return sum + item
        }
    })

    return Math.round((total / array.length) * 100) / 100
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(array) {
    const drama = array.filter(item =>
        item.genre.includes('Drama')
    )
    return ratesAverage(drama)
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function compare(a, b) {
    if (a.year < b.year) return -1;
    if (a.year > b.year) return 1;
    if (a.year === b.year) {
        if (a.title.toLowerCase() > b.title.toLowerCase()) return 1;
        if (a.title.toLowerCase() < b.title.toLowerCase()) return -1;
    }
}

function orderByYear(array) {

    return Array.from(array.sort((a, b) => {
        return compare(a, b);
    }))

}

console.log(orderByYear(movies))

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(array) {
    const allTitles = array.map((movie) => movie.title);
    let top20 = allTitles.sort().slice(0, 20)
    return top20
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(array) {
    return

}


// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
function bestYearAvg(array) {
    return

}