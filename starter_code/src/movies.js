/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 


function hoursToMinutes(hoursMinutes){
  var totalMins=0;
  hIndex=hoursMinutes.indexOf("h");
  if (hIndex!=-1){
    totalMins+= 60*parseInt(hoursMinutes.substring(0,hIndex));
    console.log (hoursMinutes.substring(hIndex));
    hoursMinutes=hoursMinutes.substring(hIndex).replace("h","").replace(" ","")
    console.log (hoursMinutes);
  }
  minIndex=hoursMinutes.indexOf("min");
  if (minIndex!=-1){
    totalMins+= parseInt(hoursMinutes.substring(0,minIndex));
  }
  return totalMins;
  }


function turnHoursToMinutes(movies){
  return movies.map(function(movie){
    var newMovie={...movie,duration:hoursToMinutes(movie.duration)};
    return newMovie;
  });

}

// Get the average of all rates with 2 decimals 


// Get the average of Drama Movies


// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
