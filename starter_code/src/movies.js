/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
    var newfilms = [];

    function turnHoursToMinutes(array) {
      var peliculas = [];
       console.log(array.length);
      array.forEach(function(e) {
         var pelicula = Object.assign({},e);
         console.log (pelicula);
        var hourMin = parseInt(pelicula.duration.split("h")[0] * 60);
        var min = parseInt(pelicula.duration
            .split("h")[1]
            .split("min")[0]);
        if (min) {
          hourMin += min;
        }
       
        pelicula.duration = hourMin;

        peliculas.push(pelicula);
      });
      console.log(peliculas)
      console.log(array.length);
      
      return peliculas;
    }

    //turnHoursToMinutes(movies);

// Get the average of all rates with 2 decimals 
var average = {};

function ratesAverage(Movies.) {
  
}

// Get the average of Drama Movies


// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
