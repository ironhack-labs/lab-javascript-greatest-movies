/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 


function turnHoursToMinutes(movies){
  return movies.map(function(movie, i){  
    var x = movie.duration.split("h");
  if(movie.duration.includes("h")){
    return {duration:parseInt(x)*60+parseInt(x[1]) }
  }else{
   return  {duration:parseInt(x)}
  }
  
})
}
turnHoursToMinutes()



// Get the average of all rates with 2 decimals 


// Get the average of Drama Movies


// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
