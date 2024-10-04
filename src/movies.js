// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    return moviesArray.map(movie => movie.director);
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    return moviesArray.filter(function(movie) {
        return movie.director === "Steven Spielberg" && movie.genre.includes("Drama");
    }).length;
}


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    const sum = moviesArray.reduce(function(acc, movie){
        if (!movie.score) {
            movie.score = 0
        }
        return acc + movie.score;
    }, 0);
    if(sum === 0){
        return 0;
    }
    return Math.round((sum/moviesArray.length) * 100) / 100;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMovie = moviesArray.filter(function(movie){
        return movie.genre.includes("Drama")

    })
    // console.log(dramaMovie)
    const sumDramaScores = dramaMovie.reduce(function(acc, movie){
        return acc + movie.score;
    }, 0)
    // console.log(sumDramaScores)
    if(dramaMovie.length === 0){
        return 0;
    }
    averageDramaScore = sumDramaScores / dramaMovie.length;
    return Number(averageDramaScore.toFixed(2));

}

console.log(dramaMoviesScore(movies))

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    return [...moviesArray].sort((a, b) => {
       if(a.year === b.year){
        return a.title.localeCompare(b.title)
       }
        return a.year - b.year
    })
}


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    return moviesArray.map((movie) => {
        return movie.title
    }).sort((a,b) => {
        return a.localeCompare(b);
    }).slice(0,20)
}

console.log(orderAlphabetically(movies))
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    const timeToMinutes = moviesArray.map((movie) => {
        const duration = movie.duration;
        let hours = 0;
        let mins = 0;
        if(duration.includes("h")){
            // hours = 
        }
        if (duration.includes("min")){
            // mins = 
        }
        let totalMins = hours *60 + mins;
    })
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
