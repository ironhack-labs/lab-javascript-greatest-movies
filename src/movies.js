// Iteration 1: All directors? - Get the array of all directors.

// function getAllDirectors(movies){
//     const directorsListing = movies.map(function (moviesObj){
//     return moviesObj.director;
    
// });
//     return directorsListing
// };

function getAllDirectors(moviesArray) {
    
     const directorsArray = moviesArray.map(function(movieObj){
    return movieObj.director;
 });

return directorsArray
}



// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
//function getAllDirectors(moviesArray) {}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
// function howManyMovies(moviesArray) {

//     const dramaBySpielberg = moviesArray.filter(function(movieObJ {
//         if (movieObj.director === "Spielberg" && movieObj.genre.includes("Drama")) {
//             return true;
//         } else {
//             return false;
//         }
//         }));
//         return dramaBySpielberg.length;
//     };

// function howManyMovies(moviesArray) {
//   if (moviesArray.length) === 0) {
//         return 0;
//     }
  
//     const dramaBySpielberg = moviesArray.filter(function(movieObj) {

//     if (movieObj.director === "Spielberg" && movieObj.genre.includes("Drama")) {
//       return true;
//     } else {
//       return false;
//     }
//   });

//   return dramaBySpielberg.length;
// };

function howManyMovies(moviesArray) {
//   if (moviesArray.length === 0) {
//     return 0;
//  }
    count = 0; 
  
    const dramaBySpielberg = moviesArray.filter(function(movieObj) {
    
    if (movieObj.director === "Steven Spielberg" && movieObj.genre.includes("Drama")) {
      count++;
}});
    return count
  };





// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  
  const scoreArray = moviesArray.map((movieObj) => movieObj.score);
  
  const scoresTotal = scoreArray.reduce((accumulator, currentValue) => {
  return accumulator + dddddd
  }, 0);
  return scoresTotal;



  const averageScore = scoresTotal / scoreArray.length;
  const averageScoreRounded = averageScore.toFixed(2);
  return averageScoreRounded
  
  };




// Iteration 4: Drama movies - Get the average of Drama Movies

// function dramaMoviesScore(moviesArray) {

// const dramaMoviesArray = moviesArray.filter(function(movieObj) { 
//   if (movieObj.genre.includes("Drama")) {
//     return true;
//   else {
//     return false;
//   }
//   return dramaMoviesArray
// }});
  

// const dramaScoreTotal = dramaMoviesArray.reduce(function(accumulator, film){
//  return accumulator + film.genre[Drama]
// }, 0); 

// const average = dramaScoreTotal / dramaMoviesArray.length;
// return average.toFixed(2)

// }

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
//function orderByYear(moviesArray) {}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
//function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
//function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
//function bestYearAvg(moviesArray) {}
