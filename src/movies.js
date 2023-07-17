// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const directorsOnly = moviesArray.map(function (eachDirector) {
        return eachDirector.director;
    })
    return directorsOnly
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {


    const howManyDramaMovies = moviesArray.filter(function (eachMovie) {
        return eachMovie.director.includes('Steven Spielberg') && eachMovie.genre.includes('Drama')
    })
    return howManyDramaMovies.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {

    if (moviesArray.length === 0) return 0;

    const sumScore = moviesArray.reduce(function (acc, eachScore) {

        if (!eachScore.score) {
            eachScore.score = 0
        }
        return acc + eachScore.score
    }, 0)

    const average = sumScore / moviesArray.length
    const roundedAverage = average.toFixed(2)
    return parseFloat(roundedAverage)

}


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {

    const eachDramaMovie = moviesArray.filter(function (eachMovie) {
        return eachMovie.genre.includes('Drama')
    })

    if (eachDramaMovie.length === 0) return 0;

    const sumDramaScore = eachDramaMovie.reduce(function (acc, eachScoreDrama) {
        return acc + eachScoreDrama.score
    }, 0)

    const averageDrama = sumDramaScore / eachDramaMovie.length
    const roundedDramaAverage = averageDrama.toFixed(2);
    return parseFloat(roundedDramaAverage)

}
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {

    const moviesArrayCopy = JSON.parse(JSON.stringify(moviesArray))
    moviesArrayCopy.sort(function (a, b) {
        if (a.year < b.year) {
            return -1;
        } else if (a.year > b.year) {
            return 1;
        } else {
            return a.title.localeCompare(b.title)
        }
    })


    return moviesArrayCopy

}


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {

    const orderAlphabeticallyCopy = JSON.parse(JSON.stringify(moviesArray))

    orderAlphabeticallyCopy.sort(function (a, b) {

        return a.title.localeCompare(b.title);

    });

    const titlesArray = orderAlphabeticallyCopy.map(function (movie) {

        return movie.title

    })

    if (titlesArray.length >= 20) {
        const lastArray = titlesArray.slice(0, 20)
        return lastArray
    }

    console.log(titlesArray)
    return titlesArray
}


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) { }

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) { }
