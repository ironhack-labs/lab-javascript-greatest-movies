/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 

function turnHoursToMinutes(arr){
  var copyMovie = arr.map(function(movie){
      var minTotal = 0;
      if(typeof(movie.duration) == "number"){
          minTotal = movie.duration;
      }
      else{
          if(movie.duration.length < 4){
              minTotal = parseInt(movie.duration) * 60;
          }
          else if(movie.duration.length > 5){
              var splittedDuration = movie.duration.split(" ");
              minTotal = (parseInt(splittedDuration[0])*60) + parseInt(splittedDuration[1]);
          } else {
              minTotal = parseInt(movie.duration);
          }
      }        
      var newMovies = Object.assign({},movie,{duration:minTotal});
      return newMovies;
  });
  return copyMovie;
}

// Get the average of all rates with 2 decimals 
function ratesAverage(arr){
 var avg = arr.reduce(function(ac, movie){
  return ac += movie.rate;
 }, 0)

  return parseFloat(avg / arr.length);
}

// Get the average of Drama Movies

function dramaMoviesRate(dramaArray){
  var filter = dramaArray.filter(function(movie){
    return movie.genre.indexOf("Drama" > -1) 
    
  }) 
  var avg = dramaArray.reduce(function(ac, movieDrama){
    return ac += movieDrama.rate;
   }, 0)
   return (Math.trunc(parseFloat(avg/filter.length*100))/100
)} 


// Order by time duration, in growing order

    

// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
