// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {

    const allDirectors = moviesArray.map((movie) => {
        return movie.director;
    })
    return allDirectors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const spielbergMovies = moviesArray.filter((movie) => {
        return movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
    }).length

    return spielbergMovies;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray <= 0) {
        return 0
    } else {
        const arrayWithScore = moviesArray.filter((movie) => {
            return movie.score;
        })
        const scoreArr = arrayWithScore.map((movie) => {
            return movie.score
        })
        const totalScore = scoreArr.reduce((acc, elem) => {
            acc += elem
            return acc;
        }, 0)

        return Number((totalScore / moviesArray.length).toFixed(2))
    }
}


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMovies = moviesArray.filter((movie) => {
        return movie.genre.includes("Drama")
    })

    return scoresAverage(dramaMovies)

}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const newMoviesArray = moviesArray.map((movie) => {
        return movie
    });

    const orderdMovies = newMoviesArray.sort((a, b) => {
        return a.year - b.year
    });

    return orderdMovies;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const orderedMovie = moviesArray.map(function (movie) {
        return movie.title;
    })
    const alphabeticOrder = orderedMovie.sort().splice(0, 20);
    return alphabeticOrder;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) { }

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) { }
