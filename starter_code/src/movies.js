/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arr) {

    let arrMovie = [...arr]

    //ascending order
    arrMovie.sort(function (a, b) {
        return a.year - b.year;
    })

    //alphabetical order
    arrMovie.sort(function (a, b) {
        if (a.year == b.year) {
            if (a.title > b.title) {
                return 1;
            }
            if (a.title < b.title) {
                return -1;
            }
        }
        return 0;
    });
    return arrMovie;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct
function howManyMovies(matrix) {

    //filter to: Steven Spielberg director and drama movies
    let movieSpielberg = matrix.filter(function (movie) {
        if (movie.director == "Steven Spielberg" && movie.genre.includes("Drama")) {
            return movie;
        }
    })
    return movieSpielberg.length;
}

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(matrix) {

    //first 20 titles, alphabetically ordered
    let arrOrderMovie = matrix.map(function (movie) {
        return movie.title;
    }).sort().filter(function (movie, index) {

        //if the array you receive has less than 20 movies, return all of them
        if (index < 20) return movie;
    })
    return arrOrderMovie;
}

// Iteration 4: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(matrix) {

    if (matrix.length) {

        let resutl = matrix.reduce(function (acc, e) {
            if (!e.rate || e.rate == "") {
                return acc;
            }
            return acc + e.rate;
        }, 0) / matrix.length;

        //rounded to 2 decimals
        resutl = resutl.toFixed(2);
        resutl = parseFloat(resutl);

        return resutl;
    }
    return 0;
}

// Iteration 5: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(matrix) {

    //drama movies
    let matrixDrama = matrix.filter(function (e) {
        return e.genre.includes('Drama')
    })

    //drama average
    if (matrixDrama.length) {

        let resultDrama = matrixDrama.reduce(function (acc, e) {

            if (!e.rate || e.rate == ""){
                return acc;
            }
            return acc + e.rate;
        }, 0) / matrixDrama.length

        //rounded to 2 decimals
        resultDrama = resultDrama.toFixed(2)
        resultDrama = parseFloat(resultDrama)

        return resultDrama;
    }
    return 0;
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average
