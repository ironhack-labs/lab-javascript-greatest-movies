/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 

var minutes = [];
var hoursMinuts = []

function turnHoursToMinutes (array){
  
  arrayToReturn = array.map(function(movie){
    var newDuration= 0;
    var partition = [];
    

    if (typeof(movie.duration) == 'number'){
      newDuration = movie.duration;
    } 
    
    if (typeof(movie.duration) == 'string'){
      if (movie.duration.includes("h") && movie.duration.includes("min")){
        partition = movie.duration.split(" ");
        var hours = parseInt(partition[0])
        var minutes = parseInt(partition[1]);
        return newDuration = hours * 60 + minutes;
     
      } 
     if (!movie.duration.includes("h")){
        return newDuration = parseInt(partition[1]); 
        } 
     if (movie.duration.includes("h") && !movie.duration.includes("min")){
      return newDuration = parseInt(partition[0]) * 60;
     } 
    } 
    return Object.assign({},movie,movie.duration=newDuration)
  })
  return arrayToReturn
}


// hoursMinuts = array.duration.splice(" ")



// Get the average of all rates with 2 decimals 


// Get the average of Drama Movies


// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
