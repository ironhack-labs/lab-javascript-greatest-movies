/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 

function turnHoursToMinutes(arr){
  var newArrayHours = arr.map(function(e){
    text = e.duration.replace("h","").replace("min","").split(" ");
    hours = text[0]*60;
    min = text[1];
    totalDuration = parseInt(hours) + parseInt(min);
    console.log(totalDuration); 
    return Object.assign({},e,{duration:totalDuration});
  })
  return newArrayHours;
}



// Get the average of all rates with 2 decimals 
function ratesAverage(arr){
  var sumRates = arr.reduce(function(sum,count){
    (sum + parseFloat(count.rate))/arr.length;
   },0)
   return sumRates;
}
var round = ratesAverage(movies).toFixed(2);
console.log(round);


// Get the average of Drama Movies


// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
