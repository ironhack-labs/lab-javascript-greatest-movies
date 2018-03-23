/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
function turnHoursToMinutes(moviesArray) {
    return moviesArray.map(function (elem) {
      var hours = 0;
      var minutes = 0;
      if (elem.duration.indexOf('h') !== -1) {
        hours = parseInt(elem.duration[0], 10) * 60;
      }
      if (elem.duration.indexOf('min') !== -1) {
        minutes = parseInt(elem.duration.substring(elem.duration.length - 5, elem.duration.length - 3), 10);
      }
      return Object.assign({}, elem, { duration: hours + minutes });
    });
  }
  turnHoursToMinutes(movies);

// Get the average of all rates with 2 decimals 
function ratesAverage (array){

    var sumaPuntuacion = array.reduce(
   function(accumulator, current){
       
       
       rateFloat =parseFloat(current.rate);
     
            
       return (accumulator + rateFloat); // este es el return del function segundo 
   },0);
    
   return Math.round(((sumaPuntuacion/(array.length))) * 100) / 100; // este es el return del function rateAverage
 }
 ratesAverage (movies); 
 
// Get the average of Drama Movies
function dramaMoviesRate(moviesArray){
 
  var pelisDrama = moviesArray.filter(function(e){
    
    if (e.genre.indexOf(" ") !=-1){
      return e.rate == 0.0;
    }
    return e.genre.indexOf("Drama") != -1 //asi filtras las peliculas que contengan el genero Drama.
    
  });
  return ratesAverage(pelisDrama);// Utilizas el metodo anterior pero ya solo con las peliculas de Drama.
}

dramaMoviesRate(movies);

// Order by time duration, in growing order

function orderByDuration (array){
	
  array.sort (function (a,b){
    
    return a.duration - b.duration;
  });
    return moviesArray;
  }
  orderByDuration (movies);


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
