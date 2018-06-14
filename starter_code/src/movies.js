/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
function turnHoursToMinutes(e){
var minutos = 0
    return  movies.map(function (e){
        if(e.duration.includes("h")){
        minutos += parseInt(e.duration.split("h")[0])*60;
    }
    var minutos2 = 0
    if(e.duration.includes("min")){
        e.duration.substring(e.duration.indexOf("m"))
      }
})
}

// Get the average of all rates with 2 decimals 
function ratesAverage(movies){
      var average = movies.reduce(function(accumulator, e){
        return accumulator +  parseFloat((e.rate)/movies.length);
      }, 0)
      return Math.round(average*100)/100;
    }
// Get the average of Drama Movies

function soloDrama(arr){
       var drama = arr.filter(function(movie){
           return movie.genre.includes("Drama");
       });
       return drama;
    }
    function dramaMoviesRate(arr) {
           var drama = soloDrama(arr);
       
           if (drama.length == 0) {
               return undefined;
           }
           return ratesAverage(drama);
      }

// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
