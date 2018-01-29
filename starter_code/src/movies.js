/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 


// Get the average of all rates with 2 decimals 
var averageRating = movies.reduce(function(sum, rating){
    return sum + Number(rating.rate)/movies.length;
   },0);
   
   console.log(averageRating);

// Get the average of Drama Movies
var dramaMovies;

var dramaRating = movies.filter(function(movie){
    return movie.genre.includes("Drama") 
})

console.log(dramaRating);

// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG
var howManyMovies = movies.filter(function(movie){
    return movie.director === 'Steven Spielberg' && movie.genre.includes("Drama")
   })
   console.log(howManyMovies);

// Order by title and print the first 20 titles
var orderAlphabetically = movies.sort(function(a,b){
    if(a.title < b.title){
      return -1
    } else if (a.title > b.title){
      return 1
    } return 0;
   });
   
   console.log(orderAlphabetically.slice(0,20));

// Best yearly rate average
