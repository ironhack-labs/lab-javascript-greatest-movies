/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 


// Get the average of all rates with 2 decimals 

function reduceFunction (sum, item){
    return sum + item.rate;
}

function ratesAverage(arr) {
    var averageRate = arr.reduce(reduceFunction , 0) / arr.length;
    return averageRate;
}

//  Get the average of Drama Movies

 function dramaMoviesRate(item){
     return item.genre.includes("Drama");
 }

 function reduceDrama (sum, item, index){
   return sum + parseFloat(item.rate);
 }

 function dramaMoviesAverage(arr) {
   var drama = arr.filter(dramaMoviesRate);
   
   var averageDrama = drama.reduce(reduceDrama , 0) / drama.length;
   return averageDrama;
 };



// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
