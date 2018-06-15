/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
function turnHoursToMinutes(arr) {
    return arr.map(function (e) {
      var minutes = 0;
      // var duration = e.duration;
      if (e.duration.includes('h')) {
        minutes += parseInt(e.duration[0]) * 60;
        e.duration = e.duration.slice(2);
      }
      if (e.duration.includes('min')) {
        e.duration = e.duration.split('min')[0];
        minutes += parseInt(e.duration);
      }
      // return e;
      return {
        duration: minutes
      };
    });
  }


// Get the average of all rates with 2 decimals 

function ratesAverage(peliculas){

    var sumaRates = peliculas.reduce(function(accumulator, current){
      return accumulator+(current.rate/peliculas.length);
    },0)
    console.log(sumaRates)
    return Math.round(sumaRates*100)/100;
  }

// Get the average of Drama Movies

function dramaMoviesRate(peliculas){

    var ratesDrama=peliculas.filter(function(pelicula){
        return pelicula.genre.includes("Drama")==true
    })
    if(ratesDrama.length==0){
        return undefined;
    }
    return ratesAverage(ratesDrama)
}

// Order by time duration, in growing order

function orderByDuration(peliculas){
    
   return peliculas.sort (function(a,b) {
    if(a.duration == b.duration){
    return a.title-b.title;
    } 

    return a.duration - b.duration;
    
    })

}


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
