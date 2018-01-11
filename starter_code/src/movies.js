/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 

function turnHoursToMinutes(a){
  
  var moviesMinutes = a.map(function(item){
   return item;
  });

  moviesMinutes.map(function(mov){
    
    var hours = mov.duration.slice(0,1) * 60;
    var minutes = mov.duration.slice(3,-3);
  
    var total = parseInt(hours) + parseInt(minutes)
    
    mov.duration = total
    return mov.duration;
  });
  
  return moviesMinutes
}

turnHoursToMinutes(movies)


// Get the average of all rates with 2 decimals 


// Get the average of Drama Movies


// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
