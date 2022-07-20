// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    let allDirectors = moviesArray.map(movie =>{
    return movie.director;
})
    return allDirectors;
}
let test = getAllDirectors(moviesCopy)
//console.log (test);
 Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
 function howManyMovies(moviesArray) {
    const spielbergDramaMovies = moviesArray.filter(movie => movie.director === 'Steven Spielberg').map(movie.genre).flat()
    return spielbergDramaMovies
 }
// 
    // let howManyMovies = movies.filter (function(obj){
    //    return obj.genre === 'Drama' && obj.director === 'Stephen Spielberg';

    // this seemed like a possible solution but I kept getting an error of undefined

       
    
console.log(howManyMovies)

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    const moviesScoreSum = moviesArray.map(movie => movie.score).reduce(acc,currentVal) => acc + current
    const averageScore = movieScoreSum/moviesArray.length
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMovies = moviesArray.filter(movie => movie.genre.includes ("Drama"));
 console.log (dramaMovies.lenght)

    const moviesScoreSum = dramaMovies.map(movie =>movie.score).reduce(acc,currentVal) => acc + currentVal;
    const averageScore= dramaMovies/dramaMovies.lengthl
    return averageScore.toFixed(2);
}
console.log(dramamMovies)



// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
