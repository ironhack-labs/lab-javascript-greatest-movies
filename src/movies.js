// The `movies` array from the file `src/data.js`.



// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  let arrOfDirectorsName =[];
  movies.map(movie => {arrOfDirectorsName.push(movie.director);}
    
  );
 
  
  let uniqueDirectorNames = [new Set(arrOfDirectorsName)];
  
  return uniqueDirectorNames; };

  


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?



function howManyMovies(movies) {
   
  
  const certainMovies = movies.filter(movie => {
                                  
    return (movie.director=== 'Steven Spielberg' && movie.genre.indexOf('Drama') !== -1);
  })
     
    return certainMovies.length;
   
 
    
  };


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {  
 
const avg = arr => arr.reduce((a,b) => a + b,0) / arr.length;
    const movieScores=movies.map(movie => movie.score);
    const scoreAvg=avg(movieScores);
   return parseFloat(scoreAvg.toFixed(2));
   
   
};

    
      
    
  

 

 
 
   
   
   
 


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  
    const avg = arr => arr.reduce((a,b) => a + b,0) / arr.length;
    const dramaMovies = movies.filter(movie => movie.genre.includes('Drama'));
    const dramaScores=dramaMovies.map(movie => movie.score);
    const dramaAvg=avg(dramaScores);
   return parseFloat(dramaAvg.toFixed(2));
   
   
};

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
