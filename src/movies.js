// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    // you have to map through the array of movies 
   const directorsArray = moviesArray.map(function (movie) {
    // get all the directors into one array as a final result. 
    return movie.director
    });
    return directorsArray;
}
getAllDirectors(movies)


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
// Go ahead and create a howManyMovies() function 
// that receives an array as a parameter
// filter 👀 the array 
// so we can have only the drama movies where Steven Spielberg is the director.
function howManyMovies(moviesArray) {
    const dramaMoviesOfSteven = moviesArray.filter(movie => movie.director === 'Steven Spielberg' && movie.genre.includes('Drama') === true);
    return dramaMoviesOfSteven.length;
}



// Iteration 3: All scores average - Get the average of all scores with 2 decimals
// we want to know the average score of all of them 
// and display it on the console. 
// Create a scoresAverage() function that receives an array as a parameter 
// and solves the challenge.
// The score must be returned rounded to 2 decimals!
// 💡 Maybe you want to "reduce" the data to a single value. 😉
function scoresAverage(moviesArray) {
    const movieAvg = moviesArray.reduce(function (a,b) {
        return (a + b.score)/moviesArray.length;
      }, 0);
return +(movieAvg.toFixed(2))
}
  

// Iteration 4: Drama movies - Get the average of Drama Movies
// Create a dramaMoviesScore() function that receives an array as a parameter 
// to get the average score of all drama movies! 
// Let's see if it is better than the general average.
// Again, rounded to 2 decimals!
function dramaMoviesScore(moviesArray) {}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
