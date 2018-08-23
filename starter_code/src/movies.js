/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 

function turnHoursToMinutes(arrayMovies) {
  var arrayMoviesParsed=arrayMovies.map(function(movie){
    var minutes=0;
    var haveHours=movie.duration.indexOf("h");
    var haveMinutes=movie.duration.indexOf("min");
    if(haveHours > 0 && haveMinutes > 0){
      minutes+=parseInt(movie.duration.split(" ")[1].slice(0,-3))
      minutes+=parseInt(movie.duration.split(" ")[0].slice(0,-1))*60
    }else if(haveMinutes > 0){
      minutes=parseInt(movie.duration.slice(0,-3))
    }else{
      minutes=parseInt(movie.duration.slice(0,-1))*60
    }
    return Object.assign({},movie,{duration:minutes})
  })

  return arrayMoviesParsed;
}

/* function turnHoursToMinutes (arrayMovies) {
  var newMovies = arrayMovies.map(function(film, i){
    
  })
} */

// Get the average of all rates with 2 decimals 


// Get the average of Drama Movies


// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
