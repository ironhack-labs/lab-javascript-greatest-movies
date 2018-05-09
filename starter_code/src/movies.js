/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
function turnHoursToMinutes(movies){
  let newMovies = movies.map((movie)=>{
   var numbersOnlyPattern= /\d+/g;
   var element = movie;
   element.duration = element.duration.match(numbersOnlyPattern);
   element.duration = parseInt(element.duration[0]*60) + parseInt(element.duration[1]);
   return element;
   });
   return newMovies;
}
//let nuevoarreglo = 

console.log(turnHoursToMinutes(movies));
//
console.log(movies)

// Get the average of all rates with 2 decimals 


// Get the average of Drama Movies


// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
