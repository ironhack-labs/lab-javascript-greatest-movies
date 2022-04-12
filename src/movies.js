const movies = require('../src/data');

// The `movies` array from the file `src/data.js`.
//console.log('movies: ', movies);


// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  const allDirectors = moviesArray.map(movie => movie.director);
  return allDirectors;
//return moviesArray.map(movie => movies.director);
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  const stevenDramas = moviesArray.filter(movie => movie.director === 'Steven Spielberg' && movie.genre.includes('Drama'));
  return  stevenDramas.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(myMoviesArray) {}

 //return myMoviesArray.reduce(((accumulator, element) => accumulator + element.score , 0) / myMoviesArray 

  //if(myMoviesArray.length=== 0){
  ///  return 0;
  //}) ;

 // const myTotalMovieScore = myMoviesArray.reduce((accumulator, element)=> {
 //   if(element.score===''){
 //     return accumulator;
 //   }
 //   if(Object.keys(element).includes('score')){
 //     return acumulator + element.score;
 //   } else {
//  
 //    }
 //   
//}
    
  //  return accumulator = element.score;
  // },0);

   //const myAverageScore = myTotalMovieScore / myMoviesArray.length;
   //return Number(myAverageScore.toFixed(2))

//}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(myMoviesArray) {
  const myDramaMovies = myMoviesArray.filter(element => element.genre.includes('Drama'));
  return scoresAverage(myDramaMovies);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear() {}
//  const myNewMoviesArray = [...myMoviesArray];
//
//  return myNewMoviesArray.sort((a,b)) => {
//    if(a.year .b.year){
//      return 1;
//    }
//    if(a.year < b.year){
//      return -1;
//    }
//    if (a.year === b.year){
//
//    }
//  }
//}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(myMoviesArray) {
  const myTitlesArray = myMoviesArray.map(element => element.title);
  myTitlesArray.sort();
  if(myTitlesArray.length > 20){
    return myTitlesArray.slice(0,20)
  } else {
    return myTitlesArray;
  }
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(myMoviesArray) {
  return myMoviesArray
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
