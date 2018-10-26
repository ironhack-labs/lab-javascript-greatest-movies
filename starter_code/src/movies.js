/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 

function turnHoursToMinutes (arr){
  return  arr.map(function(movie){
      var duration;
    if(!movie.duration.includes('h')){
       duration = parseInt(movie.duration);
    } else if(!movie.duration.includes('min')){
       duration = parseInt(movie.duration)*60;        
    }else{
        var aux = movie.duration.split(" ");
        duration=parseInt(aux[0])*60 + parseInt(aux[1]);
    }
    return Object.assign({},movie,{duration:duration});
   });
}


// Get the average of all rates with 2 decimals 

function ratesAverage(arrReceived){
    if(arrReceived.length === 0)return;
    var average = arrReceived.reduce(function(acumulator,current){
        return (acumulator+current.rate);
},0);

return Math.round(average/arrReceived.length *100)/100;
}
// Get the average of Drama Movies
//Filtro el array de inicio para quedarme con otro que solo posea las peliculas de drama
var dramaMovies = movieFilms.filter(function(film){
    return film.genre === 'Drama'; 
});
//Mapeo el arrary de peiculas con género Drama para retornar la media.
var newArray = array.map(function(dramaMovies){
        return dramaMovies.rate / dramaMovies.length;
      })
// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
