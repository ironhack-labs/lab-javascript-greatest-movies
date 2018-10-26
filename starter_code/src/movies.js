function ratesAverage(array){
  var sum = array.reduce(function(accum, current){
    accum = accum + current.rate
    return accum
  },0)
  
  return sum / array.length 
}



function dramaMoviesRate(movies){
  var dramaMovies =  movies.filter(function(item){
     return item.genre.includes("Drama")
 }) 
 
 if(dramaMovies.length > 0){
 return ratesAverage(dramaMovies)
}
} 




// Get the average of all rates with 2 decimals 

/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 

// Get the average of Drama Movies


// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
