/* eslint no-restricted-globals: 'off' */
console.log("hello")
console.log(movies.map(function(elmt){
  return elmt.title
}))
// Turn duration of the movies from hours to minutes 
function turnHoursToMinutes(array) {
  return movies.map(function(elmt){
    var minutes = 0;
    console.log(elmt.duration)
    var parsedString = (elmt.duration.indexOf("h") !== -1 ? elmt.duration.split("h")
    parsedString[0] = parseInt(parsedString[0]) * 60;
    parsedString[1] = parseInt(parsedString[1]);
    elmt.duration = parsedString[0] + parsedString[1];
    return elmt
  })
}

// Get the average of all rates with 2 decimals 


// Get the average of Drama Movies


// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
