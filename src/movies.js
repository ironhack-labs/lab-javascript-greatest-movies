// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const directorName = moviesArray.map(films => films.director)
    return directorName
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const dramaMovies = moviesArray.filter(films => films.genre.includes('Drama') && films.director === 'Steven Spielberg')
    return dramaMovies.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if(moviesArray.length === 0){
        return 0
    }

    const total = moviesArray.reduce(function (accumulator, currentValue) {
        if(currentValue.score){
            return accumulator + currentValue.score;
        }else{
            return accumulator
        }
    }, 0)

    let average = total / moviesArray.length

    return Number(average.toFixed(2))
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaFilter = moviesArray.filter(films => films.genre.includes('Drama'))

    const dramaAverage = scoresAverage(dramaFilter)

    return dramaAverage
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const moviesByYear = [...moviesArray].sort((a, b) => a.year - b.year || a.title.localeCompare(b.title))

    return moviesByYear
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const moviesTitles = moviesArray.map(films => films.title)

    moviesAlphabet = moviesTitles.sort((a, b) => a.localeCompare(b))

    return moviesAlphabet.splice(0, 20)
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
