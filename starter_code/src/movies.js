/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes

function turnHoursToMinutes(movies) {
  var newMovieList = []
  var timeRegex = /(\d+h)?\ ?(\d+\min)?/i;

  movies.forEach(function(movie) {
      newMovie = Object.assign({}, movie) // pour créer une copie de l'objet movie

      var movieDuration = newMovie.duration.match(timeRegex);
      if (movieDuration[1] != undefined) {
          var fullHours = parseInt(movieDuration[1], 10);
          var hoursInMinutes = fullHours * 60;
      } else { // s'il n'y a pas d'heures
          var hoursInMinutes = 0;
      }
      
      if (movieDuration[2] != undefined) {
          var fullMinutes = parseInt(movieDuration[2], 10);
      } else { // s'il n'y a pas de minutes
          var fullMinutes = 0;
      }
      
      var hoursPlusMinutes = hoursInMinutes + fullMinutes; // calcul final

      newMovie.duration = hoursPlusMinutes;
      newMovieList.push(newMovie);
  });
  return newMovieList;
}
// Get the average of all rates with 2 decimals

function ratesAverage(movies) {
  var total = movies.reduce((acc, currentMovie) => {
    return (acc += Number(currentMovie.rate));
  }, 0);
  const avg = (total / movies.length).toFixed(2);
  return Number(avg);
}

// Get the average of Drama Movies
function dramaMoviesRate(movies) {
  var dramaMovies = movies.filter(movie=> {
    return movie.genre.includes("Drama");
});
if (dramaMovies.length > 0) {
    return ratesAverage(dramaMovies);
  } else {  
     return undefined;
    } 
}

// Order by time duration, in growing order
function orderByDuration(movies){
  movies.sort();
  return movies;
}
var moviesDuration = ["duration", "title"] 

function convertHoursInMinutes(movies){
  var num = n;
  var hours = (num / 60);
  var rhours = Math.floor(hours);
  var minutes = (hours - rhours) * 60;
  var rminutes = Math.round(minutes);
    return num + " minutes = " + rhours + " hour(s) and " + rminutes + " minute(s).";
};


// How many movies did STEVEN SPIELBERG
function howManyMovies(movies) {
  if (movies.length == 0) {
    return undefined;
  }
  var dramaMovies = movies.filter(function(movie) {
  return movie.director.includes('Steven Spielberg') && movie.genre.includes ('Drama');
 });
  if (dramaMovies.length >= 0) {
  return `Steven Spielberg directed ${(dramaMovies.length)} drama movies!`;
 } 
 }

// alphabetical
function orderAlphabetically(movies){
//  var firstTwenty = movies.slice(0,19);
   movies.sort();  
   return movies;
   
  }


//return String(spielbergMovies.length);
      
// Order by title and print the first 20 titles

// Best yearly rate average
