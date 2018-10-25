/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 


// Get the average of all rates with 2 decimals 

function ratesAverage(array){
  var sum = array.reduce(function(accum, currentValue){
    var rate = accum + currentValue.rate;
    return rate;
  },0);
  return Number(sum/array.length.toFixed(2));
}

// Get the average of Drama Movies
function dramaMoviesRate(array){
  var dramaArray = array.filter(function(movie){
    return movie.genre.includes('Drama');
  });
  return ratesAverage(dramaArray);
}

// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG

function howManyMovies(array){
  var spielberg = array.filter(function(movie){
    if (movie.genre.includes('Drama') && movie.director.includes('Steven Spielberg')){
      return movie;
    };
  });
  console.log(spielberg);
}

// Order by title and print the first 20 titles

function orderAlphabetically(array){
  var titles = array.map(function(movie){
     
     return movie.title;
   })
   titles.sort();
   titles.splice(20);
    
   
   return titles;
   
 
 }

// Best yearly rate average
