/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 


// Get the average of all rates with 2 decimals 
function ratesAverage(arr){
  var totalRates= arr.reduce(function(acc,oneNumber){
  var rateI = Number(oneNumber.rate); 
  return acc += rateI;
  },0);
  function rounded(totalRates) {
  return Number( parseFloat(totalRates).toFixed(2) );
  }

  return rounded(totalRates/arr.length);
};

 /*ou function ratesAverage(myArray) {
 var totalAverage =
 myArray.reduce(function (acc, oneNumber) {
   return (acc + Number( oneNumber.rate)) ;
 }, 0);
 var average = totalAverage / myArray.length ;
 return average;
}
*/

// Get the average of Drama Movies


// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
