// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const directors = moviesArray.map(movie => movie.director)
return directors
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const spielbergMovies = moviesArray
        .filter(movie => movie.director === 'Steven Spielberg' && movie.genre.includes('Drama'));     
return spielbergMovies.length
}



// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    const scoresTotal = moviesArray.reduce((acc,num) => {
        if (typeof(num.score) === 'number' ){ 
            return acc + num.score 
            }
        else {
            return acc
            }
        },0);
    const scoresAvg = scoresTotal / moviesArray.length ;
    const scoresRounded = Number(scoresAvg.toFixed(2));
    if (moviesArray.length === 0) {
        return 0
    }
    
    return scoresRounded ;
    
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMovies = moviesArray.filter(movie => movie.genre.includes('Drama')).reduce((acc, num) => {
        if (typeof(num.score) === 'number') {
            return acc + num.score
        }
        else {
            return acc
        }
    }, 0);
    const scoresAvg = dramaMovies / moviesArray.length;
    const totalDrama = Number(scoresAvg.toFixed(2));
    if (moviesArray.length === 0) {
        return 0
    }
    
    console.log(totalDrama)
    return totalDrama 
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
const byOrder = '';
function orderByYear(moviesArray) {
    byOrder = moviesArray.slice().sort((a,b) => a.year - b.year)
    return byOrder


}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const alpha = moviesArray.map(movie => movie.title)
    alpha.sort((a, b) => a.title - b.title).slice(0,19)
    return alpha;

}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}S