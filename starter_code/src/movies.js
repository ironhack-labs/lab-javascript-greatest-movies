/* eslint no-restricted-globals: 'off' */
//Turn duration of the movies from hours to minutes 

function turnHoursToMinutes(movies) {
    var newMovies= movies.map(function(film){  
       var x=film.duration.split(" ");
        if (film.duration.includes("h")) {
         var h = parseInt(x[0].replace("h",""), 10)*60;
        }
         var min= parseInt(x[1].replace("min",""), 10) ;
         film.duration= h+min;
         return film;
       });
        return newMovies;
 } 

// Get the average of all rates with 2 decimals 


// Get the average of Drama Movies


// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
