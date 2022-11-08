// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
const getAllDirectors = moviesArray => {
    const directors = moviesArray.map(movie => movie.director)
    const directorsObj = {}
    directors.forEach(director => directorsObj[director] = 1)
    return Object.keys(directorsObj)
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
const howManyMovies = moviesArray => moviesArray.filter(movie => movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')).length

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
const scoresAverage = moviesArray => !moviesArray.length ? 0 : +(moviesArray.filter(movie => movie.score).reduce((acc, movie) => movie.score + acc, 0)/moviesArray.length).toFixed(2)

// Iteration 4: Drama movies - Get the average of Drama Movies
const dramaMoviesScore = moviesArray => {
    const filteredArray = moviesArray.filter(movie => movie.genre.includes('Drama'))
    return filteredArray.length ? +(filteredArray.reduce((acc, movie) => movie.score + acc, 0)/(filteredArray.length)).toFixed(2) : 0
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
const orderByYear = moviesArray => {
    const sortedArray = [...moviesArray]
    sortedArray.sort((prev, curr) => prev.year - curr.year ? prev.year - curr.year : prev.title.toLowerCase() >= curr.title.toLowerCase() ? 1 : -1)
    return sortedArray
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
const orderAlphabetically = moviesArray => {
    const sortedArray = [...moviesArray.map(movie => movie.title)];
    sortedArray.sort((prev, curr) => prev >= curr ? 1 : -1)
    return sortedArray.slice(0,20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
const turnHoursToMinutes = moviesArray => moviesArray.map(movie => {
    const timeArray = movie.duration.split('h')
    const duration = timeArray[0]*60 + +timeArray[1].replace('min', '')
    return {...movie, duration: duration}
})

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
const bestYearAvg = moviesArray => {
    if (!moviesArray.length) return null;
    const yearDict = {};
    moviesArray.forEach(movie => yearDict[movie.year] ? yearDict[movie.year].push(movie.score) : yearDict[movie.year] = [movie.score])
    Object.keys(yearDict).forEach(year => yearDict[year] = yearDict[year].reduce((acc, score) => score + acc, 0)/yearDict[year].length)
    let max = [0,0];
    Object.keys(yearDict).forEach(year => {
        if(yearDict[year] > max[1]) max = [year, yearDict[year]]
        else if (yearDict[year] === max[1] && year < max[0]) max = [year, yearDict[year]]
    })
    return `The best year was ${max[0]} with an average score of ${max[1]}`
}
