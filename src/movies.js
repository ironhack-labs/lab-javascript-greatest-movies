// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

const movies = require("./data");


function getAllDirectors(movies) {

let allDirectors = movies.map(function(movie){
    return movie.director;
   });

// let allUniqueDirectors = allDirectors.map(function(director, index){
//     if (allDirectors.indexOf(director, index ) === -1) {
//       return director;
//     }

// })
return allDirectors;
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(movies) {
    let dramaSpielberg = movies.filter(function (movie){
      return movie.director==="Steven Spielberg" && movie.genre.indexOf("Drama")!==-1;
    })

    return dramaSpielberg.length;

}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  if (movies.length===0) {
     return 0;
  }
   let scoresTotal = movies.reduce(function(accum, movie){
      if (movie.score === null || movie.score ==="" || movie.score === undefined ) {
        movie.score = 0;
      }
      return accum + movie.score;
   }, 0);

   return parseFloat((scoresTotal/movies.length).toFixed(2));

}






// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  let dramaMovies = movies.filter(function(movie){
     return movie.genre.indexOf("Drama")!==-1
  })
    if (dramaMovies.length===0) {
      return 0;
    }  

let dramaScores = dramaMovies.reduce(function(sum, movie){
  return sum + movie.score;
}, 0)  

 return parseFloat((dramaScores/dramaMovies.length).toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  let moviesCopy = movies;

  let sortedMovies = moviesCopy.sort(function(a,b){
    if (a.year < b.year) return -1; 
    if (a.year > b.year) return 1; 
    if (a.year === b.year) {
      if (a.title<b.title) {
        return -1;
      } else { return 0}
    }

  });
let newArray = sortedMovies
return newArray;

}





// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
   let moviesCopy =movies;
   let moviesTitle = moviesCopy.map (function (movie){
      return movie.title;
   })

   let orderedMovieTitles = moviesTitle.sort();

   if (orderedMovieTitles.length <20){
     return orderedMovieTitles ;
    } else {
      return orderedMovieTitles.slice(0,20);
    } 



}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {
  let moviesCopy = movies
    for (let i=0; i<moviesCopy.length; i++) {
      let string = moviesCopy[i].duration;
       let hour = parseInt(string.slice(0,string.indexOf("h")));
       let minutes;
       if (string.indexOf("m")===-1) {
         minutes = 0;
       } else {
         minutes = parseInt(string.slice((string.indexOf(" ")+1),-3));
       };
       let totalMinutes = hour*60+minutes;
       moviesCopy[i].duration = totalMinutes;
    }
    return moviesCopy;
}

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
