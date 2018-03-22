/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
function turnHoursToMinutes(moviesArray) {
  return moviesArray.map(function (elem) {
    var hours = 0;
    var minutes = 0;
    if (elem.duration.indexOf('h') !== -1) {
      hours = parseInt(elem.duration[0], 10) * 60;
    }
    if (elem.duration.indexOf('min') !== -1) {
      minutes = parseInt(elem.duration.substring(elem.duration.length - 5, elem.duration.length - 3), 10);
    }
    return Object.assign({}, elem, { duration: hours + minutes });
  });
}
turnHoursToMinutes(movies);

// Get the average of all rates with 2 decimals 

function ratesAverage(arr) {

  return parseFloat(arr.reduce(function(acc, element, i) {
    var avg = element.rate / arr.length + acc;
    return Number(media.toFixed(2));
  }, 0));
}
// Get the average of Drama Movies
function dramaMoviesRate(arr) {

  var newArray = arr.map(function(prop){
    return movies["prop"];
  })
  return (newArray.reduce(function(acc, element, i) {
  var avgDrama = element.rate / arr.length + acc;
    return avgDrama;
  }, 0));
}

// Order by time duration, in growing order
function orderByDuration(arr){
  var x=arr;
  return x.sort();
}

/*numbers.sort();

console.log(numbers);*/

// How many movies did STEVEN SPIELBERG

function howManyMovies(arr){
  if (arr.length===0){
    return undefined;
}
var movieDrama = arr.filter(function(movie) {
    return movie.genre.includes("Drama");
  });
var stevenDrama = movieDrama.filter(function(movie) {
    return movie.director.includes("Spielberg");
});
return ('Steven Spielberg directed '+stevenDrama.length+' drama movies!');

}

// Order by title and print the first 20 titles
function orderAlphabetically(){

}

// Best yearly rate average

function bestYearAvg(){

}