/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 




function turnHoursToMinutes(movies) {
  return  movies.map(function (movie){
  var hr = 0;
  var min = 0;
  if (movie.duration.indexOf("h") !== -1){
    hr = parseInt(movie.duration[0]) * 60;
  } else (movie.duration.indexOf("min") !== -1);{
    min = parseInt(movie.duration.slice(-3));
  }
  return Object.assign({}, movie, { duration: hr + min });
})

  }



  
  

// Get the average of all rates with 2 decimals 


// Get the average of Drama Movies


// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
