// The `movies` array from the file `src/data.js`.
console.log('movies: ', movies);


// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  const nameOfDirectors = movies.map(themovies => {
  //const famousDirectors = themovies.year + nameOfDirectors; 
   return { 
     director: themovies.director
   }
  })};

  console.log(nameOfDirectors);
  

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

// if I could not use right method I used the pseudo code instead to show I am trying to implement the goal/concept of the iteration.***

function howManyMovies(movies) {
  const famousDirectors = movies.director.filter ( function (movies) { // used .filter to find the directors of the movies.
  
    if ((movies.director) === 'Steven Spielberg') {
     return movies.genre++; //// made pseudo code to check if the director was steven then to count the number genres of the movies of steven etc
   }
   
   })};
     
     let dramaCounter = 0; // made counter to check how many of the genres are 'drama'
     
     if (movies.genre === 'Drama') {
       dramaCounter++;
       //return dramaCounter was not able to find return statement to log the value of
       // drama movies by "steven"! :/
       
     };
   
   



}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage() {}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore() {}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear() {}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically() {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
