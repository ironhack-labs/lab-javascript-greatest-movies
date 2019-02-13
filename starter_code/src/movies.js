/* eslint no-restricted-globals: 'off' */

// Turn duration of the movies from hours to minutes
function turnHoursToMinutes (){
 
}

// Get the average of all rates with 2 decimals 
function ratesAverage(arrayMovies){
   let rateReducer = (acumulator,currentValue) => acumulator + currentValue.rate;
   let sumRate = arrayMovies.reduce(rateReducer, 1);
   let average = parseFloat((sumRate/arrayMovies.length).toFixed(2));
   return average;
}


// Get the average of Drama Movies
function dramaMoviesRate(arrayMovies) {
  

} 

// Order by time duration, in growing order
function orderByDuration(arrayMovies) {
   let orderList = arrayMovies.sort (function(a, b) {
      if (a.duration < b.duration) {
         //a es menor que b según criterio de ordenamiento
         return -1;
      } else if (a.duration > b.duration) {
         //a es mayor que b según criterio de ordenamiento
         return 1;
      } else if (a.duration === b.duration){
         // a debe ser igual b
         return 0;
      }
   });
   return orderList;
} 

// How many movies did STEVEN SPIELBERG



// Order by title and print the first 20 titles

// Best yearly rate average
// let bestYearAvg = (array) => {
   
// }