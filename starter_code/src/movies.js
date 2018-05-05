/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
function turnHoursToMinutes (moviesArray){
  if(moviesArray === undefined){
    return;
  }

  return moviesArray.map(function(movie){

    var newMovie = Object.assign({}, movie);
    var movieDuration = newMovie.duration.split(" ");
    
    if (movieDuration.length === 2){
      movieDuration[0] =  Number(movieDuration[0].replace("h", ""))*60;
      movieDuration[1] = Number(movieDuration[1].replace("min", ""));
    }
    else{
      if (movieDuration[0].indexOf("h")===-1){
        movieDuration[0] = Number(movieDuration[1].replace("min", ""));
      }
      else{
        movieDuration[0] =  Number(movieDuration[0].replace("h", ""))*60;
      }
    }
    var sumDuration = movieDuration.reduce(function(acc, duration){
      return acc + duration;
    },0);

    newMovie.duration = sumDuration;

    return newMovie;
  })
}


// Get the average of all rates with 2 decimals 


// Get the average of Drama Movies


// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
