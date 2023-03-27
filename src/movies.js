// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(moviesArray) {
    const allDirectors = moviesArray.map(function(movie) {
        return movie.director
    })
    return allDirectors
}

// --------------------------------------------------------------

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?


// --------------------------------------------------------------

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const dramasBySpielberg = moviesArray.filter(function (movie){
        return movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
    })
    return dramasBySpielberg.length
}

// --------------------------------------------------------------

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) {
        return 0
    } 

    const averageScore = moviesArray.reduce(function(acc, val) {
        if (val.score === undefined) {
            return acc
        }
        return (acc + val.score)
    }, 0)

    return Number((averageScore / moviesArray.length).toFixed(2))
}

// --------------------------------------------------------------

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const drama = moviesArray.filter(function (movie){
        return movie.genre.includes("Drama")
    })

    if (drama.length === 0) {
        return 0
    } 

    const averageScore = drama.reduce(function(acc, val) {
        return (acc + val.score)
    }, 0)

    return Number((averageScore / drama.length).toFixed(2))
}

// --------------------------------------------------------------

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const dupMoviesArray = moviesArray.slice();

    dupMoviesArray.sort(function(a, b) {
        if (a.year === b.year) {
            return title - b.title
        } 
        return a.year - b.year
    })
    return dupMoviesArray
}

// --------------------------------------------------------------

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const dupMoviesArray = moviesArray.slice();

    const dupMoviesArrayTitles = dupMoviesArray.map(function(movie) {
        return movie.title
    });

    return dupMoviesArrayTitles.sort().splice(0, 20); 
}

// --------------------------------------------------------------

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {

}


// --------------------------------------------------------------

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
