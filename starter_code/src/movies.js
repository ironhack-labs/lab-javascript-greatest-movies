/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 


// Get the average of all rates with 2 decimals 

var ratesSum = 
movies.reduce(function (accumulator, currentValue ){
    return parseFloat(currentValue.rate) + accumulator;
},0);

function ratesAverage(moviesArray) {

    var SumRates = moviesArray.reduce(function (accumulator, currentValue ){
    return parseFloat(currentValue.rate) + accumulator;
},0);
    var indexOfArray = moviesArray.length();

    return SumRates / indexOfArray;
}; 


// Get the average of Drama Movies

function dramaMoviesRate (dramaMoviesArray) {
  
    var dramaValue = dramaMoviesArray.filter(function (oneItem) {
      if (oneItem.genre[1] === 'Drama'){
      return oneItem; }
    });
  
  
    var SumRates = dramaValue.reduce(function (accumulator, currentValue){
      return parseFloat(dramaValue.rate) + accumulator;
    },0);
      
    
  
    var indexOfArray = dramaValue.length;
      
    return SumRates / indexOfArray;
  }
  
  console.log(dramaMoviesRate(movies));
// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
