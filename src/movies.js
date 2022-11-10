// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    return moviesArray.map ((movie) => movie.director)
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    if (moviesArray.length === 0) {
        return 0
    }

    const spielbergMovies = moviesArray.filter ((movie) => {
        return movie.director.includes("Steven Spielberg") && movie.genre.includes("Drama")
    })

    return spielbergMovies.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) {
        return 0
    }

    const moviesScore = moviesArray.reduce ((acc, movie) => {
        return movie.score ? acc + movie.score : acc;
        }, 0);

    const scoreAverage = moviesScore/moviesArray.length

    return Number(scoreAverage.toFixed(2))
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMovies = moviesArray.filter((movie) => movie.genre.includes("Drama"))

    if (moviesArray.length === 0 || dramaMovies.length === 0) {
        return 0
    }

    const dramaMovsScore = dramaMovies.reduce ((acc, movie) => {
        return acc + movie.score
    }, 0)

    const dramaMovsScoreAvr = dramaMovsScore / dramaMovies.length

    return Number(dramaMovsScoreAvr.toFixed(2))
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    newMoviesArray = moviesArray.splice(0, moviesArray.length)

    const yearAscendingArr = newMoviesArray.sort((movie1, movie2) => {
        const result = movie1.year - movie2.year

        if (result !== 0) return result

        if (movie1.title < movie2.title) {
            return -1
        } else if (movie1.title > movie2.title) {
            return 1
        } else {
            return 0
        }
    })

    return yearAscendingArr
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    newMoviesArray = moviesArray.splice(0, moviesArray.length)

    const titleAlphabeticallyArr = newMoviesArray.sort((movie1, movie2) => {

        if (movie1.title < movie2.title) {
            return -1
        } else if (movie1.title > movie2.title) {
            return 1
        } else {
            return 0
        }
    })

    const onlyTitlesArr = titleAlphabeticallyArr.map((movie) => movie.title)

    const max20MoviesArr = onlyTitlesArr.splice(0, 20)

    return max20MoviesArr 

}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    newMoviesArray = moviesArray.splice(0, moviesArray.length)

    durationInMinutes = newMoviesArray.map((movie) => {
    const hIndex = movie.duration.indexOf('h')
    const mIndex = movie.duration.indexOf('m')

    const hourTominutes = +movie.duration.slice(0, hIndex)*60
    const minutes = +movie.duration.slice(hIndex + 1, mIndex)

    movie.duration = hourTominutes + minutes 

    return movie.duration
    })

    newMoviesArray.forEach((movie, index) => movie.duration = durationInMinutes[index])

    return newMoviesArray

}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {

    if (moviesArray.length === 0) {
        return null
    }


    //return `The best year was ${} with an average score of ${}´
    
}
