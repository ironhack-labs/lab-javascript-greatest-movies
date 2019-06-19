/* eslint no-restricted-globals: 'off' */

  



// Turn duration of the movies from hours to minutes 
function turnHoursToMinutes (arrayOfMoviesObjects){ 

    let blah = arrayOfMoviesObjects.map((singleMovie)=>{
     let hours = singleMovie.duration.split("h")[0];
     hours = parseInt(hours);
     let min = singleMovie.duration.split("h")[1].split("m")[0];
     min = parseInt(min);
     let newSingleMovie = {...singleMovie};
     newSingleMovie.duration = hours * 60 + min;
      return newSingleMovie;
   })
   return blah;
   }
   console.log (turnHoursToMinutes (movies))
   



// Get the average of all rates with 2 decimals 


// Get the average of Drama Movies


// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average





