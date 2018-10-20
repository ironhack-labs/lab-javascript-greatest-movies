/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
/*function turnHoursToMinutes(movies){
  return movies.duration.slice("");
});*/

function stringToMinutes(string) {
  var arr = string.split('h')
  var hours = Number(arr[0])
  var minutes = Number(arr[1].split("min")[0])

  return hours*60+minutes
}

function turnHoursToMinutes(array) {
  var result = array.map(function(element) {
    return element.stringToMinutes();
  });
  return result;
}


// Get the average of all rates with 2 decimals 
var total = movies.reduce(function(sum, elem){
  return sum + parseFloat(elem.rate);
}, 0);

var average = (total / movies.length).toFixed(2);
console.log(average);


// Get the average of Drama Movies
var dramaMovies = movies.filter(function(elem){
  return elem.genre["Drama"];
});
return dramaMovies;


// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
