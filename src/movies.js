// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(moviesArray) {
    return moviesArray.map((films) => films.director)
}
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectorsNoRepeat(moviesArray) {
    let counter = 0
    const directorSteven = moviesArray.filter((item) => { if (item.director === 'Steven Spielberg' && item['genre'].includes('Drama')) { return counter++ } })
    return counter
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    let stevenFilms = moviesArray.filter((films) => films.director === "Steven Spielberg" && films.genre.includes("Drama"))
    return stevenFilms.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) { return 0 }
    let scoredMovies = moviesArray.filter((films) => films.score)
    console.log(scoredMovies)
    let totalScore = scoredMovies.reduce((acc, film) => acc + film.score, 0)
    let avgScore = totalScore / moviesArray.length

    return Number(avgScore.toFixed(2))

}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    let dramaMovies = moviesArray.filter((films) => films.genre.includes("Drama"))
    if (dramaMovies.length === 0) return 0

    let totalScoreDramaMovies = dramaMovies.reduce((acc, films) => acc + films.score, 0)
    let avgScoreDramaMovies = totalScoreDramaMovies / dramaMovies.length
    return +avgScoreDramaMovies.toFixed(2)
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    let orderByYear = moviesArray.slice().sort((a, b) => a.year - b.year).sort(function (a, b) {
        if (a.year === b.year) return a.title.localeCompare(b.title)
    })
    return orderByYear
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const orderByTitle = moviesArray.map((moviesArray) => moviesArray.title).sort((a, b) => a.localeCompare(b))
    return orderByTitle.slice(0, 20)
}



// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    const copy = JSON.parse(JSON.stringify(moviesArray))
    let toMinutes = copy.map((element) => {
        let hours = element.duration.slice(0, 1)
        let minutes = element.duration.slice(3, 5)
        element.duration = Number(hours) * 60 + Number(minutes)
        return element
    })
    return toMinutes
}


// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {

    if (moviesArray.length === 0)
        return null

    let movieYears = {}
    moviesArray.forEach(movie => {
        if (!(movie.year in movieYears)) { movieYears[movie.year] = [] }
        movieYears[movie.year].push(movie)
    })

    let avgs = []
    Object.keys(movieYears).forEach(year => { avgs.push({ year: year, scoreAvg: scoresAverage(movieYears[year]) }) })

    avgs.sort((a, b) => { if (b.scoreAvg !== a.scoreAvg) { return b.scoreAvg - a.scoreAvg } return a.year - b.year })

    return `The best year was ${avgs[0].year} with an average score of ${avgs[0].scoreAvg}`
}



