// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const allDirectors = moviesArray.map(function (movie) {
        return movie.director
    })
    return allDirectors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const SpielbergDrama = moviesArray.filter(movie => movie.director === 'Steven Spielberg' && movie.genre.includes('Drama'))
    console.log(SpielbergDrama)
    return SpielbergDrama.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {

    if (moviesArray.length === 0 || moviesArray.score === '') {
        return 0
    }

    const totalScore = moviesArray.reduce((total, current) => {
        return total += current.score;
    }, 0);
    const averageScore = totalScore / moviesArray.length

    return Math.round(averageScore * 100) / 100
}


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {

    const dramaMovies = moviesArray.filter(dramaMovie => {
        return dramaMovie.genre.includes('Drama')
    })

    if (dramaMovies.length === 0) {
        return 0
    }

    const dramaScore = dramaMovies.reduce((total, current) => {
        return total += current.score;
    }, 0);

    console.log(dramaMovies)
    console.log(dramaScore)

    result = dramaScore / dramaMovies.length

    console.log(result)

    return Math.round(dramaScore / dramaMovies.length * 100) / 100
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {

    const year = moviesArray.sort((a, b) => {

        if (a.year > b.year) {
            return 1;
        } if (a.year < b.year) {
            return -1;
        }
        if (a.year === b.year) {
            if (a.title > b.title) {
                return 1;
            } if (a.title < b.title) {
                return -1;
            }
        }
    });
    const movieYear = [...year]
    return movieYear
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const title = moviesArray.sort((a, b) => {
        if (a.title < b.title)
            return -1;
        if (a.title > b.title)
            return 1;
    });
    const movieTitle = [...title]
    return movieTitle

}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) { }

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) { }
