/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 


// Get the average of all rates with 2 decimals 
var getTotalRates = movies.reduce(function (acc, index) {
  var intNumber = parseFloat(index.rate);
  var result = acc + intNumber;
  console.log(result)
  return result
},0);

var ratesAverage = function (result) {
  return result/movies.length
}

// Get the average of Drama Movies

var dramaMoviesRates =  function(movies) {
  
}






/*
function dramaMoviesRates (movies) {
 for (var i = 0; i < movies.length; i++){
   var dramaMovies = movies[i].genre.find(function(element) {
    console.log(element); 
    return element;
   });
   if(element === "Dramas"){
     console.log(ratesAverage(movies));
     ratesAverage(movies);
   }

 }
}
*/



// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
