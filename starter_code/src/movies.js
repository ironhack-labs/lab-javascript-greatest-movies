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

    //moviesDurationMin;
  

// Get the average of all rates with 2 decimals 
   var allRatings = 0;
   var ratesAverage = moviesDurationMin.reduce(function(ratingAcumulator, currentRating) {
     allRatings += parseFloat(currentRating.rate);
     return parseFloat((allRatings / moviesDurationMin.length).toFixed(2));
},0);

// Get the average of Drama Movies
var dramaRatings = 0;
var dramaRatesAverage = moviesDurationMin.reduce(function(ratingAcumulator, currentRating) {
    if(currentRating.genre.includes("drama")){
        dramaRatings += parseFloat(currentRating.rate);
    }
    return parseFloat((dramaRatings / moviesDurationMin.length).toFixed(2));
},0);
// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
