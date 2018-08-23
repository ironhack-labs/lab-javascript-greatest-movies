/* eslint no-restricted-globals: 'off' */

// Turn duration of the movies from hours to minutes 

function turnHoursToMinutes (movie){
    for (var i=0; i<movie.length;i++){
      var horas=parseInt(movie[i].duration.split(" ")[0].toString().replace('h',''));
      var minutos=parseInt(movie[i].duration.split(" ")[1].toString().replace('min',''));
      var tiempo=(horas*60)+minutos
      movie[i].duration=tiempo + ' mins';
    }
    return movie
   }
   
   turnHoursToMinutes(movies)


// Get the average of all rates with 2 decimals 

function ratesAverage (movie){
    var rate=0.0;
    for (var i=0; i<movie.length;i++){
    rate+=parseFloat(movie[i].rate.toString());
   }
   return ((rate/movie.length).toFixed(2));
   }
   ratesAverage(movies)


// Get the average of Drama Movies


// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
