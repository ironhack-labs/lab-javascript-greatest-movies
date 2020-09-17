// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(array) {
    let directorsArr = array.map((movie) => {
        return movie.director
    })
    return directorsArr
}
console.log(getAllDirectors(movies));
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(array) {
    let dramaSpielberg = array.filter((movie) => {
        return (movie.director === "Steven Spielberg") && (movie.genre.includes("Drama"))
    })
    return dramaSpielberg.length
}
console.log(howManyMovies(movies));

// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(array) {
    if (!array.length) {
        return 0
    } else {
        let allRates = array.reduce((acc, movie) => {
                if (movie.rate) {
                    return acc + movie.rate;
                } else {
                    return acc + 0
                }
            },
            0);
        let rateAvg = (allRates / array.length).toFixed(2);
        rateAvg = Number(rateAvg);
        return rateAvg
    }
}
console.log(ratesAverage(movies));


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(array) {
    let allDramaRates = array.reduce((acc, movie) => {
        if (movie.genre.includes("Drama")) {
            return acc + movie.rate;
        } else {
            return acc + 0
        }
    }, 0);

    let allDramaMovies = array.reduce((acc, movie) => {
        if (movie.genre.includes("Drama")) {
            return acc + 1;
        } else {
            return acc + 0
        }
    }, 0);

    let dramaAvg = allDramaRates / allDramaMovies
    dramaAvg = dramaAvg.toFixed(2);
    return parseFloat(dramaAvg)
}
console.log(dramaMoviesRate(movies));


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(array) {
    let newMovieArray = JSON.parse(JSON.stringify(array))

    newMovieArray.sort((a, b) => {
        if (a.year > b.year) {
            return 1;
        } else if (a.year < b.year) {
            return -1
        } else {
            if (a.title > b.title) {
                return 1;
            } else if (a.title < b.title) {
                return -1;
            } else {
                return 0;
            }
        }
    })
    return newMovieArray
}
console.log(orderAlphabetically(movies));

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(array) {
    let newArrayForAlphabet = JSON.parse(JSON.stringify(array))

    newArrayForAlphabet.sort((a, b) => {
        if (a.title > b.title) {
            return 1;
        } else if (a.title < b.title) {
            return -1;
        } else {
            return 0
        }
    })

    let titleNames = newArrayForAlphabet.map((movie) => {
        return movie.title
    })

    let firstTwenty = titleNames.filter((movies, index) => {
        return index < 20
    })
    return firstTwenty
}
console.log(orderAlphabetically(movies));


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average