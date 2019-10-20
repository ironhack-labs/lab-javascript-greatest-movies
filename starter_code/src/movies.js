/* eslint no-restricted-globals: 'off' */

// Iteration 1: All rates average - Get the average of all rates with 2 decimals 

function ratesAverage(arr){ 
let sum = arr.reduce(function(acc, value){
    return acc + parseFloat(value.rate);
}, 0); return sum / arr.length;
};
 
// Iteration 2: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(arr) {
    let dramaMovies = arr.filter(function(movie){
        if(movie.genre.indexOf("Drama") !== -1) {
            return true;
        }
    } ); if(dramaMovies.length === 0) {
        return 0};
    let sum = dramaMovies.reduce(function(acc, value){
        return acc + parseFloat(value.rate);
    }, 0 );
    return sum / dramaMovies.length;
};



// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)
 function orderByYear(arr) {
   let sortedMovies = arr.sort(function(a, b){
         if(a.year !== b.year) {
             return a.year - b.year; 
        } return a.title.localeCompare(b.title);
         }); return sortedMovies;
 };


// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct

function howManyMovies(arr) {
    let stevenMovies = arr.filter(function(movie){
        if(movie.genre.indexOf("Drama") !== -1 && movie.director === "Steven Spielberg") {
            return true;
     } });
   return stevenMovies.length;
  };


// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(arr) {
  arr.sort(function(a, b){
      return a.title.localeCompare(b.title);
  }); let sortedMovies = arr.map(function(movie) {
      return movie.title;
  });
   return  sortedMovies.slice(0,20);
  };


// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(arr) {
   let newMovies = arr.map(function(movie) {
       return {
        title: movie.title,
        year: movie.year,
        director: movie.director,
        duration: parseFloat(movie.duration) *60,
        genre: movie.genre,
        rate: movie.rate,
       }
   }) ; return newMovies;
    };


// BONUS Iteration: Best yearly rate average - Best yearly rate average

