// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const directors = moviesArray.map((element) => element.director)
    return directors
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const spielbergMovies = moviesArray.filter((movie) => {
        if(movie.director === "Steven Spielberg" && movie.genre.includes("Drama")){
            return movie
        }
    } )

    return spielbergMovies.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) { 
    const scores = moviesArray.reduce((acc, currentScore) => {
    if(currentScore.score !== undefined){
        return acc + currentScore.score / moviesArray.length
    } else {
        return acc
    }
}, 0)
    console.log(scores)
    return scores
    
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMovies = moviesArray.filter(movie => movie.genre.includes("Drama"))
    if(dramaMovies.length === 0){
        return 0
    }

    const averageScore = dramaMovies.reduce((acc, movie) => {
        return acc + movie.score / dramaMovies.length
    }, 0)

    return averageScore
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const copyArray = [...moviesArray]
    const sortedArray = copyArray.sort((a, b) => {
        if(a.year === b.year){
            return a.title.localeCompare(b.title) 
        }
        return a.year - b.year
    })
    return sortedArray
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const copyArray2 = [...moviesArray]
    const sortedArray2 = copyArray2.sort((a, b) => {
        return a.title.localeCompare(b.title)
    })
    const firstTitles = sortedArray2.slice(0, 20).map(movie => movie.title)
    return firstTitles
}



// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
