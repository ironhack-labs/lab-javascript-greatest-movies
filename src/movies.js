// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    return moviesArray.map(ele => ele.director)
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {

    return moviesArray.filter((movie) => {
        return movie.director === `Steven Spielberg` && movie.genre.includes(`Drama`)
    }).length

}


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    let average = 0

    if(!moviesArray.length){
        return 0
    }

    const totalMovieScore = moviesArray.reduce((accumulator, currentValue) => {
        if(!currentValue.score){
             currentValue.score = 0
        }else {
            return accumulator+currentValue.score
        }     
    }, 0)
    const avgMovie = totalMovieScore/moviesArray.length
    
    return average = parseFloat(avgMovie.toFixed(2))

}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    let avgDramaMovie = 0

    let dramaMovie = moviesArray.filter(ele => ele.genre.includes(`Drama`))

    let scoreReduce = dramaMovie.reduce((accumulator, currentValue) => {
        return accumulator+currentValue.score
    }, 0)

    return avgDramaMovie = parseFloat((scoreReduce/moviesArray.length).toFixed(2))
}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    let movieYear = [...moviesArray]

    return movieYear = movieYear.sort((firstMovie, secondMovie) =>  firstMovie.year - secondMovie.year || firstMovie.title.localeCompare(secondMovie.title))


}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    let newMoviesArray = [...moviesArray.map(movie => movie.title)]
    let sortMovie = newMoviesArray.sort()
    return sortMovie.slice(0,20)
    
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
