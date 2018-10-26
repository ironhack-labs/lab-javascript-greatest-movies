/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
var hoursToMin = function(hoursFormat){
    var min = 0;
    if(!isNaN(hoursFormat)){
        return hoursFormat;
    }else {
        var characters = hoursFormat.split(" ");
    characters.forEach(function(character) {
      if (character.includes("h")){
        min += parseInt(character.slice(0, character.indexOf("h"))) * 60;
      } else if (character.includes("min")) {
        min += parseInt(character.slice(0, character.indexOf("min")));
      }
  
    });
    }
    
    return  min;
    
  };
  
  var moviesDurationMin = movies.map(function(film){
      //console.log(film.duration+" "+hoursToMin(film.duration));
      film.duration = hoursToMin(film.duration);
      return film;
  
    });
  

// Get the average of all rates with 2 decimals 
/*var ratesAverage = function(rates){
    var totalRating = rates.reduce(function(ratingAccumulator, currentRating){
      console.log(parseFloat(currentRating));
     return ratingAccumulator + parseFloat(currentRating)
   },0);
   console.log(totalRating);
     return totalRating / movies.length;
};*/
   /*var allRates = [];
   var durationmovies = movies.map(function(film){
     film.duration = hoursToMin(film.duration);
     allRates.push(film.rate);
     return film;
     });
   
   ratesAverage(allRates);*/

   var ratesAverage = moviesDurationMin.reduce(function(ratingAcumulator, currentRating) {

   },0);

// Get the average of Drama Movies


// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
