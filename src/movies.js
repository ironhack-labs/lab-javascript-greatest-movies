//const movies = require("./data") 

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
        const allDirectors = moviesArray.map(function(movies) {
    return movies.director
    })
return allDirectors
 }
//console.log(getAllDirectors(movies))

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const moviesSpielberg = moviesArray.filter(function (movies){
       return movies.director === "Steven Spielberg" && movies.genre.includes("Drama");
           });    
           return moviesSpielberg.length
           }
    
// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) {
        return 0
    } 
      
const avgMovies = moviesArray.reduce(function(acc, val) {
    if (val.score) 
    return  acc + val.score
    else 
    return acc
}, 0)
const averageScore = Number((avgMovies / moviesArray.length).toFixed(2));
return averageScore;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMovies = moviesArray.filter(function (movies) {
        if (movies.genre.includes("Drama")) {
            return true;
        } })
            if (dramaMovies.length === 0) {
                return 0;
            }
         const dramaAverage = dramaMovies.reduce(function(acc, val) {
            return acc + val.score;
         }, 0);
          
         const moviesScoresAvg = dramaAverage / dramaMovies.length;
         return +(moviesScoresAvg.toFixed(2));
             }


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    orderedMovies = moviesArray.sort(function (a, b) {
        return a.year - b.year
    })
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}

