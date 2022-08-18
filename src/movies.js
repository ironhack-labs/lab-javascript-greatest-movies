// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const directors = moviesArray.map((movie)=>{
        return movie.director
    })
    return directors
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    let directorSteven = moviesArray.filter(movie =>
    movie.director === 'Steven Spielberg' && movie.genre.includes('Drama'))
    
    return directorSteven.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    const totalScores = (movies) => {
        if (!movies.score) {
            return 0
        }
        return movies.score
    }
    let ave = moviesArray.reduce((x, y) => {
        x += totalScores(y) / moviesArray.length
        return x
    }, 0)
    return Number(ave.toFixed(2))
}


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {

}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {

}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const titles = moviesArray.map((movies) => movies.title)
    titles.sort()
    if (titles.length <= 20) {
        return titles
    } else {
        titles.splice(20) 
        return titles 
    }   
}


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
