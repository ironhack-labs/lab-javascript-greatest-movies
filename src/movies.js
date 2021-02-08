// var { movies } = require("./data.js");

// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(moviesArr) {
  let dirArr = moviesArr.map(function (movie) {
    return movie.director;
  });
  return dirArr;
}


// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?


function howManyMovies(moviesArr) {
  let spielbergDramaMovies = moviesArr.filter(function (movie) {
    return (
      movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
    );
  });
  return spielbergDramaMovies.length;
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage (moviesArr){
const averageRatesMovies = moviesArr.reduce(function (acc, movie){
    return acc += movie.rate / moviesArr.length;
}, 0) 
const averageToTwoDecimals = averageRatesMovies.toFixed(2);
const result = parseFloat(averageToTwoDecimals)
return result;
}


// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(moviesArr) {
  const listDramaMovies = moviesArr.filter(function (movie) {
    return movie.genre.includes("Drama");
  });
  let averageDramasMovies = listDramaMovies.reduce(function(acc, dramaMovie){
      return acc += dramaMovie.rate / listDramaMovies.length
  },0)
  return averageDramasMovies 
}



// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear (moviesArr) {
const newMoviesArr = [...moviesArr];
const movieYearsOrder = newMoviesArr.sort(function (a, b) {
 if (a.year === b.year) return a.title.localeCompare(b.title)
else
  return a.year - b.year;

})
 return movieYearsOrder
}


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically (moviesArr) {
  const newMoviesArr = [...moviesArr];
  const moviesOrder = newMoviesArr.sort (function (a, b) {
  return a.title.localeCompare(b.title) 
    })
   let moviesTitlesArray = moviesOrder.map(function (movie) {
     return movie.director;
   });
   let twentyMovies = moviesTitlesArray.slice(0, 20);
   return twentyMovies;
}
   

/*function orderAlphabetically (moviesArr) {
  const newMoviesArr = [...moviesArr];
    let twentyFirstMovies =
      for ( let i=0; i< newMoviesArr.length; i++ ) {
    if ( newMoviesArr[i]>20) {
      return newMoviesArr[i]
    }

    const order = newMoviesArr.sort (a, b) {a.title.localeCompare(b.title)} 
    
    return order
  }*/

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
