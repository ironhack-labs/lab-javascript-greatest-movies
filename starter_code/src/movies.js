/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 


function turnHoursToMinutes(movies){
  
    var time = 0;
    
    var minutesArr = movies.map(function(film){
      var splitTime = film.duration.split(" ");
      var minutes = 0;
    
      if (splitTime.length > 1){
        var hours = parseInt(splitTime[0])*60;
        minutes = parseInt(splitTime[1]);
        time = hours+minutes;
      }
      else {
        minutes = parseInt(splitTime[0]);
        time = minutes;
      }
      return Object.assign({}, film, {duration: time})
    
    })
  return minutesArr;
 }



// Get the average of all rates with 2 decimals 

function ratesAverage (movies) {
  var avgSum = movies.reduce(function (total, movie) {
    return total + movie.rate;
  }, 0);

  return parseFloat(avgSum / movies.length);
}


// Get the average of Drama Movies

function dramaMoviesRate (movies){
  var dramaArr = movies.filter(function (movie) {
    if (movie.genre.includes ('Drama')){
      return movie;
    }
  })
  var dramaRate = ratesAverage(dramaArr);
  console.log(dramaRate);
}

// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
