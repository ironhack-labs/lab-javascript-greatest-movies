// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const dirArr = moviesArray.map((movie, index, array)=>{
        return movie.director
    })
    return dirArr
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    if (moviesArray.length === 0){
        return 0
    }
    const stevenDramas= moviesArray.filter((movie, index, array)=>{
        return movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')
    })
    return stevenDramas.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if(moviesArray.length === 0){
        return 0
    }
    const averageOfAll = moviesArray.reduce((acc, cv)=>{
        if(cv.score){
            return acc+cv.score
        }
        return acc
    }, 0)/moviesArray.length
    return Number(averageOfAll.toFixed(2))
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    if(moviesArray.length === 0){
        return 0
    }
    const dramaArray= moviesArray.filter((movie, index, array)=>{
        return  movie.genre.includes('Drama')
    })
    const dramaAverage = scoresAverage(dramaArray)
    return dramaAverage
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const fakeMoviesArr = moviesArray.slice()
    return fakeMoviesArr.sort((a,b)=>{
        return a.year-b.year || a.title.localeCompare(b.title)
    })
} 

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const fakeMoviesArr = moviesArray.slice()
            fakeMoviesArr.filter((movie, index, array)=>{
                return movie.title
            })
    return fakeMoviesArr
    }


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
}
