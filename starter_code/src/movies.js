/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 

function turnHoursToMinutes (movies){

 var moviesDuration =0;
return moviesDuration = movies.map(function (movie){
   var  durationMinutes=0;
    if (movie.duration.indexOf("h")==-1){
       durationMinutes=parseInt(movie.duration);
    }
    else if (movie.duration.indexOf("min")==-1){ 
        durationMinutes=parseInt(movie.duration)* 60;
    }
    else {
        durationMinutes=parseInt(movie.duration.split(" ")[0]*60 + parseInt(movie.duration.split(" ")[1]))
    }
    return Object.assign({},movie, {duration:durationMinutes})
 
 })



/*
function turnHoursToMinutes(array){
    return arraMin=array.map(function(val){
        var durationMinutes=""
      if (val.duration.indexOf("h")==-1){
        durationMinutes=parseInt(val.duration);
      }
      else if(val.duration.indexOf("min")==-1){
        durationMinutes=parseInt(val.duration)*60;
      }
      else {
        durationMinutes=parseInt(val.duration.split("")[0]*60 + parseInt(val.duration.split("")[1])
    }
    return Object.assign({},val,{duration:durationMinutes})
    })
  } */
// Get the average of all rates with 2 decimals 


var result= movies.rate.reduce(function(accumulator, current){
    console.log(accumulator, current);
    return accumulator + current;

});

console.log(result);


function sumRate (puntuationMovie){

    var sum=0;
    puntuationMovie.rate.forEach(function (puntuation){
        sum= sum +puntuation;
    })

}
function ratesAverage(averageRate){

    if (averageRate.length === 0) {
      return;
    } else {
      console.log(averageRate)
      return sumRate(averageRate)/averageRate.length;
    }
  }
  


// Get the average of Drama Movies

var dramaMoviesRate =


// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
