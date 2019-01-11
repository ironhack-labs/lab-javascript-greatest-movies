/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 

function turnHoursToMinutes(movies) {

  var updatedMovies = movies.map(function(movie) {
    var splitTime = movie.duration.split(" ");
      var minutes = 0;
      var hours = 0;
    for (var i = 0; i < splitTime.length; i++){
      if (splitTime[i].indexOf("h") === -1){
        minutes = parseInt(splitTime[i]);
      } else {
        hours = parseInt(splitTime[i])* 60;
      }
    }
    /*if (splitTime < 2) {
      splitTime = ("has only minutes")
    } else {
      splitTime = ("has hours and minutes")
    }*/
    console.log(hours + " " + minutes)

    return hours + minutes;
    //console.log(turnHoursToMinutes)
   
  })

  return updatedMovies;
}

turnHoursToMinutes(movies)

// Get the average of all rates with 2 decimals 


// Get the average of Drama Movies


// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
