// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    let directorMovies = moviesArray.map(directors => directors.director)

    return directorMovies
}





// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const dramaMovie = moviesArray.filter((el) => el.genre.includes('Drama') && el.director === 'Steven Spielberg')


    const numberFilm = dramaMovie.length
    return numberFilm
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    const avgScore = moviesArray.reduce(function (sum, score) {
        return sum + score.score
    }, 0)

    if (avgScore === 0) {
        return 0
    }

    const avgScorefilm = avgScore / moviesArray.length
    return parseFloat(avgScorefilm.toFixed(2))







}


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {



    const dramaMovie = moviesArray.filter((el) => el.genre.includes('Drama'))

    const dramaScore = scoresAverage(dramaMovie)

    if (dramaMovie == 0) {
        return 0
    }

    return parseFloat(dramaScore.toFixed(2))



}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {


    const year = moviesArray.sort(function (a, b) {
        if (a.year > b.year) {
            return 1;
        }
        if (a.year < b.year) {
            return -1;
        }

        if (a.year === b.year) {
            if (a.title > b.title)
                return 1
                    ;
            if (a.title < b.title)
                return -1
        }
    });
    const movieYear = [...year]

    return movieYear


}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles



function orderAlphabetically(moviesArray) {

    const alpFilm = moviesArray.sort(function (a, b) {
        if (a === b) {
            if (a < b) { return -1; }
            if (a > b) { return 1; }
            return 0;
        }
    })
    const alphabetic = alpFilm.filter((el) => el.title)


    return alphabetic
}



// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) { }

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) { }
