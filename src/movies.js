// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const newArray= moviesArray.map(function(movies){
        return movies.director
        })
    return newArray
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const spielbergFimls = moviesArray.filter(movies =>{
        return movies.director === 'Steven Spielberg' && movies.genre.includes ('Drama')
    })
    return spielbergFimls
}


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
const result= moviesArray.reduce(function(total,movie){
    if (movie.score){
       return total + movie.score
    }
    else{
        return total
    }
},0)
const averageScore = result / movies.length
return averageScore
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaFilms = moviesArray.filter(movies =>{
        return movies.genre.includes ('Drama')
    },)
    return dramaFilms

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
