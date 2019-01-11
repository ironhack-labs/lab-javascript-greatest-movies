/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 



function turnHoursToMinutes (array){
  
  arrayToReturn = array.map(function(movie){
    var newDuration= 0;
    var partition = [];
    
    if (typeof(movie.duration) == 'string'){
      if (movie.duration.includes("h") && movie.duration.includes("min")){
        partition = movie.duration.split(" ");
        var hours = parseInt(partition[0]);
        var minutes = parseInt(partition[1]);
        newDuration = (hours * 60) + minutes;
      
      } else if (movie.duration.includes("h")){
          newDuration = parseInt(movie.duration) * 60;

        } else if (movie.duration.includes("min")){
          newDuration = parseInt(movie.duration); 
      }
    
    } 
      
    var newMovies=Object.assign({},movie,{duration:newDuration})
    return newMovies

  })
  return arrayToReturn
}




// Get the average of all rates with 2 decimals 


// Get the average of Drama Movies


// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
