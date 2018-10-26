/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
var newArray=0;
function turnHoursToMinutes(array){
    array.map(function(movie){
        return movie.duration})
    // imovie.duration.splice(1)
}
    
// Get the average of all rates with 2 decimals 
//var p = 0; //
function ratesAverage(array){  
return parseInt(array.reduce(function(acc, elem){ //Intento igualar el parse int a p, en lugar de dar return
return acc + elem.rate
},0))/array.length
//parseFloat(p.toFixed(2))
}

// Get the average of Drama Movies
var dramaMovies = 0;
var otherMovies = 0;

function dramaMoviesRate(array){
   dramaMovies.filter(function(array){

       if(movies.duration.array==="Drama"){
           movies.rate(function(ac,elem){
              dramaMovies = ac + elem.rate
           })
           return dramaMovies /= 2;
       }
       else{
           return movies.rate(function(ac,elem){
               otherMovies = (ac + elem.rate)/2
           })
       } 
    });
     if(dramaMovies > otherMovies){
         return true;

    }
}

// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
