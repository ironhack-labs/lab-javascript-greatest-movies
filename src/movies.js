// Iteration 1: All directors? - Get the array of all directors.

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
console.log('Iteration 1')

function getAllDirectors(moviesArray) {
    const allDirectors = moviesArray.map((element) => {
        return element.director
    })
    return allDirectors
}

function getSingleDirectors(moviesArray) {
    return [...new Set(getAllDirectors(moviesArray))]
}

console.log(getAllDirectors(movies))
console.log(getSingleDirectors(movies))



// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
console.log('Iteration 2')

function howManyMovies(moviesArray) {
    let filteredDrama = []
    moviesArray.filter((eachMovie) => {
        if (eachMovie.genre.includes('Drama') && eachMovie.director.includes('Steven Spielberg')) {
            filteredDrama.push(eachMovie)
        }
    })
    return filteredDrama.length
}

function howManyDramaMovies(moviesArray) {
    let filteredDrama = []
    moviesArray.filter((eachMovie) => {
        if (eachMovie.genre.includes('Drama')) {
            filteredDrama.push(eachMovie)
        }
    })
    return filteredDrama
}

// genres:
// crime, drama, action, thriller, biography, history, adventure, horror, music
// fantasy, western, comedy, romance, sci-fi, mystery, family, war, animation, film-noir
console.log(howManyMovies(movies))



// Iteration 3: All scores average - Get the average of all scores with 2 decimals
console.log('Iteration 3')

function scoresAverage(moviesArray) {
    if (!moviesArray.length) {
        return 0
    }
    let subScoresAvg = moviesArray.reduce((acc, eachMovie) => {
        if (!eachMovie.score) {
            eachMovie.score = 0
        }
        return acc + eachMovie.score
    }, 0)
    let scoresAvg = subScoresAvg / moviesArray.length
    return Number(parseFloat(scoresAvg).toFixed(2))
}

console.log(scoresAverage(movies))



// Iteration 4: Drama movies - Get the average of Drama Movies
console.log('Iteration 4')

function dramaMoviesScore(moviesArray) {
    const dramaMovies = moviesArray.filter((eachMovie) => {
        return eachMovie.genre.includes('Drama')
    })
    if (!dramaMovies.length) {
        return 0
    }
    let subScoresAvg = dramaMovies.reduce((acc, eachMovie) => {
        return acc + eachMovie.score
    }, 0)

    let scoresAvg = subScoresAvg / dramaMovies.length
    return Number(parseFloat(scoresAvg).toFixed(2))
}

console.log(dramaMoviesScore(movies))



// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
console.log('Iteration 5')

function orderByYear(moviesArray) {
    const newArray = [...moviesArray]
    let orderedArray = newArray.sort((a, b) => {
        let currentOrder = a.year - b.year;
        if (currentOrder === 0) {
            currentOrder = a.title.localeCompare(b.title)
        }
        return currentOrder
    });
    return orderedArray
}

console.log(orderByYear(movies))



// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
console.log('Iteration 6')

function orderAlphabetically(moviesArray) {
    const newArray = [...moviesArray]

    let orderedArray = newArray.map((eachMovie) => {
        return eachMovie.title
    })

    let finalArray = orderedArray.sort();

    if (finalArray.length > 20) {
        finalArray = finalArray.splice(0, 20)
    }
    return finalArray
}
console.log(orderAlphabetically(movies))




// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) { }






// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) { }
