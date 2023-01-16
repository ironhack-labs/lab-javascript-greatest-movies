// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    let directorsArray = moviesArray.map((movie) => movie.director)
    return directorsArray
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    let dramaMoviesBySpielberg = moviesArray.filter((movie) => (movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')))
    return dramaMoviesBySpielberg.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) return 0
    let allScores = moviesArray.filter((movie) => movie.score)
    let sumOfScores = allScores.reduce((acc, movie) => {
        return acc + movie.score
    }, 0)

    return +(sumOfScores / moviesArray.length).toFixed(2)
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    let dramaMovies = moviesArray.filter((movie) => movie.genre.includes('Drama'))
    return scoresAverage(dramaMovies)
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    let _moviesArray = [...moviesArray]
    let moviesYear = _moviesArray.sort((a, b) => {
        if (a.year > b.year) return 1
        if (a.year < b.year) return -1
        if (a.year === b.year) {
            if (a.title > b.title) return 1
            if (a.title < b.title) return -1
        }
    })
    return moviesYear
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    let _moviesArray = [...moviesArray]
    let stringTitle = _moviesArray.map(movie => movie.title).sort()

    return stringTitle.slice(0, 20)
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    let newMovies = moviesArray.map((movie) => {
        let hours;
        let minutes;
        let durationInMinutes;
        let formatDuration = movie.duration.split(' ')

        if (formatDuration.length > 1) {
            hours = formatDuration[0].slice(0, formatDuration[0].length - 1)
            minutes = formatDuration[1].slice(0, formatDuration[1].length - 3)

        }
        else if (formatDuration[0].split('').includes('h')) {
            hours = formatDuration[0].slice(0, formatDuration[0].length - 1)
            minutes = 0
        }
        else {
            hours = 0
            minutes = formatDuration[0].slice(0, formatDuration[0].length - 3)
        }
        durationInMinutes = +minutes + ((+hours) * 60)

        return {
            title: movie.title,
            year: movie.year,
            director: movie.director,
            duration: durationInMinutes,
            genre: movie.genre,
            score: movie.score
        }
    })
    return newMovies
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {

    if (moviesArray.length === 0) return null

    let firstYear = orderByYear(moviesArray)[0].year
    let lastYear = orderByYear(moviesArray)[orderByYear(moviesArray).length - 1].year
    let highestAvg = 0
    let highestAvgYear;
    let scoreAvgYear;
    console.log('This is the first year: ', firstYear)
    console.log('This is the last year: ', lastYear)

    for (let i = firstYear; i <= lastYear; i++) {
        let moviesEachYear = moviesArray.filter((movie) => movie.year == i)
        if (scoresAverage(moviesEachYear) > highestAvg) {
            highestAvg = scoresAverage(moviesEachYear)
            highestAvgYear = i
            scoreAvgYear = scoresAverage(moviesEachYear)
        }
    }

    return `The best year was ${highestAvgYear} with an average score of ${scoreAvgYear}`

}
