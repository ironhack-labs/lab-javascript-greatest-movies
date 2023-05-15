// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const directors = moviesArray.map((element) => {
        return element.director
    })
    return directors
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    // where to put this? const genreDrama = element.genre.indexOf('Drama');
    const ssTheBest = moviesArray.filter((element) => {
    if(element.director === 'Steven Spielberg'
    &&
    element.genre.includes('Drama')
    ) 
    return element
})
return ssTheBest.length
}


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (!moviesArray.length) {
        return 0
    }
const allScores = moviesArray.reduce((accumulator, element) => {
    if (!element.score) {
        element.score = 0
    }  
    return accumulator + element.score;
}, 0)
const scoresAverage = allScores / moviesArray.length
return Number(scoresAverage.toFixed(2))
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMovies = moviesArray.filter((element) => {
        if (element.genre.includes('Drama')) {
            return element
        }
    })
    if (dramaMovies.length === 0) {
        return 0
    }
    const dramaMovieScores = dramaMovies.reduce((accumulator, element) => {
        return accumulator + element.score;
    }, 0)
    const result = dramaMovieScores / dramaMovies.length
    return Number(result.toFixed(2))
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const copyMovies = [...moviesArray]
    const byYear = copyMovies.sort((a, b) => {
        if (a.year === b.year){
           return a.title.localeCompare(b.title)
        }
        return a.year - b.year;
    })
return byYear
}
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const copyMovies = [...moviesArray];
    const movieTitles = copyMovies.map((element) => {
        return element.title
    })
    return movieTitles
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
