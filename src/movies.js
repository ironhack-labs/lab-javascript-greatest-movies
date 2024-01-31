// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    
    let Directors= moviesArray.map(movie=>movie.director)
    
    return Directors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    
    let dramaMovies = moviesArray.filter(movie => movie.genre.includes('Drama') && movie.director.includes('Steven Spielberg'))

    return dramaMovies.length; 
   
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {

    if (moviesArray.length === 0) {
        return 0;
      }
    else{
        const totalScores = moviesArray
        .filter(movie => movie.score !== undefined)
        .reduce((acc, movie) => acc+movie.score, 0);
        return parseFloat((totalScores / moviesArray.length).toFixed(2));
    }      

}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    if (moviesArray.length === 0) {
        return 0;
      }
    else{
        const totalScores = moviesArray
        .filter(movie => movie.score !== undefined && movie.genre.includes('Drama') )
        .reduce((acc, movie) => acc+movie.score, 0);
        let dramaMovies = moviesArray.filter(movie => movie.genre.includes('Drama'))
        if(dramaMovies.length>0){
            return parseFloat((totalScores / dramaMovies.length).toFixed(2));
        }
        else return 0;
        
    }      
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {

}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
