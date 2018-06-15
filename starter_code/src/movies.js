/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
movies.map (function (movie){
    var newFormat = movie.duration.split(' ');
    var hours = newFormat[0].split('h')
    var h = hours[0]*60;
    var mins = newFormat[1].split('min');
    var m = mins[0];
    var hToMin = Number(h)+ Number(m)
    // var min = newFormat[1].splice('min');
    var turnHoursToMinutes = {};
    turnHoursToMinutes.title = movie.title;
    turnHoursToMinutes.year = movie.year;
    turnHoursToMinutes.director = movie.director;
    turnHoursToMinutes.genre = movie.genre;
    turnHoursToMinutes.rate = movie.rate;
    turnHoursToMinutes.duration = hToMin;
    
    })

// Get the average of all rates with 2 decimals 
function ratesAverage(){
    var sum = movies.reduce(function(sum, placeholder){
    return sum + Number(placeholder.rate);
  },0);
  
    var ratesAverage = Math.round((sum / movies.length) * 100)/100 
  
    return ratesAverage
  }
  
  
  ratesAverage()
  
// Get the average of Drama Movies
function dramaMoviesRate(theArray){
  var dramaOnly = theArray.filter(function(movie){
    return movie.genre.includes('Drama');
  });
  return ratesAverage(dramaOnly);
  
// Order by time duration, in growing order

function orderByDuration(theArray){
  theArray.sort(function(a,b){
    if(a.duration > b.duration){
      return 1;
    }else if (b.duration > a.duration){
      return -1;
    }else{
      if(a.title < b.title){
        return -1
      } else if(b.title < a.title){
        return 1;
      }
    }
  });
  return theArray;
}

// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
