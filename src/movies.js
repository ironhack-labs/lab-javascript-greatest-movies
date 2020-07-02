// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(movie) {
    const moviesDirectors = movie.map(function (movieobj) {
        return movieobj.director
    })
    return moviesDirectors
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(movies) {
    let spilberMovies = movies.filter(function (movie) {
        return movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
    })
    return spilberMovies.length
}


// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movieArr) {
    if (movieArr.length === 0) {
        return 0
    }
    let rateAverage = movieArr.reduce((accumul, current) => {
        if (current.rate) {
            return accumul + current.rate
        }
        return accumul
    }, 0);

    return Number((rateAverage / movieArr.length).toFixed(2))
}


// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(array) {
    let ratesDrama = array.filter(function (movie) {
        return movie.genre.includes("Drama");
    })
    return ratesAverage(ratesDrama)
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(movieArr) {
    let orderYear = movieArr.sort(function (movie1, movie2) {
        if (movie1.year === movie2.year) {
            if (movie1.title > movie2.title) {
                return -1;
            }
            if (movie1.title < movie2.title) {
                return 1;
            }
            return 0
        }
        return movie1.year - movie2.year
    })

    return [...orderYear]
}



// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movieArr) {
    let twentyFirst = movieArr.filter((element, index) => index < 21);
    let orderTitle = twentyFirst.sort(function (movie1, movie2) {
        return movie1.title - movie2.title
    })
    return [...orderTitle]
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average