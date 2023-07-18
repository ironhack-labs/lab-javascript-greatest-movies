// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {

    const directorsOnly = moviesArray.map(function (eachDirector) {

        return eachDirector.director;
    });

    return directorsOnly
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {

    const dramaMovies = moviesArray.filter(function (eachMovie) {
        return eachMovie.genre.includes('Drama') && eachMovie.director.includes('Steven Spielberg');
    });
    return dramaMovies.length

}



// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {

    if (moviesArray.length === 0) {
        return 0
    }

    const totalScore = moviesArray.reduce(function (acc, eachMovie) {

        if (!eachMovie.score) {
            eachMovie.score = 0
        }

        return acc + eachMovie.score

    }, 0);

    const average = totalScore / moviesArray.length
    const roundbout = average.toFixed(2)
    return parseFloat(roundbout)
}



// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {

    const dramaMovies = moviesArray.filter(function (eachMovie) {
        return eachMovie.genre.includes('Drama')
    });


    const scoreDrama = dramaMovies.reduce(function (acc, eachMovie) {
        return acc + eachMovie.score
    }, 0);

    const average = scoreDrama / dramaMovies.length
    const roundbout = average.toFixed(2)
    return parseFloat(roundbout)

}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {

    const moviesCloned = [...movies];

    const sortedMoviesByYear = moviesCloned.sort(function (first, second) {
        return first.year - second.year
    });

    return sortedMoviesByYear
    //console.log(sortedMovies)
}



// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {

    const moviesCloned = [...movies];

    const sortedAlphabetically = moviesCloned.sort(function (a, b) {
        if (a.title < b.title) {
            return -1;
        }
        if (a.title > b.title) {
            return 1;
        }

    });

    const onlyTitle = sortedAlphabetically.map(function (eachTitle) {
        return eachTitle.title
    });
    //console.log(onlyTitle.slice(0, 20))
    return onlyTitle.slice(0, 20)
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) { }

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) { }
