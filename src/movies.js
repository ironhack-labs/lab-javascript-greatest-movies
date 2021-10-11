const movies = require('../src/data');

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
    return movies.map(movie => {
        //console.log(directors.director)
        return movie.director
    })
}

//console.log(getAllDirectors(movies));
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
    let many = 0;

    many = movies.filter(movie => {
        //console.log(movie.genre)
        return movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')
    });

    //console.log(many);

    return many.length
}

//console.log(howManyMovies(movies))

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {

    if (!movies.length) {
        return 0
    }
    let sumScore = movies.reduce((acc, cv) => {
        if (!cv.score) {
            return acc += 0
        }
        return acc += cv.score

    }, 0)

    return Number((sumScore / movies.length).toFixed(2))

}

//scoresAverage(movies)
//console.log(scoresAverage(movies))

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
    dramaMovies = movies.filter(movie => {
        //console.log(movie.genre)
        return movie.genre.includes('Drama')
    });
    return scoresAverage(dramaMovies)

}

//console.log(dramaMoviesScore(movies))

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
    let years;
    years = movies.map(movie => {
        return movie
    })

    return years.sort(function(prev, next) {
        if (prev.year > next.year) {
            return 1;
        } else if (prev.year < next.year) {
            return -1;
        } else {
            return (prev.title).localeCompare(next.title)
        }
    })

}

//console.log(orderByYear(movies))

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {

    tittles = movies.map(tittles => {
        return tittles.title
    })

    let movs = tittles.sort(function(a, b) {
        return (a).localeCompare(b)
    })

    movs.splice(20, movs.length - 20)
    return movs
}

// console.log(orderAlphabetically(movies))
//orderAlphabetically(movies)
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}


turnHoursToMinutes(movies)
    // BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
    module.exports = {
        getAllDirectors,
        howManyMovies,
        scoresAverage,
        dramaMoviesScore,
        orderByYear,
        orderAlphabetically,
        turnHoursToMinutes,
        bestYearAvg,
    };
}