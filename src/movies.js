// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {

    const allDirectors = moviesArray.map(eachMovie => {
        return eachMovie.director
    })

    return allDirectors
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {

    const spielbergMovies = moviesArray.filter(eachMovie => {

        return eachMovie.director === "Steven Spielberg" && eachMovie.genre.includes("Drama");
    })

    return spielbergMovies.length

}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {

    if (moviesArray.length === 0) {
        return 0
    }

    const bestScores = moviesArray.reduce((acc, eachMovie) => {
        return acc + eachMovie.score
    }, 0)

    const total = bestScores / moviesArray.length
    const roundedAverage = total.toFixed(2)

    return parseFloat(roundedAverage)
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {

    const dramaMovies = moviesArray.filter(eachMovie => eachMovie.genre.includes("Drama"));

    if (dramaMovies.length === 0) {
        return 0;
    }

    const totalDramaScores = dramaMovies.reduce((acc, eachMovie) => {
        return acc + eachMovie.score;
    }, 0);

    const averageDramaMovies = totalDramaScores / dramaMovies.length;

    const roundedAverage = averageDramaMovies.toFixed(2);

    return parseFloat(roundedAverage);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {

    const moviesArrayCopy = JSON.parse(JSON.stringify(moviesArray));

    const sortedMovies = moviesArrayCopy.sort((firstMovie, secMovie) => {

        if (firstMovie.year === secMovie.year) {
            return firstMovie.title.localeCompare(secMovie.title);
        }
        return firstMovie.year - secMovie.year
    })


    return sortedMovies
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {

    const moviesArrayCopy = JSON.parse(JSON.stringify(moviesArray));

    const sortedMovies = moviesArrayCopy.sort((firstMovie, secMovie) => {
        return firstMovie.title.localeCompare(secMovie.title)
    })

    const slicedMovies = sortedMovies.slice(0, 20);

    const movieNames = slicedMovies.map(eachMovie => {
        return eachMovie.title
    })

    return movieNames
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) { }

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) { }
