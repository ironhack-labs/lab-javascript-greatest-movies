/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
console.log(movies[0])

  
  function stringToMinutes(string){
  var arr = string.split('h')
  var hours = Number(arr[0])
  var minutes = Number(arr[1].split("min")[0])

  return hours*60+minutes
}
function turnHoursToMinutes(moviesArr) {
  var answer = moviesArr.map(function(movie) {
    movie[duration] = stringToMinutes(movie.duration)
  })
  return answer
}
// Get the average of all rates with 2 decimals 

function ratesAverage (moviesarr){
var resultSum = moviesarr.reduce(function(sum, movie){
  return sum + parseFloat(movie.rate);
} ,0)
}
return parseFloat(resultSum/movie.length)


// Get the average of Drama Movies


// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
