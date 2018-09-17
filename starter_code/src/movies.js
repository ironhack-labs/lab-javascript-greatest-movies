/* eslint no-restricted-globals: 'off' */
var moviesCopy = require("./data");

// Turn duration of the movies from hours to minutes 

function  turnHoursToMinutes(array){
  var newMoviesArray = [];
   array.forEach(function(element) {
     var objectTarget = {};
     var assign = Object.assign(objectTarget, element);
     var newObjectDuration = assign.duration ;
     var hoursIncluded = newObjectDuration.includes("h");
     var minutesIncluded = newObjectDuration.includes("min");
     //console.log("hoursIncluded" + hoursIncluded)
     //console.log("minutesIncluded" + minutesIncluded)
 
     var hour = parseInt(newObjectDuration.substring(0));
     var minutes = parseInt(newObjectDuration.split("min")[0].substring(2));
     var onlyMinutes = parseInt(newObjectDuration.split("min")[0]);
 
   if (hoursIncluded && minutesIncluded) {
     newObjectDuration = hour *60 + minutes;
   } else if (hoursIncluded && !minutesIncluded) {
     newObjectDuration = hour*60;
   } else {
      newObjectDuration = onlyMinutes;
   }
 
     var durationMod = {duration:newObjectDuration};
     //console.log(durationMod)
 
  newMoviesArray.push(durationMod);
   });
 
   return newMoviesArray;
 }
 //turnHoursToMinutes(movies);
 


  


// Get the average of all rates with 2 decimals 


// Get the average of Drama Movies


// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
