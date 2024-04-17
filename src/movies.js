// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(moviesArray) {
    let nameDirectors = moviesArray.map( (eachMovie) => {
        return eachMovie.director
    } )
    return nameDirectors
}
// console.log(getAllDirectors(movies))

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    let dramaSpielberg = moviesArray.filter( (eachMovie) => {
        if(eachMovie.director === "Steven Spielberg" && eachMovie.genre.includes("Drama")) {
            return true
        }else{
            return false
        }
    } )
    return  dramaSpielberg.length
}
// console.log(howManyMovies(movies))

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    //clausula de guardia
    if(moviesArray.length === 0){
        return 0
    }
    let scores = moviesArray.reduce( (acc, eachMovie) => {
        if (eachMovie.score === undefined){
            return acc
        }else{
        return acc + eachMovie.score
        }
    },0 )
    let average = scores / moviesArray.length
    return Number(average.toFixed(2))
}
console.log(scoresAverage(movies))

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    let scoreDrama = moviesArray.reduce( (acc, eachMovie) => {
        if (eachMovie.genre.includes("Drama")) {
            return acc + eachMovie.score
        }else{
            return 0
        }
    }, 0 )
    let averageDrama = scoreDrama / moviesArray.length
    return averageDrama
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
