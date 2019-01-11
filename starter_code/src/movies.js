/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes



function turnHoursToMinutes(movies){
  var data2;
  data2 = movies.map(function(movie){
  
    var result = 0;
    if(typeof(movie.duration) == "number"){
          result = movie.duration;
      } else{
          if(movie.duration.length < 4){
              result = parseInt(movie.duration) * 60;
          } else if(movie.duration.length > 5){
              var stringSplaitted = movie.duration.split(" ");
              result = (parseInt(stringSplaitted[0])*60) + parseInt(stringSplaitted[1]);
          } else{
              result = parseInt(movie.duration);
          }
      }        
  var newMovies = Object.assign({},movie,{duration:result});
  return newMovies;
  });
  return data2; 
}





/*var minutes = movies.map(function(movie) {
    var onlyDuration = element.duration;
    return onlyDuration
  });
}
turnHoursToMinutes(movies);
console.log(minutes);*/

/*function turnHoursToMinutes(movies){
  var array = movies.map(function(movie){
    var durationAsNum = transformToNumber(movie.duration);
    
      return { 
        "title":movie.title,
        "year":movie.year,
        "director":movie.director,
        "duration":durationAsNum,
        "genre":movie.genre,
        "rate":movie.rate,
      }
    });

  return array;
 /* var transformedMovies =  movies.map(function(movie){
  var durationAsNum = transformToNumber(movie.duration);
  
    return { 
      "title":movie.title,
      "year":movie.year,
      "director":movie.director,
      "duration":durationAsNum,
      "genre":movie.genre,
      "rate":movie.rate,
    }
  });
}*/



// Get the average of all rates with 2 decimals

function ratesAverage(movies){
var averageArray = movies.reduce(function(amount, movie){
  var total = amount + parseInt(movie.rate) ;
  return total;
})
}

// Get the average of Drama Movies

// Order by time duration, in growing order

// How many movies did STEVEN SPIELBERG

// Order by title and print the first 20 titles

// Best yearly rate 
