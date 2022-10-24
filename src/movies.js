// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?


function getAllDirectors(moviesArray) {

    const allDirectors = moviesArray.map(elem => {
        // console.log(elem.director)
        return elem.director
    })
    
    // console.log(allDirectors)

    return allDirectors
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {

    const spielbergDramas = moviesArray.filter(elem => {
        
        if (elem.director === 'Steven Spielberg'  && elem.genre.includes('Drama')) {
            // console.log(elem)
            return elem
        }
    })

    // console.log(spielbergDramas)
    // console.log(spielbergDramas.length)
    return spielbergDramas.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {

    const scoreSumatory = moviesArray.reduce((acc, elem) => {

        if (!elem.score) {
            return acc
        } else {
            return acc + elem.score
        } 
    }, 0)

    // console.log(scoreSumatory)
    const avgScore = scoreSumatory / moviesArray.length
    const total = +avgScore.toFixed(2)

    // console.log(typeof(total))
    if (moviesArray.length === 0) {

        return 0
    }
        // console.log(total)
    return total
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {

    const dramas = moviesArray.filter(elem => {
        
        if (elem.genre.includes('Drama')) {
            // console.log(elem)
            return elem
        }
    })

    return scoresAverage(dramas)
    
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {

    const arrayCopy = JSON.parse(JSON.stringify(moviesArray))

    arrayCopy.sort((a, b) => {
        
        if (a.year < b.year) {
            return -1
        }
        if (a.year > b.year) {
            return 1
        }
        if (a.title.toLowerCase() < b.title.toLowerCase()) {
            return -1
        }
        if (a.title.toLowerCase() > b.title.toLowerCase()) {
            return 1
        }
        return 0
    })

    return arrayCopy
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    
    const arrayCopy = JSON.parse(JSON.stringify(moviesArray))
   
    arrayCopy.sort((a, b) => {
        
        if (a.title.toLowerCase() < b.title.toLowerCase()) {
            return -1
        }
        if (a.title.toLowerCase() > b.title.toLowerCase()) {
            return 1
        }
        return 0
    })

    const titles = arrayCopy.map(elem => {
        return elem.title
    })
    
    // console.log(titles)
    const twentyTitles = titles.splice(0, 20)
    return twentyTitles
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
