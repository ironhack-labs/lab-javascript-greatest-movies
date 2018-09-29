/* eslint no-restricted-globals: 'off' */

//[2,h, ,2,2,m,i,n]
// Turn duration of the movies from hours to minutes 

function turnsHoursToMinutes(movies){
  var fixedMovies = movies.map(
  function(oneMovie) {
  var splitDuration = oneMovie.duration.split("")
  var getHours = splitDuration[0]
  
  var getMinutes = 0
  if (splitDuration[4]==="m") {
      getMinutes = splitDuration[3]
  }
  else {
    var arrayMinutes = [splitDuration [3], splitDuration [4]]  
   getMinutes = arrayMinutes.join("")  
   };
var minutes = Number(getHours*60) + Number(getMinutes)
oneMovie.duration = String(minutes)
return oneMovie}
)
return fixedMovies
}
console.log(turnsHoursToMinutes(movies))


// Get the average of all rates with 2 decimals 


// Get the average of Drama Movies


// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
