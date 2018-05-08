/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 

function turnHoursToMinutes(array){


// Get the average of all rates with 2 decimals 

function ratesAverage(array){
  let average = array.reduce((sum, movie)=> {
    return sum += parseFloat(movie.rate);
  }, 0);
  return average/array.length;
} 


// Get the average of Drama Movies

function dramaMoviesRate(array){
  if(dramaMoviesRate != 0){
   var drama = array.filter(function(movie){
    for(var i = 0; i < movie.genre.length; i++){
    return movie.genre[i] === "Drama";
      
      }
    });
  }else{
    return undefined;
  }
  return ratesAverage(drama.parseFloat);
}


// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG



// Order by title and print the first 20 titles


// Best yearly rate average
