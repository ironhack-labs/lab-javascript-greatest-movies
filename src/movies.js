// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    let newArr = []
    const mappedArray = moviesArray.map(function(element){
        newArr.push(element.director)
    })
    return newArr
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    let counter = 0
    moviesArray.filter(function(element){
        if(element.director ==="Steven Spielberg"){
            if (element.genre.includes("Drama")) {
                counter++
            }
        }
        
    })
    return counter
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0 ) {
        return moviesArray.length
    }

    const filteredMovies = moviesArray.filter(function(element){
        return typeof element.score === 'number'
    })

    const newScore = filteredMovies.reduce(function(sum, val){
        return sum + val.score
    },0)

    const average = (newScore / moviesArray.length)

    return (Math.round(average * 100 )/100)
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {

    const drama = moviesArray.filter(function(element){
        return element.genre.includes('Drama') && typeof element.score === 'number'
    })

    if(drama.length === 0){
        return drama.length
    }
    const dramaTotal = drama.reduce(function(sum,element){
        return sum + element.score
    },0)

    const averageScore = dramaTotal / Math.max(1, drama.length)
    return Math.round(averageScore * 100) / 100
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
