// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    return moviesArray.map(movies=>movies.director)
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {    
    let spielbergMovies = moviesArray.filter(function(movie){
        if (movie.director==="Steven Spielberg"){return movie}
    })
    let spielbergDramas = spielbergMovies.filter(function(movie){
        if (movie.genre.includes("Drama")){
            return movie
        }
    })
    return spielbergDramas.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    
    if (moviesArray.length===0){
        return 0
    }   
    
    let sum = moviesArray.reduce(function(accum, movie){
        if (!movie.score){
            return accum
        }else {return accum + movie.score}
    },0)
    
    let avg = sum/moviesArray.length;
    return Math.round(avg*100)/100
}


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    
    let dramaMovies = moviesArray.filter(function(movie){
        if (movie.genre.includes("Drama")){
            return movie
        }
    })
    if (dramaMovies.length===0){
        return 0
    }
    sum = dramaMovies.reduce(function(acc, movie){
        return acc + movie.score
    },0);
    let avg = sum/dramaMovies.length
    return Math.floor(avg*100)/100
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
