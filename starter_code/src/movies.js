/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes.


function turnHoursToMinutes(array){ 
  var NewDuration= [];
  NewDuration = array.map(function(movie){
    
          // console.log(movie.duration.split(' ')[0].replace('h',' ')*60)
      // console.log(movie.duration.split(' ')[1].replace('min',' '))

    if(movie.duration.includes("h") && movie.duration.includes("min"))
    { 

    return (movie[movie.duration.index0f("h")-1*60] +  movie[movie.duration.index0f("min")-1]);
    return NewDuration;

  }

  else if  (movie.duration.includes("h") && !movie.duration.includes("min"))
  {
    return movie[movie.duration.index0f("h")-1]*60;

  }

  else if(movie.duration.includes("min") && !movie.duration.includes("h"))
  {
    return movie[movie.duration.index0f("min")]
  }
  
  })
}



// Get the average of all rates with 2 decimals 


// Get the average of Drama Movies


// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average 