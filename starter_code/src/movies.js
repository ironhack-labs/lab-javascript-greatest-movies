/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 

function turnHoursToMinutes(moviesArray) {
  return moviesArray.map(function (elem) {
    var hours = 0;
    var minutes = 0;
    if (elem.duration.indexOf('h') !== -1) {
      hours = parseInt(elem.duration[0], 10) * 60;
    }
    if (elem.duration.indexOf('min') !== -1) {
      minutes = parseInt(elem.duration.substring(elem.duration.length - 5, elem.duration.length - 3), 10);
    }
    return Object.assign({}, elem, { duration: hours + minutes });
  });
}
turnHoursToMinutes(movies);

// Get the average of all rates with 2 decimals 

function ratesAverage(moviesArray) {
  
  var rateReducer = function(acc, elem) {
    // Convert elem.rate to a number
    var toDigit = parseFloat(elem.rate);
    
    return (acc += toDigit);
  }
  
  var ratingVariable = moviesArray.reduce(rateReducer, 0);
  
  ratingVariable /= moviesArray.length;
  ratingVariable = ratingVariable.toFixed(2);
  ratingVariable = parseFloat(ratingVariable);
  
  return ratingVariable;
}
ratesAverage(movies);


// Get the average of Drama Movies

function dramaMoviesRate (moviesArray) {

  //filter out drama movies and store in moviesArray
  var filterDrama = moviesArray.filter(function(movie){
    
    return movie.genre.includes("Drama") == true; })
    
  //reduce the rating of all drama movies and store in variable, then calculate the average, round and return... find out if possible to shorten to call ratesAverage() function instead
  var rateReducer = function(acc, elem) {

    var toDigit = parseFloat(elem.rate);
    
    return (acc += toDigit);
  }
  
  var ratingVariable = filterDrama.reduce(rateReducer, 0);
  
  ratingVariable /= filterDrama.length;
  ratingVariable = ratingVariable.toFixed(2);
  ratingVariable = parseFloat(ratingVariable);
  
  return ratingVariable;
  }
  
  dramaMoviesRate(movies);



// Order by time duration, in growing order

function orderByDuration(moviesArray) {

    //change duration into minutes
    
    var durationInMins = moviesArray.map(function (elem) {
        var hours = 0;
        var minutes = 0;
        if (elem.duration.indexOf('h') !== -1) {
          hours = parseInt(elem.duration[0], 10) * 60;
        }
        if (elem.duration.indexOf('min') !== -1) {
          minutes = parseInt(elem.duration.substring(elem.duration.length - 5, elem.duration.length - 3), 10);
        }
        return Object.assign({}, elem, { duration: hours + minutes });
      });
    
    //sort duration from smallest to largest
    
    durationInMins.duration.sort(function(a,b){    //<-- can't read .sort of undefined... why is durationInMins.duration undefined?
      return a - b;
    });
    }
    
    orderByDuration(movies);

// How many movies did STEVEN SPIELBERG

function howManyMovies (moviesarray) {

  var filterDrama = moviesArray.filter(function(movie){
     
     return movie.genre.includes("Drama") == true && movie.director.includes("Steven Spielberg") == true;
  })
 
   var rateReducer = function(acc, elem) {
 
     var toDigit = parseFloat(elem.rate);
     
     return (acc += toDigit);
   }
   return "Steven Spielberg directed " + rateReducer + " drama movies!"
 }
 
 howManyMovies(movies);

// Order by title and print the first 20 titles


// Best yearly rate average
