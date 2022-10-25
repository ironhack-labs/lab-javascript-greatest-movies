// const  movies = require("./data");

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    let el = moviesArray.map((movie) => movie.director)
    return el
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    let moviesSpielberg = [];

    if (moviesArray.length === 0) {
        return 0;
    }



    let GenereMovie = moviesArray.filter(function (movie) {
        if (movie.genre.includes("Drama") && movie.director === "Steven Spielberg") {
            return true;
        };
    })
    return GenereMovie.length


}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) {
        return 0;
    }
    const bestScore = moviesArray.reduce(function (acc, val) {
        if (val.score === undefined || val.score === "") {
            return acc;
        }
        return (acc + val.score);
    }, 0)
    return Number((bestScore / moviesArray.length).toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {

    const dramaFilms = moviesArray.filter(function (movie) {
        if (movie.genre.includes("Drama")) {
            return movie
        }
    })
    const averageDrama = scoresAverage(dramaFilms)
    return averageDrama



}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const newOrder = moviesArray.splice(0, moviesArray.length)
    return newOrder.sort(function (a, b) {
        if (a.year === b.year) {
            if (a.title < b.title) {
                return -1
            } else if (a.title > b.title) {
                return 1
            } else {
                return 0;
            }

        } return a.year - b.year
    })
    return newOrder
}
// const yearOrderArray = moviesArray.map(movie => movie).sort((a, b) => a.year !== b.year ? a.year - b.year : a.title.localeCompare(b.title))
// return yearOrderArray


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles


function orderAlphabetically(moviesArray) {

    const movieTitles = moviesArray.map(function (movie) {
        return movie.title;
    })
    const alphabeticalArr = movieTitles.sort().slice(0, 20);
    return alphabeticalArr


    // const titles = moviesArray.map(function (movie) {
    //     return movie.title;
    // })
    // const new2 = titles.sort().slice(0, 20);
    // return new2;
}



// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    const hoursTime = moviesArray.filter(function (time) {
        if (movie.duration.includes(0)) {
            return Math.floor(timeInHour * 60);
        }
    })
}



// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) { }
