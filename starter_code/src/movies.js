/* eslint no-restricted-globals: 'off' */

// Turn duration of the movies from hours to minutes 
var turnHourstoMinutes = movies.map(function(movie){
  //the string duration will be split into array w/
  //space selector
  var inHours = movie.duration.split(" "); 
  //parseInt will go through the string and obtain integer values
  //we will multiply the hours by 60 and add it to the minutes
  var totalMinutes = parseInt(inHours[0]) * 60 + parseInt(inHours[1]);
  //return the same object, except we will have var totalMinutes
  //in place of the duration for that key value pair
  return {
    title: movie.title,
    year: movie.year,
    director: movie.director,
    duration: totalMinutes,
    genre: movie.genre,
    rate: movie.rate
  }
})
//print the above function into console
console.log(turnHourstoMinutes);


// Get the average of all rates with 2 decimals 
var averageRating = movies.reduce(function(sum, rating){
  //basic reduce function, except we parse the rate
  //into a number and divide that by the array length
  return sum + Number(rating.rate)/movies.length;
},0);
//print the above function into the console
console.log(averageRating);

// Get the average of Drama Movies
var dramaRating = movies.filter(function(movie){
  //use the includes function to sort 
  //through array to find string "Drama"
  return movie.genre.includes("Drama") 
})
//print above function into the console
console.log(dramaRating);


// Order by time duration, in growing order
var orderByDuration = turnHourstoMinutes.sort(function(a,b){
  //if duration is equal, sort by title order
  if(a.duration === b.duration && a.title < b.title){
    return -1;
    //if duration is equal, sory by title order
  } else if(a.duration === b.duration && a.title > b.title){
    return 1;
  }
  //returns the movies by ascending 
  //duration
  return a.duration - b.duration;
});
//print the above function to the console
console.log(orderByDuration);

// How many movies did STEVEN SPIELBERG
var howManyMovies = movies.filter(function(movie){
  //filers the array by movie director and to see if genre includes "Drama"
  return movie.director === 'Steven Spielberg' && movie.genre.includes("Drama")
})
//print function to console
console.log(howManyMovies); 


// Order by title and print the first 20 titles
var orderAlphabetically = movies.sort(function(a,b){
  //using sort logic to 
  //sort by alphabetical 
  if(a.title < b.title){
    return -1;
  } else if (a.title > b.title){
    return 1;
  } return 0;
});
//print function to console
console.log(orderAlphabetically.slice(0,20));


// Best yearly rate average
//I'll come back to this
