// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(movies) {
    const moviesDirectors = movies.map(elm => elm['director'])
    return moviesDirectors
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

function getDirectorsClear(movies) {
    const moviesDirectors = movies.map(elm => elm['director'])
    const clearDirectors = [...new Set(moviesDirectors)]
    return clearDirectors
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(movies) {
    const dramaMovies = movies.filter(elm => elm['genre'].includes('Drama') && elm['director'] === 'Steven Spielberg')
    return dramaMovies.length
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movies) {
    const rateAvg = movies.filter(elm => elm['rate']).reduce((acc, elm) => acc + elm['rate'], 0)
    if (rateAvg === 0) {
        return 0
    } else {
        const rateAverage = rateAvg / movies.length
        const twoDecimals = Math.round(rateAverage * 100) / 100
        return twoDecimals
    }
}

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movies) {

    const dramaMovies = movies.filter(elm => elm['genre'].includes('Drama'))
    const rateAvg = dramaMovies.reduce((acc, elm) => acc + elm['rate'], 0)
    if (rateAvg === 0) {
        return 0
    } else {
        const rateAverage = rateAvg / dramaMovies.length
        const twoDecimals = Math.round(rateAverage * 100) / 100
        return twoDecimals
    }
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(movies) {
    const moviesCopy = [...movies]
    const sorted = moviesCopy.sort((a, b) => a.year - b.year || a.title.localeCompare(b.title))
    return sorted
    
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movies) {
    const moviesCopy = [...movies]
    const titles = moviesCopy.map(elm => elm['title']).sort((a, b) => a.localeCompare(b))
    if(titles.length <= 20) {
        return titles
    } else {
        return titles.slice(0, 20)
    }
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average

function bestYearAvg(movies) {
    const moviesCopy = movies.map(elm => elm['year'])

    const year = moviesCopy.sort((a, b) =>
        moviesCopy.filter(v => v === a).length -
        moviesCopy.filter(v => v === b).length
    ).pop();

    const yearMode = movies.filter(elm => elm['year'] === year)

    const yearAvg = yearMode.reduce((acc, elm) => acc + elm['rate'], 0)

    const bestYearAvg = yearAvg / yearMode.length

    return console.log(`The best year was ${year} with a rate of: ${bestYearAvg}`)
}

