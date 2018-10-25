/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 


// Get the average of all rates with 2 decimals 
function ratesAverage(array) {
  var sum = array.reduce(function(accum, currentValue){
    var rate = accum + currentValue.rate
    return rate
  },0)
  return sum/array.length;
}

// Get the average of Drama Movies
function dramaMoviesRate(array) {
  var dramaMovies = array.filter(function(movie){
      return movie.genre.includes("Drama");
  })
  if (dramaMovies.length === 0) {
    return undefined;
  } 
  return Math.round(ratesAverage(dramaMovies)*100)/100

} 

// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG
function howManyMovies(array) {
  if (array.length === 0) {
    return undefined;
  }
  var dramaMovies = array.filter(function(movie){
  return movie.genre.includes("Drama");
})
  var spielbergDramas = dramaMovies.filter(function(movie){
    return movie.director === "Steven Spielberg";
  })
  return "Steven Spielberg directed " + spielbergDramas.length + " drama movies!"
}

// Order by title and print the first 20 titles

function orderAlphabetically(array) {
  var movieTitles = [];
  array.forEach(function(movie){
    movieTitles.push(movie.title);
  })
  if (movieTitles.length > 20) {
    movieTitles.sort()
    movieTitles.splice(20);
    return movieTitles
  } else {
    return movieTitles.sort();
  }
}






// Best yearly rate average
