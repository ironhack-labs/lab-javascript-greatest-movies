// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(moviesArray) {
    const directors = moviesArray.map(function (movie) {
        return movie.director
    })
    return directors
}



// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?



// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(array) {

    /* create new array with drama movie from S.Spielberg */
    const spielbergMovies = array.filter(function (movie) {

        return movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')
    });
    /* get numbers of objects in the array (=numbers of movies) */
    return spielbergMovies.length

}


// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(moviesArray) {
    if (moviesArray.length === 0) {
        return 0
    }
    let total = 0
    const ratings = moviesArray.map(function (movie) {
        if (!movie.rate) {
            return 0;
        } else {
            return movie.rate
        }
    });
    const ratesSum = ratings.reduce(function (sum, val) {
        return sum + val
    }, 0)
    total = (ratesSum / moviesArray.length)
    const stringRoundedTotal = total.toFixed(2)
    const numberRoundedTotal = parseFloat(stringRoundedTotal)
    return numberRoundedTotal;
}


function dramaMoviesRate(moviesArray) {
    const dramaMoviesArray = moviesArray.map(function (movie) {

        if (movie.genre.includes('Drama')) {
            return movie
        }
    })
    if (dramaMoviesArray.length === 0) {
        return 0
    }
    let total = 0
    const ratings = dramaMoviesArray.map(function (movie) {
        if (!movie.rate) {
            return 0;
        } else {
            return movie.rate
        }
    });
    const ratesSum = ratings.reduce(function (sum, val) {
        return sum + val
    }, 0)
    total = (ratesSum / dramaMoviesArray.length)
    const stringRoundedTotal = total.toFixed(2)
    const numberRoundedTotal = parseFloat(stringRoundedTotal)
    return numberRoundedTotal;
}




// const dramaMovies = moviesArray.map(function (movie) {
//     return movie.genre.includes('Drama')
// });
// if (moviesArray.length === 0) {
//     return 0
// };
// let dramaRating = dramaMovies.reduce(function (sum, movie) {
//     return sum + movie.rate;
// }, O)
// return parseFloat((dramaRating / dramaMovies.length).toFixed(2));


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(moviesArray) {
    const sortedArrayByYear = moviesArray.sort(function (previousItem, nextItem) {
        return previousItem.year - nextItem.year;
    })

    return sortedArrayByYear
}

function orderAlphabetically(sortedArrayByYear) {
    const sortedArrayAlphabeticOrder = sortedArrayByYear.sort(function (previousItem, nextItem) {
        if (previousItem.year === nextItem.year) {
            if (previousItem.title < nextItem.title) {
                return -1
            }
            if (previousItem.title > nextItem.title) {
                return 1
            }
        }
    })
    return sortedArrayAlphabeticOrder
}
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average